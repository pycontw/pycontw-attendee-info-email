import { render } from "@react-email/components";
import { createSender } from "./sender";
import yaml from "yaml";
import { PyConWelcomeEmail, subject } from "../emails/pycon";
import {
  PyConWelcomeEmail as PyConWelcomeEmailEng,
  subject as subjectEng,
} from "../emails/pycon-en";
import { readFileSync } from "node:fs";
import { consola } from "consola";

interface Recipient {
  name: string;
  email: string;
}

const recipients = resolveRecipients("./recipients.yaml");
const senderEmail = process.env.SENDER_EMAIL || "registration@python.tw";
const senderName = process.env.SENDER_NAME || "PyCon Taiwan";

// show send info and preview
consola.box(`\`PyCon Taiwan 2025\` Attendee Info Email Sender
  
Sender name: \`${senderName}\`
Sender email: \`${senderEmail}\`
Email recipients: \`${recipients.length}\` (total \`${
  recipients.length * 2
}\` emails)
Recipients preview:
${getPreviewRecipients(recipients)}`);

// confirm to send
if (
  !(await consola.prompt(`Confirm to send?`, {
    type: "confirm",
    initial: false,
    cancel: "null",
  }))
) {
  process.exit(0);
}

const sender = createSender({
  apiKey: process.env.MAILERSEND_API_KEY || "",
  senderEmail,
  senderName,
});

// start send emails
for (const recipient of recipients) {
  await sender.send(
    "zh",
    recipient.email,
    recipient.name,
    subject,
    await render(<PyConWelcomeEmail recipient={recipient.name} />)
  );

  await sender.send(
    "en",
    recipient.email,
    recipient.name,
    subjectEng,
    await render(<PyConWelcomeEmailEng recipient={recipient.name} />)
  );
}

// Utils

function resolveRecipients(path: string): Recipient[] {
  const data = readFileSync(path, "utf-8");
  const recipientsMap = yaml.parse(data) as Record<string, string>;
  if (typeof recipientsMap !== "object")
    throw new Error("Invalid recipients format");

  const recipients: Recipient[] = [];

  for (const [email, name] of Object.entries(recipientsMap)) {
    recipients.push({ email, name });
  }

  if (recipients.length === 0) throw new Error("No recipients found");

  return recipients;
}

function getPreviewRecipients(recipients: Recipient[], count = 3): string {
  return (
    recipients
      .slice(0, count)
      .map((r) => `  ${r.name} <${r.email}>`)
      .join("\n") + (recipients.length > count ? "\n..." : "")
  );
}
