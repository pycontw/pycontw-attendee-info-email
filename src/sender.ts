import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { appendFileSync } from "node:fs";

export function createSender({
  apiKey,
  sender,
  log = './email_sent.log'
}: {
  apiKey: string;
  sender: { email: string; name: string };
  log?: string | false;
}) {
  const mailerSend = new MailerSend({ apiKey });
  const sentFrom = new Sender(sender.email, sender.name);

  async function send(type: string, email: string, name: string, subject: string, emailHtml: string) {
    console.log(`Sending ${type} email to ${name} <${email}>...`);

    const recipients = [new Recipient(email, name)];
    const emailParams = await new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(subject)
      .setHtml(emailHtml);

    const response = await mailerSend.email.send(emailParams);
    if (log && response) {
      writeLog(log, type, email, name, JSON.stringify(response));
    }
  }

  return { send };
}

function writeLog(filePath: string, type: string, email: string, name: string, response: string) {
  const logEntry = `${new Date().toLocaleString()} - Sent [${type}] email to ${name} <${email}> - Response: ${response}\n`;
  appendFileSync(filePath, logEntry);
}
