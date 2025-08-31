import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
  Markdown,
  MarkdownProps,
  pixelBasedPreset,
} from "@react-email/components";

interface PyConWelcomeEmailProps {
  recipient?: string;
}

const baseUrl = "https://email-cdn.python.tw/pycontw2025/email";

export const subject = "[PyCon TW 2025] Welcome to PyCon TW 2025";

export const PyConWelcomeEmail = ({ recipient }: PyConWelcomeEmailProps) => {
  const previewText =
    "PyCon TW 2025 kicks off on September 6th, and we’re excited to see you this year!";

  const name = recipient || "Attendee";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                brand: "#914DF4",
                base: "#1F1C3B",
              },
            },
          },
        }}
      >
        <Body className={pageBody}>
          <Container className={headContainer}>
            <Section className="px-3">
              <Img src={`${baseUrl}/logo.png`} alt="PyCon TW" width="128" />
            </Section>
          </Container>

          <Container className={cardContainer}>
            {/* Greeting */}
            <Section className={`${sectionX} pt-2`}>
              <Text className={p}>Hey {name},</Text>
              <Text className={`mt-2 ${p}`}>
                PyCon TW 2025 kicks off on <b>September 6th</b>, and we’re
                excited to see you at this year’s annual conference! To help you
                prepare, we’ve gathered all the key information you’ll need.
              </Text>
            </Section>

            {/* Date & Time */}
            <Section className={sectionX}>
              <Text className={`mt-3 ${label}`}>Date & Time (GMT+8)</Text>
              <Text className={`mt-1 ${p}`}>
                September 06 (Sat), 2025 — 09:30–18:00
                <br />
                September 07 (Sun), 2025 — 09:30–17:30
              </Text>

              <Text className={`mt-3 ${label}`}>Venue & Address</Text>
              <Text className={`mt-1 ${p}`}>
                Taipei New Horizon, 6F (Inside Eslite Spectrum Songyan)
                <br />
                <Link
                  href="https://maps.app.goo.gl/n9sGmn7iZ8JnJzDB9"
                  className={a}
                >
                  6F, No. 88, Yanchang Rd, Xinyi District, Taipei City, Taiwan
                </Link>
              </Text>

              <Button
                href="https://tw.pycon.org/2025/en-us/venue"
                className={btnBase}
              >
                Transportation Info
              </Button>
            </Section>

            <Hr className={hr} />

            {/* ✨ Translation Service */}
            <Section className={sectionX}>
              <Heading className={h2}>✨ Translation Service</Heading>
              <Text className={`mt-2 ${p}`}>
                We are providing AI-powered live translation. Access the
                translation links here:
              </Text>
              <Button
                href="https://pycontw.connyaku.app/home?event=pycontw25-d1"
                className={btnBrand}
              >
                Day 1 Translation Link
              </Button>
              <Button
                href="https://pycontw.connyaku.app/home?event=pycontw25-d2"
                className={`${btnBrand} mt-3`}
              >
                Day 2 Translation Link
              </Button>
            </Section>

            <Hr className={hr} />

            {/* 🔑 Registration (Check-in) */}
            <Section className={sectionX}>
              <Heading className={h2}>🔑 Registration (Check-in)</Heading>
              <Markdown {...markdownAttrs}>
                {`
Check-in Start Times

- Sep 06 (Sat) — <span style="color: red;">**09:00**</span>
- Sep 07 (Sun) — <span style="color: red;">**09:00**</span>

Process

- Show your **QR code** in the **KKTIX App** to complete check-in. ([Instructions](https://kktix.com/user_guide_qrcode.html))
- Please have the app open with the **QR code** ready on the 1st floor. Proceed upstairs and follow staff instructions to line up.
- If you are unable to use the **KKTIX App**, please notify the staff immediately.
- If your ticket includes a conference t-shirt, you can pick it up at the counter after check-in. 
- For <span style="color: red;">**Individual late bird**</span> tickets, shirts will be distributed on the afternoon of **Day 2**.
`}
              </Markdown>
            </Section>

            <Hr className={hr} />

            {/* 🎮 Events */}
            <Section className={sectionX}>
              <Heading className={h2}>🎮 Events</Heading>
              <Markdown {...markdownAttrs}>
                {`
#### 💃 PyNight
Learn new technologies during the day and enjoy swing dancing, stand-up comedy, and unlimited signature cocktails at night.

#### 📸 Py Photo Booth
Experience Taiwan's first tech-community photo booth! Snap a picture with our mascot 🐍 and receive instant prints.

#### 🧩 Booth Game: Python Bear’s Grand Journey in Taiwan
Slip into another world—awaken as a Formosan black bear on “PyCon TW Island”! Join the Adventure Bear Conference to learn Python, meet friends, and collect ingredients with your Adventurer’s Badge for a Bear Bubble Tea and the grand prize - Herman Miller (Ergonomic Chai).
                `}
              </Markdown>

              <Button
                href="https://hackmd.io/@pycontw/rkqYtWU_el?utm_source=chatgpt.com"
                className={`${btnBrand} mt-4`}
              >
                Booth Game Guide
              </Button>
            </Section>

            <Hr className={hr} />

            {/* 🗓 Agenda & Events */}
            <Section className={sectionX}>
              <Heading className={h2}>🗓 Agenda & Events</Heading>
              <Markdown {...markdownAttrs}>
                {`
This year's conference features 3 keynote speeches, 37 talks, 3 tutorials, please refer to the [schedule](https://tw.pycon.org/2025/en-us/conference/schedule). In addition, there will be several special sessions:

#### 🗣️ Panel Discussion
 Experts from various fields will share the stage to explore the intersection of AI and professional domains, discussing future trends. [more...](https://tw.pycon.org/2025/en-us/conference/panel-discussion)

#### 💬 Open Space
Join small, participant-organized gatherings where the topics and formats are entirely up to you! [more...](https://tw.pycon.org/2025/en-us/events/open-spaces)

#### 📋 Poster Session
Present your projects or research on a single poster—perfect for in-depth discussions and networking. [more...](https://tw.pycon.org/2025/en-us/conference/poster-session)

#### ✨ Young Inspires
A brand-new stage for passionate students to share their learning, hands-on experiences, and innovations—igniting technical exchanges together! [more...](https://tw.pycon.org/2025/en-us/conference/young-inspirers)

#### ⚡ Lightning Talks
Deliver maximum impact in just 3 minutes!
                `}
              </Markdown>

              <Button
                href="https://tw.pycon.org/2025/en-us/events/lightning-talks"
                className={`${button} bg-yellow-500 text-yellow-950 mt-4`}
              >
                Lightning Talk Guide
              </Button>
            </Section>

            {/* 💬 Discord / 🌐 Internet / 🍔 Food & Beverages */}
            <Section className={sectionX}>
              <Hr className={hrTight} />

              <Heading as="h3" className={h3}>
                💬 Discord
              </Heading>
              <Text className={`mt-2 ${p}`}>
                We’ll be using Discord for communication during the conference.
              </Text>
              <Button
                href="https://discord.gg/dr5JmVFNtj"
                className={btnDiscord}
              >
                Join Discord Channel
              </Button>

              <Hr className={hrTight} />

              <Heading as="h3" className={h3}>
                🌐 Internet
              </Heading>
              <Text className={`mt-2 ${p}`}>
                Conference WiFi SSID and password will be announced on-site.
              </Text>

              <Hr className={hrTight} />

              <Heading as="h3" className={h3}>
                🍔 Food & Beverages
              </Heading>

              <Markdown {...markdownAttrs}>
                {`
Lunch and afternoon snacks will be provided on both days.  
We encourage you to bring eco-friendly tableware and a reusable bottle.
                `}
              </Markdown>
            </Section>

            <Hr className={hr} />

            {/* 🚀 About Sprints */}
            <Section className={sectionX}>
              <Heading as="h2" className={h2}>
                🚀 About Sprints
              </Heading>
              <Markdown {...markdownAttrs}>
                {`
Our Sprints are guided by project leaders who will introduce open issues and feature requests. Participants are welcome to join projects they are interested in and take on the challenge of contributing to open source in one day.

- 📅 Date: September 05, 2025
- 📍 This is a separate event from the main conference and requires an additional ticket.
`}
              </Markdown>
              <Button
                href="https://pycontw.kktix.cc/events/2025-sprints"
                className={btnKKTIX}
              >
                Get tickets on KKTIX
              </Button>
            </Section>

            <Hr className={hr} />

            {/* 💜 Thanks, Sponsors! */}
            <Section className={sectionX}>
              <Heading className={h2}>💜 Thanks, Sponsors!</Heading>
              <Text className={`mt-2 ${p}`}>
                A huge thank-you to our sponsors for their generous support! Check out their greetings and booth activities on the official site.
              </Text>
              <Img
                src={`${baseUrl}/sponsors.png`}
                alt="PyCon TW 2025 Sponsors"
                className={sponsorImage}
              />
            </Section>

            <Hr className={hr} />

            {/* 🚨 Notice */}
            <Section className={sectionX}>
              <Heading className={h2}>🚨 Notice</Heading>
              <Markdown
                markdownContainerStyles={{
                  ...markdownAttrs.markdownContainerStyles,
                  fontSize: "14px",
                }}
                markdownCustomStyles={markdownAttrs.markdownCustomStyles}
              >
                {`
1. If your ticket includes a t-shirt or exclusive swag, redeem it at the service desk.
2. Electronic invoices for corporate tickets will be sent after the event. If you have any questions, please email [organizers@python.tw](mailto:organizers@python.tw)。
3. During the conference dates (Sep 6–7), whether the event will take place depends on Taipei City Government’s official work suspension announcement. Updates will be posted on the PyCon Taiwan official website and social media. (Please refer to government announcements and PyCon TW’s official updates.)
4. Ticket refunds and exchanges are handled by [KKTIX on behalf of the event organizer](https://support.kktix.com/hc/zh-tw/articles/22446025825561-KKTIX-%E4%BB%A3%E7%90%86%E9%80%80%E7%A5%A8%E8%BE%A6%E6%B3%95) (10% service fee; no refunds within 10 days before the event).
5. [Privacy Policy](https://tw.pycon.org/2025/en-us/about/privacy-policy): PyCon TW 2025 protects your personal data in accordance with our statement.
6. For more information about this year's conference, please refer to the [PyCon TW 2025 official website](https://tw.pycon.org/2025/en-us).
7. The organizer reserves the right to make final changes, adjustments, and interpretations of PyCon TW 2025
                `}
              </Markdown>
            </Section>

            <Hr className={hr} />

            {/* 📜 Code of Conduct */}
            <Section className={`${sectionX} pb-6`}>
              <Heading className={h2}>📜 Code of Conduct</Heading>
              <Markdown {...markdownAttrs}>
                {`
Please read and follow the [PyCon TW 2025 Code of Conduct](https://tw.pycon.org/2025/en-us/about/code-of-conduct). It applies to all physical and digital spaces—let’s create a safe, friendly, and inspiring community together!
`}
              </Markdown>
              <Text className={`mt-6 ${p}`}>
We look forward to seeing you at PyCon TW 2025 🎉
              </Text>
            </Section>
          </Container>

          {/* Footer */}
          <Container className="mx-auto max-w-[640px]">
            <Text className={footerText}>&copy; 2025 PyCon TW</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

/** Shared Tailwind utility strings */
const pageBody = "font-sans bg-base my-0 mx-auto px-1";

const headContainer = "mt-4 mx-auto max-w-[640px]";

const cardContainer =
  "mt-4 mx-auto max-w-[640px] bg-white rounded-xl shadow-sm text-[#374151]";

const sectionX = "px-6";

const hr = "mt-4 mb-6 border-t border-[#eceff3]";
const hrTight = "my-5 border-t border-[#eceff3]";

const h2 = "mt-1 mb-2 text-xl font-bold ";
const h3 = "m-0 text-base font-semibold";

const label = "m-0 text-sm text-[#6B7280]";
const p = "text-[15px]";
const subhead = "text-[15px] leading-7 font-semibold";

const a = "text-[#3776AB] underline";

const button =
  "block text-center rounded-lg px-4 py-3 text-white text-sm font-semibold no-underline mb-2";

const btnBrand = `bg-brand ${button}`;
const btnBase = `bg-base ${button}`;
const btnKKTIX = `bg-[#64c025] ${button}`;
const btnDiscord = `bg-[#5865F2] ${button}`;

const sponsorImage = "max-w-full";
const footerText = "text-center text-[12px] leading-6 text-[#9CA3AF]";

const markdownAttrs: {
  markdownContainerStyles: MarkdownProps["markdownContainerStyles"];
  markdownCustomStyles: MarkdownProps["markdownCustomStyles"];
} = {
  markdownContainerStyles: {
    fontSize: "15px",
  },
  markdownCustomStyles: {
    p: {
      lineHeight: "24px",
      margin: "8px 0",
    },
    ul: {
      lineHeight: "1.75rem",
      marginTop: "0.25rem",
      paddingLeft: "1.25rem",
    },
    ol: {
      lineHeight: "1.75rem",
      marginTop: "0.25rem",
      paddingLeft: "1.25rem",
    },
    link: {
      color: "#3776AB",
      textDecoration: "underline",
    },
    h4: {
      margin: "12px 0 0 0",
      fontSize: "15px",
    },
  },
};

export default PyConWelcomeEmail;
