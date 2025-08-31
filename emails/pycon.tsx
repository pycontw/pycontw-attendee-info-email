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

export const subject = "[PyCon TW 2025] 年會行前通知";

export const PyConWelcomeEmail = ({ recipient }: PyConWelcomeEmailProps) => {
  const previewText =
    "PyCon TW 2025 將在 09 月 06 日揭開序幕，很高興能在今年的年會與您相見！";

  const name = recipient || "會眾";

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
              <Text className={p}>嗨，{name}！</Text>
              <Text className={`mt-2 ${p}`}>
                PyCon TW 2025 將在 <b>09 月 06 日</b>{" "}
                揭開序幕，很高興能在今年的年會與您相見！我們特別整理了行前必讀資訊，敬請詳細閱讀：
              </Text>
            </Section>

            {/* 日期與時間 */}
            <Section className={sectionX}>
              <Text className={`mt-3 ${label}`}>日期與時間 (GMT+8)</Text>
              <Text className={`mt-1 ${p}`}>
                2025 年 09 月 06 日 (六) 09:30 - 18:00
                <br />
                2025 年 09 月 07 日 (日) 09:30 - 17:30
              </Text>

              <Text className={`mt-3 ${label}`}>地點與地址</Text>
              <Text className={`mt-1 ${p}`}>
                臺北文創大樓 6F（誠品生活松菸店內）
                <br />
                <Link
                  href="https://maps.app.goo.gl/n9sGmn7iZ8JnJzDB9"
                  className={a}
                >
                  台北市信義區菸廠路 88 號
                </Link>
              </Text>

              <Button
                href="https://tw.pycon.org/2025/zh-hant/venue"
                className={btnBase}
              >
                地圖及交通資訊
              </Button>
            </Section>

            <Hr className={hr} />

            {/* ✨ 議程翻譯 */}
            <Section className={sectionX}>
              <Heading className={h2}>✨ 議程翻譯</Heading>
              <Text className={`mt-2 ${p}`}>
                本次大會將會導入 AI 翻譯系統，您可透過以下連結進入翻譯服務：
              </Text>
              <Button
                href="https://pycontw.connyaku.app/home?event=pycontw25-d1"
                className={btnBrand}
              >
                Day 1 翻譯連結
              </Button>
              <Button
                href="https://pycontw.connyaku.app/home?event=pycontw25-d2"
                className={`${btnBrand} mt-3`}
              >
                Day 2 翻譯連結
              </Button>
            </Section>

            <Hr className={hr} />

            {/* 🔑 關於報到 */}
            <Section className={sectionX}>
              <Heading className={h2}>🔑 關於報到</Heading>
              <Markdown {...markdownAttrs}>
                {`
報到時間

- 09 月 06 日 (六) <span style="color: red;">**09:00**</span> 開始。
- 09 月 07 日 (日) <span style="color: red;">**09:00**</span> 開始。

報到方式與流程

- 使用 **KKTIX App** 出示 **QR code** 完成報到 ([教學連結](https://support.kktix.com/hc/zh-tw/articles/23055566079257-%E9%9B%BB%E5%AD%90%E7%A5%A8%E5%88%B8-QR-Code-%E5%9C%A8%E5%93%AA%E8%A3%A1-%E8%A9%B2%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8))。
- 請先在一樓準備好 **KKTIX App**，並顯示 **QR code**。上樓後依照工作人員指引排隊報到。
- 若無法使用 **KKTIX App**，請立即向工作人員說明。
- 若您的票種包含「紀念衣服」，將於完成報到後至領取櫃檯領取。
- <span style="color: red;">**晚鳥票種**</span>之紀念衣服，將於**第二天**下午發放。
`}
              </Markdown>
            </Section>

            <Hr className={hr} />

            {/* 🎮 活動 */}
            <Section className={sectionX}>
              <Heading className={h2}>🎮 活動</Heading>
              <Markdown {...markdownAttrs}>
                {`
#### 💃 PyNight
白天吸收技術新知，夜晚搖擺舞、單口喜劇與暢飲特調，盡情放鬆狂歡！

#### 📸 Py 貼機
台灣首台技術社群拍貼機！和吉祥物拍蛇合影🐍，現場輸出紀念照。

#### 🧩 大地遊戲【派森熊的台灣盛會之旅】
在加班後疲憊返家的你，一腳踩空，醒來竟化身台灣黑熊！在神秘的「拍抗島」上，你受邀參加一年一度的冒險熊大會。這裡聚集來自時空裂縫的熊熊們，一同學習最新 Python 技術、交流同好、分享美食。透過「冒險者憑證」蒐集美味配料，調製專屬手搖杯，還有機會贏得 Herman Miller 人體工學椅 超級大獎！
                `}
              </Markdown>

              <Button
                href="https://hackmd.io/@pycontw/rkqYtWU_el?utm_source=chatgpt.com"
                className={`${btnBrand} mt-4`}
              >
                大地遊戲說明
              </Button>
            </Section>

            <Hr className={hr} />

            {/* 🗓 議程 */}
            <Section className={sectionX}>
              <Heading className={h2}>🗓 議程</Heading>
              <Markdown {...markdownAttrs}>
                {`
今年議程包含 3 場主題演講、37 場一般演講、3 場專業課程，歡迎參考[議程表](https://tw.pycon.org/2025/zh-hant/conference/schedule)。此外，還有多場特別議程：

#### 🗣️ Panel Discussion
跨領域專家同台對談，深入探討 AI 與未來趨勢。[了解更多](https://tw.pycon.org/2025/zh-hant/conference/panel-discussion)

#### 💬 開放空間（Open Space）
由會眾自發舉辦的小型聚會，主題與形式自由決定。[活動介紹](https://tw.pycon.org/2025/zh-hant/events/open-spaces) 

#### 📋 海報展（Poster Session）
用一張海報傳遞專案與研究成果，適合深度交流與互動。[了解更多](https://tw.pycon.org/2025/zh-hant/conference/poster-session)

#### ✨ Young Inspires
全新舞台邀請充滿熱情的學生分享學習、實作與創新，一同點燃技術交流火花！[了解更多](https://tw.pycon.org/2025/zh-hant/conference/young-inspirers)

#### ⚡ 閃電秀（Lightning Talks）
3 分鐘征服全場，用最短時間展現最強影響力！
                `}
              </Markdown>

              <Button
                href="https://tw.pycon.org/2025/zh-hant/events/lightning-talks"
                className={`${button} bg-yellow-500 text-yellow-950 mt-4`}
              >
                閃電秀完整攻略
              </Button>
            </Section>

            {/* 💬 Discord / 🌐 網路 / 🍔 餐食 */}
            <Section className={sectionX}>
              <Hr className={hrTight} />

              <Heading as="h3" className={h3}>
                💬 Discord
              </Heading>
              <Text className={`mt-2 ${p}`}>
                會議期間使用 Discord 作為溝通平台。
              </Text>
              <Button
                href="https://discord.gg/dr5JmVFNtj"
                className={btnDiscord}
              >
                加入 Discord 頻道
              </Button>

              <Hr className={hrTight} />

              <Heading as="h3" className={h3}>
                🌐 網路
              </Heading>
              <Text className={`mt-2 ${p}`}>
                現場 WiFi SSID 與密碼將於現場公布。
              </Text>

              <Hr className={hrTight} />

              <Heading as="h3" className={h3}>
                🍔 餐食
              </Heading>

              <Markdown {...markdownAttrs}>
                {`
會議兩天提供中餐與下午茶點。  
歡迎自備環保餐具及水杯，響應垃圾減量。
                `}
              </Markdown>
            </Section>

            <Hr className={hr} />

            {/* 🚀 衝刺開發 Sprints */}
            <Section className={sectionX}>
              <Heading as="h2" className={h2}>
                🚀 衝刺開發 Sprints
              </Heading>
              <Markdown {...markdownAttrs}>
                {`
衝刺開發將由專案領導人帶來待解決的問題與待開發的功能，並現場進行介紹。參與者可自由選擇加入有興趣的專案，共同完成一日的開源挑戰。

- 📅 舉辦時間：2025 年 09 月 05 日
- 📍 此活動並年會主議程，需另外購票。
`}
              </Markdown>
              <Button
                href="https://pycontw.kktix.cc/events/2025-sprints"
                className={btnKKTIX}
              >
                前往 KKTIX 購票
              </Button>
            </Section>

            <Hr className={hr} />

            {/* 💜 感謝贊助夥伴 */}
            <Section className={sectionX}>
              <Heading className={h2}>💜 感謝贊助夥伴</Heading>
              <Text className={`mt-2 ${p}`}>
                今年大會得以順利舉辦，要感謝贊助商們的大力支持！
                歡迎前往官方部落格查看贊助商的行前招呼與攤位活動。
              </Text>
              <Img
                src={`${baseUrl}/sponsors.png`}
                alt="PyCon TW 2025 Sponsors"
                className={sponsorImage}
              />
            </Section>

            <Hr className={hr} />

            {/* 🚨 注意事項 */}
            <Section className={sectionX}>
              <Heading className={h2}>🚨 注意事項</Heading>
              <Markdown
                markdownContainerStyles={{
                  ...markdownAttrs.markdownContainerStyles,
                  fontSize: "14px",
                }}
                markdownCustomStyles={markdownAttrs.markdownCustomStyles}
              >
                {`
1. 若票種包含紀念衣服或限定紀念品，請於大會服務台兌換。
2. 企業票將於活動後寄送電子發票至您提供的電子信箱。如果您有任何疑問，請來信至 [organizers@python.tw](mailto:organizers@python.tw)。
3. 本次活動期間 (2025 年 09 月 06 日至 07 日) 將依照「臺北市政府之停班公告」決定是否舉行，最新消息請關注「PyCon Taiwan 官網與社群媒體」之公告。（詳情將依照政府公告與官網通知為準。）
4. 本活動委託 KKTIX 代理退票與退費，將酌收 10% 手續費且活動前十天內 (不含活動日) 不予退票。詳情請見 [KKTIX 代理退換票辦法](https://support.kktix.com/hc/zh-tw/articles/22446025825561-KKTIX-%E4%BB%A3%E7%90%86%E9%80%80%E7%A5%A8%E8%BE%A6%E6%B3%95)。
5. [PyCon TW 2025 個人資料保護聲明](https://tw.pycon.org/2025/zh-hant/about/privacy-policy)
6. 更多關於今年年會的訊息，請參閱 [PyCon TW 2025 大會官方網站](https://tw.pycon.org/2025/zh-hant)。
7. 主辦單位保有對「PyCon TW 2025」的最終修改、變更、活動解釋及取消本活動之權利。
                `}
              </Markdown>
            </Section>

            <Hr className={hr} />

            {/* 📜 行為準則 */}
            <Section className={`${sectionX} pb-6`}>
              <Heading className={h2}>📜 行為準則</Heading>
              <Markdown {...markdownAttrs}>
                {`
請務必閱讀並遵守 [PyCon TW 2025 行為準則](https://tw.pycon.org/2025/zh-hant/about/code-of-conduct)。本公約適用於所有實體與數位場域中的言行，讓我們一起營造安全、友善與啟發的社群環境！
              `}
              </Markdown>

              <Text className={`mt-6 ${p}`}>
                期待在 PyCon TW 2025 與您相見 🎉
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
