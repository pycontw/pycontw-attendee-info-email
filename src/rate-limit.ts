import { performance } from "node:perf_hooks";

export function createRateLimiter() {
  // mailersend hobby plan rate limit: 10 req / min
  const intervalMs = 60_000 / 10 + 1000;
  let lastRequestAt = -Infinity;
  let pending: Promise<unknown> = Promise.resolve();

  return function schedule<T>(request: () => Promise<T>): Promise<T> {
    const result = pending.then(async () => {
      let remaining = intervalMs - (performance.now() - lastRequestAt);
      while (remaining > 0) {
        await new Promise<void>((resolve) => setTimeout(resolve, remaining));
        remaining = intervalMs - (performance.now() - lastRequestAt);
      }

      lastRequestAt = performance.now();
      return request();
    });

    pending = result.catch(() => {});
    return result;
  };
}
