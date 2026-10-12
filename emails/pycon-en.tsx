import { Button, Heading, Hr, Link, Markdown, Section, Text } from "@react-email/components";
import { EmailLayout, Sponsors, styles, markdownAttrs, type PyConWelcomeEmailProps } from "./_components/layout";

export const subject = "【PyCon TW 2026】Pre-Event Notification and Important Reminders";
const website = "https://tw.pycon.org/2026/en-us";

export const PyConWelcomeEmail = ({ recipient, assetBaseUrl }: PyConWelcomeEmailProps) => (
  <EmailLayout
    lang="en"
    assetBaseUrl={assetBaseUrl}
    previewText="Join PyCon TW 2026 on October 17–18 at Taipei Medical University. Here is your pre-event information and how to find your QR code."
  >
    <Section className={`${styles.section} pt-2`}>
      <Text className={styles.p}>Dear {recipient || "Attendee"},</Text>
      <Text className={styles.p}>
        Thank you for joining this annual gathering of the global Python community!
        This year, PyCon Taiwan continues to focus on the exchange of Python
        technology and its diverse applications. We welcome all friends interested
        in Python to join us, share what they have learned, exchange ideas, and meet
        like-minded peers. Here is the important pre-event information for this
        year&apos;s conference:
      </Text>
    </Section>

    <Section className={styles.section}>
      <Heading as="h2" className={styles.h2}>Event Time and Location</Heading>
      <Text className={styles.p}>
        <strong>Event Dates:</strong> October 17th to 18th, 2026
        <br />
        <strong>Location:</strong> Taipei Medical University
      </Text>
      <Text className={styles.p}>
        For detailed transportation and venue maps, please refer to the Venue
        Information on the official website.
      </Text>
      <Button href={`${website}/venue`} className={styles.button}>Venue and Transportation</Button>
    </Section>

    <Hr className={styles.hr} />

    <Section className={styles.section}>
      <Heading as="h2" className={styles.h2}>Rich Agenda and Activities</Heading>
      <Text className={styles.p}>
        This year we have prepared more than 30 sessions for everyone. The exciting content includes:
      </Text>
      <Markdown {...markdownAttrs}>{`
- **Agenda:** Covering Keynotes, Talks, Tutorials, and Lightning Talks.
- **Special Features:** Including Unconference, Panel Discussions, and Young Inspires segments.
- **Activities:** There will also be opportunities for networking such as Sprints, Poster Sessions, Open Spaces, and Job Listings.
      `}</Markdown>
      <Text className={styles.p}>
        We recommend checking the detailed schedule online in advance to plan your personalized itinerary.
      </Text>
      <Button href={`${website}/conference/schedule`} className={styles.button}>View the Schedule</Button>
    </Section>

    <Hr className={styles.hr} />

    <Section className={styles.section}>
      <Heading as="h2" className={styles.h2}>Check-in &amp; QR Code Instructions</Heading>
      <Text className={styles.p}>
        <strong>If you purchased as a &quot;KKTIX Member&quot;:</strong>{" "}
        Please download the KKTIX iOS / Android App or log in to the{" "}
        <Link href="https://kktix.com/" className={styles.link}>KKTIX website</Link>,
        and get your QR code from the &quot;My Tickets&quot; page.
      </Text>
      <Text className={styles.p}>
        <strong>If you are a &quot;Non-member&quot; or purchased without logging in:</strong>{" "}
        Please search your inbox for an email whose subject contains both
        &quot;[KKTIX] PyCon TW 2026 Registration&quot; and &quot;訂單已成立&quot;.
        The ticket type may be <strong>Individual / 個人票種</strong>,{" "}
        <strong>Reserved / 保留票種</strong>, or <strong>Corporate / 企業票種</strong>.
        Simply show the QR code from that order confirmation email at the check-in desk.
      </Text>
    </Section>

    <Hr className={styles.hr} />

    <Section className={styles.section}>
      <Heading as="h2" className={styles.h2}>Important Reminders</Heading>
      <Text className={styles.p}>
        <strong>Code of Conduct:</strong> The conference is committed to providing
        a friendly environment. Please be sure to read and abide by our{" "}
        <Link href={`${website}/about/code-of-conduct`} className={styles.link}>Code of Conduct</Link>{" "}
        in advance.
      </Text>
      <Text className={styles.p}>
        <strong>Stay Updated:</strong> If you want to receive the latest
        information, don&apos;t miss our{" "}
        <Link href="https://conf.python.tw/" className={styles.link}>blog</Link>, listen to the{" "}
        <Link href="https://pycast.firstory.cc/episodes" className={styles.link}>PyCast program</Link>, or subscribe to our{" "}
        <Link href="https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw" className={styles.link}>YouTube channel</Link>{" "}
        to watch session recordings.
      </Text>
      <Text className={styles.p}>
        If you have any questions, please feel free to contact us via email at any time:{" "}
        <Link href="mailto:organizers@python.tw" className={styles.link}>organizers@python.tw</Link>.
      </Text>
      <Text className={styles.p}>We look forward to seeing you at PyCon TW 2026!</Text>
      <Text className={styles.p}>Sincerely,<br />PyCon TW 2026 Organizing Team</Text>
    </Section>

    <Hr className={styles.hr} />

    <Sponsors assetBaseUrl={assetBaseUrl} heading="Special Thanks to Our Sponsors">
      <Text className={styles.p}>
        Thank you to all the sponsors for their support of PyCon TW 2026! You can visit the{" "}
        <Link href={`${website}/sponsor`} className={styles.link}>Sponsors page</Link>{" "}
        to see the full list of our sponsors.
      </Text>
    </Sponsors>
  </EmailLayout>
);

PyConWelcomeEmail.PreviewProps = { assetBaseUrl: "/static" } satisfies PyConWelcomeEmailProps;

export default PyConWelcomeEmail;
