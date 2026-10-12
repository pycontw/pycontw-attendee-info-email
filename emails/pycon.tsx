import { Button, Heading, Hr, Link, Markdown, Section, Text } from "@react-email/components";
import { EmailLayout, Sponsors, styles, markdownAttrs, type PyConWelcomeEmailProps } from "./_components/layout";

export const subject = "【PyCon TW 2026】行前通知與活動注意事項";
const website = "https://tw.pycon.org/2026/zh-hant";

export const PyConWelcomeEmail = ({ recipient, assetBaseUrl }: PyConWelcomeEmailProps) => (
  <EmailLayout
    lang="zh-Hant"
    assetBaseUrl={assetBaseUrl}
    previewText="PyCon TW 2026 將於 10 月 17 日至 18 日在臺北醫學大學舉行，請查看行前資訊與 QR Code 取票方式。"
  >
    <Section className={`${styles.section} pt-2`}>
      <Text className={styles.p}>親愛的 {recipient || "會眾"} 您好：</Text>
      <Text className={styles.p}>
        感謝您參與這場全球 Python 社群的年度盛會！今年 PyCon Taiwan 同樣聚焦在
        Python 技術與其多樣的可能應用的交流，歡迎所有對 Python
        有興趣的朋友一同加入來分享所學、交換想法、並且認識更多同好。在此為您送上本次大會的行前重要資訊：
      </Text>
    </Section>

    <Section className={styles.section}>
      <Heading as="h2" className={styles.h2}>活動時間與地點</Heading>
      <Text className={styles.p}>
        <strong>活動日期：</strong>2026 年 10 月 17 日至 18 日
        <br />
        <strong>活動地點：</strong>臺北醫學大學
      </Text>
      <Text className={styles.p}>詳細的交通與會場地圖，請參考官方網站的會場資訊。</Text>
      <Button href={`${website}/venue`} className={styles.button}>地圖及交通資訊</Button>
    </Section>

    <Hr className={styles.hr} />

    <Section className={styles.section}>
      <Heading as="h2" className={styles.h2}>豐富議程與活動</Heading>
      <Text className={styles.p}>今年我們為大家準備了 30 場以上的豐富議程，精彩內容包含：</Text>
      <Markdown {...markdownAttrs}>{`
- **議程**：涵蓋主題演講、一般演講、專業課程與閃電秀。
- **特別企劃**：包含 Unconference、Panel 以及 Young Inspires 等環節。
- **活動**：現場亦有衝刺開發、海報展、開放空間與徵才資訊等交流機會。
      `}</Markdown>
      <Text className={styles.p}>建議您先行上網查看詳細的議程表，以便安排專屬您的聽講計畫。</Text>
      <Button href={`${website}/conference/schedule`} className={styles.button}>查看議程表</Button>
    </Section>

    <Hr className={styles.hr} />

    <Section className={styles.section}>
      <Heading as="h2" className={styles.h2}>報到與 QR Code 取票方式</Heading>
      <Text className={styles.p}>
        <strong>若您以「KKTIX 會員身份」購票：</strong>
        請事先下載 KKTIX iOS / Android App 或登入{" "}
        <Link href="https://kktix.com/" className={styles.link}>KKTIX 網站</Link>
        ，於「我的票券」中取得您的 QR Code。
      </Text>
      <Text className={styles.p}>
        <strong>若您為「非會員」或「未登入購買」：</strong>
        請於信箱中搜尋主旨包含「[KKTIX] PyCon TW 2026 Registration」及「訂單已成立」的信件
        （票種名稱可能為 <strong>Individual / 個人票種</strong>、
        <strong>Reserved / 保留票種</strong>、或 <strong>Corporate / 企業票種</strong>），
        報到時直接出示該封訂單成立信內的 QR Code 即可。
      </Text>
    </Section>

    <Hr className={styles.hr} />

    <Section className={styles.section}>
      <Heading as="h2" className={styles.h2}>重要注意事項</Heading>
      <Text className={styles.p}>
        <strong>行為準則 (Code of Conduct)：</strong>
        大會致力於提供一個友善的環境，請務必先行閱讀並遵守我們的{" "}
        <Link href={`${website}/about/code-of-conduct`} className={styles.link}>行為準則</Link>。
      </Text>
      <Text className={styles.p}>
        <strong>掌握最新動向：</strong>會前或會後若想接收最新資訊，請鎖定我們的{" "}
        <Link href="https://conf.python.tw/" className={styles.link}>部落格</Link>、收聽{" "}
        <Link href="https://pycast.firstory.cc/episodes" className={styles.link}>PyCast 節目</Link>，或訂閱{" "}
        <Link href="https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw" className={styles.link}>YouTube 頻道</Link>
        觀看議程錄影。
      </Text>
      <Text className={styles.p}>
        若有任何問題，歡迎隨時透過電子郵件與我們聯繫：
        <Link href="mailto:organizers@python.tw" className={styles.link}>organizers@python.tw</Link>。
      </Text>
      <Text className={styles.p}>期待在 PyCon TW 2026 與您相見！</Text>
      <Text className={styles.p}>PyCon TW 2026 籌備團隊 敬上</Text>
    </Section>

    <Hr className={styles.hr} />

    <Sponsors assetBaseUrl={assetBaseUrl} heading="特別感謝本次贊助商">
      <Text className={styles.p}>
        感謝所有贊助夥伴對 PyCon TW 2026 的支持！您可以前往{" "}
        <Link href={`${website}/sponsor`} className={styles.link}>贊助夥伴頁面</Link>
        查看完整的贊助商名單。
      </Text>
    </Sponsors>
  </EmailLayout>
);

PyConWelcomeEmail.PreviewProps = { assetBaseUrl: "/static" } satisfies PyConWelcomeEmailProps;

export default PyConWelcomeEmail;
