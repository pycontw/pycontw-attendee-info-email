import { render } from "@react-email/components";
import { createSender } from "./sender";
import yaml from "yaml";
import { PyConWelcomeEmail, subject } from "../emails/pycon";
import {
  PyConWelcomeEmail as PyConWelcomeEmailEng,
  subject as subjectEng,
} from "../emails/pycon-en";
import { readFileSync } from "node:fs";

interface Recipient {
  name: string;
  email: string;
}

const data = readFileSync('./recipients.yaml', 'utf-8')
const recipientsMap = yaml.parse(data) as Record<string, string>;
const recipients: Recipient[] = Object.entries(recipientsMap).map(([email, name]) => ({ email, name }));

const sender = createSender({
  apiKey: process.env.MAILERSEND_API_KEY || "",
  sender: {
    email: process.env.SENDER_EMAIL || "registration@python.tw",
    name: process.env.SENDER_NAME || "PyCon Taiwan",
  },
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
