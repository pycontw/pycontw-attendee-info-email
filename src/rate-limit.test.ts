import assert from "node:assert/strict";
import { performance } from "node:perf_hooks";
import { setImmediate } from "node:timers/promises";
import { test, type TestContext } from "node:test";
import { createRateLimiter } from "./rate-limit";

function mockClock(context: TestContext) {
  context.mock.timers.enable({ apis: ["Date", "setTimeout"], now: 0 });
  context.mock.method(performance, "now", () => Date.now());
}

test("starts immediately and spaces concurrent requests at least six seconds apart", async (context) => {
  mockClock(context);
  const schedule = createRateLimiter();
  const starts: number[] = [];
  const requests = Array.from({ length: 12 }, (_, index) =>
    schedule(async () => {
      starts.push(performance.now());
      return index;
    })
  );

  await setImmediate();
  assert.deepEqual(starts, [0]);

  for (let index = 1; index < requests.length; index++) {
    context.mock.timers.tick(5_999);
    await setImmediate();
    assert.equal(starts.length, index);
    context.mock.timers.tick(1);
    await setImmediate();
    assert.equal(starts[index], index * 6_000);
  }

  assert.deepEqual(await Promise.all(requests), Array.from({ length: 12 }, (_, i) => i));
});

test("failed requests count toward the limit without blocking later requests", async (context) => {
  mockClock(context);
  const schedule = createRateLimiter();
  await assert.rejects(schedule(async () => { throw new Error("API failure"); }), /API failure/);

  let started = false;
  const next = schedule(async () => { started = true; });
  await setImmediate();
  context.mock.timers.tick(5_999);
  await setImmediate();
  assert.equal(started, false);
  context.mock.timers.tick(1);
  await next;
  assert.equal(started, true);
});

test("does not add a delay after the interval has already elapsed", async (context) => {
  mockClock(context);
  const schedule = createRateLimiter();
  await schedule(async () => {});
  context.mock.timers.tick(10_000);
  assert.equal(await schedule(async () => performance.now()), 10_000);
});
