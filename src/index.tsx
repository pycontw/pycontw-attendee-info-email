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

const data = readFileSync("./recipients.yaml", "utf-8");
const recipientsMap = yaml.parse(data) as Record<string, string>;
const recipients: Recipient[] = Object.entries(recipientsMap).map(
  ([email, name]) => ({ email, name })
);

const senderEmail = process.env.SENDER_EMAIL || "registration@python.tw";
const senderName = process.env.SENDER_NAME || "PyCon Taiwan";

consola.box(`\`PyCon Taiwan 2025\` Attendee Info Email Sender
  
Sender name: \`${senderName}\`
Sender email: \`${senderEmail}\`
Email recipients: \`${recipients.length}\` (total \`${recipients.length * 2}\` emails)`);

const confirm = await consola.prompt(`Confirm to send?`, {
  type: "confirm",
  initial: false,
  cancel: "null",
});

if (!confirm) {
  process.exit(0);
}

const sender = createSender({
  apiKey: process.env.MAILERSEND_API_KEY || "",
  senderEmail,
  senderName,
});

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
