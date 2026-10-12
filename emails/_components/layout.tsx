import {
  Body, Container, Head, Heading, Html, Img, Preview, Section, Tailwind, Text,
  pixelBasedPreset, type MarkdownProps,
} from "@react-email/components";
import type { ReactNode } from "react";

export interface PyConWelcomeEmailProps {
  recipient?: string;
  assetBaseUrl?: string;
}

const defaultAssetBaseUrl = "https://email-cdn.python.tw/pycontw2026/email";

// Gmail dark mode preserves gradient colors while recoloring background-color.
// Use background shorthand for Gmail Android; solid colors remain the fallback.
const logoBackgrounds = {
  black: { backgroundColor: "#000000", background: "linear-gradient(#000000, #000000)" },
  white: { backgroundColor: "#ffffff", background: "linear-gradient(#ffffff, #ffffff)" },
};

export function EmailLayout({
  lang, previewText, assetBaseUrl = defaultAssetBaseUrl, children,
}: {
  lang: string;
  previewText: string;
  assetBaseUrl?: string;
  children: ReactNode;
}) {
  return (
    <Html lang={lang}>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind config={{ presets: [pixelBasedPreset] }}>
        <Body className="font-sans bg-[#000000] my-0 mx-auto px-1">
          <Container className="mt-5 mx-auto max-w-[640px]">
            <Section className="px-6 py-3 rounded-xl" style={logoBackgrounds.black}>
              <Img src={`${assetBaseUrl}/pycon-tw.png`} alt="PyCon Taiwan" width="100" className="max-w-full h-auto" />
            </Section>
          </Container>
          <Container className="mt-5 mx-auto max-w-[640px] bg-white rounded-xl text-[#374151]">
            {children}
          </Container>
          <Container className="mx-auto max-w-[640px]">
            <Text className="text-center text-xs leading-6 text-[#9CA3AF]">© 2026 PyCon TW</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export function Sponsors({
  heading, assetBaseUrl = defaultAssetBaseUrl, children,
}: {
  heading: string;
  assetBaseUrl?: string;
  children: ReactNode;
}) {
  return (
    <Section className={`${styles.section} pb-6`}>
      <Heading as="h2" className={styles.h2}>{heading}</Heading>
      {children}
      <Section className="rounded-lg px-3 py-2" style={logoBackgrounds.white}>
        {[
          { file: "meta.png", alt: "Meta", width: 280 },
          { file: "trendai.png", alt: "TrendAI (Trend Micro / 趨勢科技)", width: 240 },
          { file: "deepwisdom.png", alt: "深智數位 DeepWisdom", width: 240 },
        ].map(({ file, alt, width }) => (
          <Section key={file} className="py-3">
            <Img src={`${assetBaseUrl}/${file}`} alt={alt} width={width} className="mx-auto max-w-full h-auto" />
          </Section>
        ))}
      </Section>
    </Section>
  );
}

export const styles = {
  section: "px-6",
  h2: "mt-1 mb-2 text-xl leading-7 font-bold",
  p: "my-3 text-[15px] leading-6",
  hr: "mt-4 mb-6 border-t border-[#eceff3]",
  link: "text-[#3776AB] underline",
  button: "block bg-[#000000] text-center rounded-lg px-4 py-3 text-white text-sm font-semibold no-underline mb-2",
};

export const markdownAttrs: Pick<MarkdownProps, "markdownContainerStyles" | "markdownCustomStyles"> = {
  markdownContainerStyles: { fontSize: "15px" },
  markdownCustomStyles: {
    p: { lineHeight: "24px", margin: "8px 0" },
    ul: { lineHeight: "26px", marginTop: "4px", paddingLeft: "20px" },
    li: { marginBottom: "8px" },
  },
};
