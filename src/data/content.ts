// ---------------------------------------------------------------------------
// Bilingual content for the portfolio.
// Every visible string lives here, so the page components stay free of
// hardcoded copy and the JA/EN toggle just swaps which key is read.
//
// Items marked TODO are placeholders the site owner should fill in before
// publishing — see the README "公開前チェックリスト" section.
// ---------------------------------------------------------------------------

export interface Bi {
  ja: string;
  en: string;
}

export interface NavItem {
  id: string;
  label: Bi;
}

export interface SkillItem {
  name: string;
  note: Bi;
}

export interface SkillTier {
  tier: Bi;
  items: SkillItem[];
}

export interface StatItem {
  value: string;
  unit?: string;
  label: Bi;
}

export interface ProjectDetail {
  body: Bi[];
  highlights?: Bi[];
}

export interface ProjectItem {
  title: Bi;
  tag: Bi;
  status?: Bi;
  description: Bi;
  stack: string[];
  metric?: Bi;
  github?: string;
  detail?: ProjectDetail;
}

export interface AchievementItem {
  date: Bi;
  title: Bi;
  summary: Bi;
  detail?: {
    body: Bi[];
    thumbnail?: string;
    video?: string;
    photos?: ResearchPhoto[];
    links?: { label: Bi; url: string }[];
  };
}

export interface TimelineItem {
  period: Bi;
  title: Bi;
  org: Bi;
  detail?: Bi;
}

export interface ResearchPhoto {
  src: string;
  caption?: Bi;
}

export interface ResearchExperience {
  title: Bi;
  body: Bi;
  stats?: StatItem[];
  photos?: ResearchPhoto[];
  achievementsLink?: boolean;
}

export const nav: NavItem[] = [
  { id: "about", label: { ja: "About", en: "About" } },
  { id: "skills", label: { ja: "Skills", en: "Skills" } },
  { id: "research", label: { ja: "Research", en: "Research" } },
  { id: "projects", label: { ja: "Projects", en: "Projects" } },
  { id: "achievements", label: { ja: "Achievements", en: "Achievements" } },
  { id: "experience", label: { ja: "Experience", en: "Experience" } },
  { id: "contact", label: { ja: "Contact", en: "Contact" } },
];

export const hero = {
  eyebrow: { ja: "ENGINEERING PORTFOLIO — REV. 2026", en: "ENGINEERING PORTFOLIO — REV. 2026" } as Bi,
  name: { ja: "鶴飼 晴琉", en: "Haru Tsurukai" } as Bi,
  romaji: { ja: "Tsurukai Haru", en: "Tsurukai Haru" } as Bi,
  affiliation: {
    ja: "中央大学大学院 理工学研究科 電気電子情報通信工学専攻 ／ 國井研究室",
    en: "Kunii Laboratory, Dept. of Electrical, Electronic, and Communication Engineering, Chuo University",
  } as Bi,
  tagline: {
    ja: "動くものをつくる",
    en: "Building things that move.",
  } as Bi,
  sub: {
    ja: "ロボット機構設計からアプリ開発まで、領域は問わない。ワクワクするなら未知でも飛び込み、手を動かして価値にするエンジニア。",
    en: "From robotics to apps — no domain is off-limits. If it excites me, I dive in, even into unfamiliar territory, and build until it works.",
  } as Bi,
  ctaPrimary: { ja: "研究を見る", en: "View research" } as Bi,
  ctaSecondary: { ja: "経歴を見る", en: "View experience" } as Bi,
};

export const about = {
  heading: { ja: "About Me", en: "About Me" } as Bi,
  intro: [
    {
      ja: "大学院では月面の溶岩洞窟探査を目標に小型二輪ローバの機構設計に取り組み、MATLABシミュレーションから豪州での野外実証まで幅広く経験してきました。",
      en: "In graduate school, I worked on mechanism design for a small two-wheeled rover aimed at exploring lunar lava tubes, gaining broad experience from MATLAB simulation to field trials in Australia.",
    },
    {
      ja: "研究の外でも、Webアプリやデスクトップツール開発に幅を広げ、設計から実装まで自分でやり切ることが好きです。",
      en: "Outside research, I have expanded into web and desktop tool development — I enjoy seeing things through from design to implementation on my own.",
    },
  ] as Bi[],
  chips: [
    { label: { ja: "中央大学大学院 理工学研究科", en: "Chuo University, Graduate School of Sci. & Eng." } as Bi },
    { label: { ja: "千葉県出身", en: "From Chiba, Japan" } as Bi },
    { label: { ja: "電気電子情報通信工学専攻", en: "Electrical, Electronic & Communication Eng." } as Bi },
    { label: { ja: "Webアプリ・ツール開発", en: "Web App & Tool Development" } as Bi },
    { label: { ja: "月面探査ローバ", en: "Lunar Rover" } as Bi },
    { label: { ja: "ボルダリング・ハンドボール", en: "Bouldering & Handball" } as Bi },
  ],
};

export const skills: SkillTier[] = [
  {
    tier: { ja: "開発言語", en: "Languages" },
    items: [
      { name: "Python", note: { ja: "シミュレーション結果の解析・可視化スクリプトを作成", en: "Analysis and visualization scripts for simulation results" } },
      { name: "MATLAB / Simulink", note: { ja: "3次元物理シミュレーション環境を独学で構築", en: "Built the 3D multibody physics simulation environment through self-study" } },
      { name: "C", note: { ja: "大学講義レベル", en: "Learned through university coursework" } },
    ],
  },
  {
    tier: { ja: "ツール", en: "Tools" },
    items: [
      { name: "Autodesk Fusion", note: { ja: "CAD：多岐にわたる構造を設計", en: "CAD — designed a wide variety of mechanical structures" } },
      { name: "Simscape Multibody", note: { ja: "MATLAB上の多体動力学シミュレーション環境", en: "Multibody dynamics simulation environment built on MATLAB" } },
      { name: "Stateflow", note: { ja: "ローバの行動戦略をステートマシンで実装", en: "Implemented the rover's behavior strategy as a state machine" } },
      { name: "LaTeX", note: { ja: "卒業論文・研究レポートの執筆", en: "Thesis and research report writing" } },
      { name: "Git / GitHub", note: { ja: "バージョン管理・個人開発プロジェクトの管理", en: "Version control and personal project management" } },
    ],
  },
  {
    tier: { ja: "ハードウェア・機器", en: "Hardware" },
    items: [
      { name: "Raspberry Pi", note: { ja: "ローバー実機の制御基盤として運用", en: "Used as the onboard control platform on the physical rover" } },
      { name: "Arduino", note: { ja: "学部実験で使用。現在はTAとして同授業で指導", en: "Used in undergraduate lab experiments; currently teaching it as a TA" } },
      { name: "RAISE3D（Pro3 / Pro3 HS）", note: { ja: "FDM方式での機構プロトタイプ試作・反復検証", en: "FDM-based prototyping and iterative verification of mechanism designs" } },
      { name: "Markforged（FX10 / MarkTwo）", note: { ja: "高強度部品の試作・反復検証", en: "Prototyping and iterative verification of high-strength parts" } },
      { name: "OptiTrack", note: { ja: "モーションキャプチャによる軌跡・スリップ率の計測", en: "Motion-capture measurement of trajectory and slip ratio on the physical rover" } },
    ],
  },
  {
    tier: { ja: "OS", en: "OS / Platforms" },
    items: [
      { name: "Windows", note: { ja: "日常使用", en: "Daily use" } },
      { name: "macOS", note: { ja: "日常使用", en: "Daily use" } },
      { name: "Linux", note: { ja: "時々使用", en: "Occasional use" } },
    ],
  },
];

export const research = {
  intro: {
    ja: "月面の溶岩洞窟探査を目指す小型群ロボットの研究に、学部4年から大学院にかけて取り組んできました。JAXAをはじめ複数の研究機関との共同プロジェクトとして進められました。",
    en: "From my senior undergraduate year into graduate school, I have been working on a small swarm robot project aimed at exploring lunar lava tubes — a joint effort with JAXA and other institutions.",
  } as Bi,
  experiences: [
    {
      title: { ja: "卒業研究 — 能動テール機構の設計と検証", en: "Graduation Research — Active Tail Mechanism" } as Bi,
      body: {
        ja: "小型ローバーは軽量で群展開に向く一方、車輪半径を超える段差での転倒・スタックが課題です。この問題を解決するため、テールを使って車軸を持ち上げる機構を設計しました。検証のための3D物理シミュレーション環境をゼロから独力で構築し、機構の有効性を数値で示しました。",
        en: "Small rovers are light enough to swarm, but prone to tipping and getting stuck on steps taller than their wheel radius. To solve this, I designed a mechanism that uses a tail to lift the wheel axle over such obstacles, and built a 3D physics simulation environment from scratch to verify the design quantitatively.",
      } as Bi,
      stats: [
        { value: "1.5", unit: "×", label: { ja: "登攀できる段差の高さ（車輪半径比、固定テールは 0.8 倍）", en: "Max step height in wheel radii (fixed tail: 0.8×)" } },
        { value: "2", unit: "×", label: { ja: "固定テールと比べた不整地での移動距離", en: "Rough-terrain travel distance vs. fixed tail" } },
      ],
    },
    {
      title: { ja: "機体改良 — 跳躍パッドはデモロボットに採用", en: "Hardware Development — Jumping Pad Adopted for Demo Robot" } as Bi,
      body: {
        ja: "ロボットの車体や跳躍パッドなど、機体各部の形状改良を担当しました。跳躍パッドでは30個以上のCADモデルを作成し、3Dプリントと実機テストを繰り返して走行・跳躍性能のバランスを追求しました。最終的に私が設計した跳躍パッドがMoonshotプロジェクトの共同研究デモロボットに採用されました。",
        en: "Worked on hardware improvements across the robot including the vehicle body and jumping pads. Created over 30 CAD models, iterating through 3D printing and real-machine testing to find the right balance between running and jumping performance. My final jumping pad design was adopted for the Moonshot project's collaborative demo robot.",
      } as Bi,
    },
    {
      title: { ja: "オーストラリア 洞窟実証実験", en: "Field Experiments in Australian Caves" } as Bi,
      body: {
        ja: "国際共同研究の一環として、研究室の選抜5名のうちハードウェア担当の1名として参加しました。現地での課題発見・即時改良・データ取得に貢献しました。",
        en: "Joined as the hardware representative among 5 selected lab members for field experiments as part of the international collaboration. Contributed to on-site problem discovery, real-time hardware adjustments, and data collection.",
      } as Bi,
      achievementsLink: true,
    },
  ] as ResearchExperience[],
  context: {
    ja: "内閣府ムーンショット型研究開発事業 目標3プロジェクトの一環として、JAXAを含む複数の研究機関と連携して進められました（プロジェクトは完了済み）。",
    en: "This work was conducted as part of the Cabinet Office's Moonshot R&D Program, Goal 3, in collaboration with JAXA and other institutions (the project has since concluded).",
  } as Bi,
};

export const projects: ProjectItem[] = [
  {
    title: { ja: "Claude 使用量メニューバーアプリ", en: "Claude Usage Menu Bar App" },
    tag: { ja: "個人開発", en: "Personal project" },
    description: {
      ja: "Claude の5時間ごとの使用量をmacOSのメニューバーにリアルタイム表示するネイティブアプリ。認証情報はmacOS Keychainに保存し、ログイン時自動起動にも対応。毎日の作業で実際に使用している。",
      en: "A native macOS menu bar app that shows Claude's 5-hour usage allowance in real time. Credentials are stored securely in the macOS Keychain; supports launch at login. Used daily in practice.",
    },
    stack: ["Swift", "SwiftUI", "macOS 14+"],
    github: "https://github.com/Tsurukai-haru/claude-usage-menubar",
    detail: {
      body: [
        {
          ja: "Claude APIには5時間ごとにリセットされる使用量上限があります。残り使用量が見えないまま作業すると、制限に突然当たって中断してしまう。この不満を解消するために開発したmacOSのネイティブメニューバーアプリです。",
          en: "Claude's API enforces a usage limit that resets every 5 hours. Without visibility into what's remaining, you hit the cap mid-work with no warning. This native macOS menu bar app was built to fix that friction.",
        },
        {
          ja: "APIキーはプレーンなファイルではなくmacOS Keychainに安全に保存し、ログイン時の自動起動にも対応。自分が毎日使うツールとして、シンプルさを最優先に設計しました。",
          en: "The API key is stored in macOS Keychain rather than a plain file, and the app supports launch at login. Built for daily personal use — simplicity was the design priority.",
        },
      ],
      highlights: [
        { ja: "5時間ウィンドウの使用量をメニューバーにリアルタイム表示", en: "Real-time usage for the 5-hour window shown in the menu bar" },
        { ja: "認証情報はmacOS Keychainに安全に保存", en: "Credentials stored securely in macOS Keychain" },
        { ja: "ログイン時自動起動に対応", en: "Supports launch at login" },
        { ja: "自己利用を目的に開発・毎日運用中", en: "Developed for personal use; used daily" },
      ],
    },
  },
  {
    title: { ja: "スマホ写真 一括圧縮ツール", en: "Batch Photo Compressor" },
    tag: { ja: "個人開発", en: "Personal project" },
    description: {
      ja: "一般的なWeb圧縮サービスは画像を外部サーバーへ送信するため、プライベートな写真には使いにくい。この課題を解決するためローカルで完結するツールを開発した。JPEG・PNG・WebPに対応し、目標ファイルサイズを指定して一括圧縮、ZIP形式でまとめてダウンロードできる。",
      en: "Common online compression tools upload your photos to external servers — a privacy concern for personal images. This tool runs entirely in the browser with no backend. Supports JPEG, PNG, and WebP; set a target size, compress in batch, and download the results as a single ZIP.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tsurukai-haru/photo-resizer",
    detail: {
      body: [
        {
          ja: "「写真を圧縮したいけど、外部サービスに送りたくない」というニーズから生まれたツールです。一般的なWeb圧縮サービスは画像を外部サーバーにアップロードする仕組みのため、プライベートな写真には使いづらい場面があります。",
          en: "Started from a simple need: compress photos without uploading them to a stranger's server. Most web-based compression tools route your images through external servers — a real friction point for personal photos.",
        },
        {
          ja: "HTMLとJavaScriptのみで実装したサーバーレスなウェブアプリで、バックエンドなしでブラウザ上ですべての処理が完結します。Canvas APIで画像を最大幅2000pxに収めたうえで、JPEG品質を0.9から0.1まで段階的に下げて目標サイズに近づけます。JSZipを使って複数ファイルを一括ZIPダウンロードできます。",
          en: "A serverless web app built with plain HTML and JavaScript — no backend, everything runs in the browser. Uses the Canvas API to cap images at 2000px wide, then lowers JPEG quality incrementally from 0.9 to 0.1 until the target file size is reached. Multiple files are bundled and downloaded as a single ZIP via JSZip.",
        },
      ],
      highlights: [
        { ja: "すべての処理がローカルで完結し、画像が外部に送信されない", en: "All processing is local — no image data leaves your machine" },
        { ja: "JPEG・PNG・WebPに対応した一括圧縮", en: "Batch compression supporting JPEG, PNG, and WebP" },
        { ja: "Canvas APIで最大2000pxリサイズ後、JPEG品質を0.9から0.1まで段階的に下げて目標サイズに調整", en: "Canvas API resizes to max 2000px width, then lowers JPEG quality from 0.9 to 0.1 to hit the target size" },
        { ja: "圧縮結果をZIPでまとめてダウンロード", en: "Download all compressed files as a single ZIP" },
      ],
    },
  },
  {
    title: { ja: "ボルダリングジム 業務支援アプリ", en: "Bouldering Gym Operations App" },
    tag: { ja: "個人開発", en: "Personal project" },
    status: { ja: "開発中", en: "In progress" },
    description: {
      ja: "アルバイト先のジムで、紙の出席表をExcelへ手作業転記している運用に着目。会員番号入力で受付・料金計算を自動化するほか、在庫管理など現場の事務作業を一元化するアプリを設計・開発中。",
      en: "Noticed staff at the gym manually transcribing paper attendance sheets into Excel each day. Building an app to automate check-in and fee calculation, while expanding toward unified office operations including inventory management.",
    },
    stack: ["React", "Vite", "FastAPI", "SQLite"],
    detail: {
      body: [
        {
          ja: "アルバイト先のボルダリングジムでは、受付スタッフが紙の出席票をExcelに手作業で転記する業務が毎日発生していました。会員番号を入力するだけで氏名・年齢区分を自動表示し、入退館時刻から料金を自動計算するアプリを設計・開発中です。",
          en: "At the bouldering gym where I work, staff manually transcribe paper attendance sheets into Excel every day. Building an app that looks up a member by ID, auto-fills their name and age tier, and calculates fees from check-in/out times.",
        },
        {
          ja: "現場へのヒアリングを重ねるなかで、受付・料金計算にとどまらず在庫管理など複数の事務作業を一元化するニーズが浮かび上がりました。フロントエンドはReact＋Vite、バックエンドはFastAPI＋SQLiteで構築し、操作ミスが起きにくいUIを目指して設計しています。",
          en: "Through repeated conversations with staff, the scope expanded beyond check-in to cover inventory and other office tasks in one place. The frontend uses React + Vite; the backend uses FastAPI and SQLite, with a UI designed to minimize input errors.",
        },
      ],
      highlights: [
        { ja: "会員番号入力で氏名・年齢区分を自動表示、料金を自動計算", en: "Auto-fills member info and calculates fees from check-in/out times" },
        { ja: "在庫管理など複数の事務業務を一元化", en: "Unified management of inventory and other office workflows" },
        { ja: "現場スタッフのヒアリングをもとに要件を継続的に整理", en: "Requirements continuously refined through on-site staff interviews" },
      ],
    },
  },
];

export const achievements: AchievementItem[] = [
  {
    date: { ja: "2026年5月", en: "May 2026" },
    title: { ja: "BS日テレ「ガリレオX」にて研究内容が紹介", en: "Research featured on BS Nippon TV 'Galileo X'" },
    summary: {
      ja: "月面探査ロボットの研究について、BS日テレ「ガリレオX」にて紹介されました。実験中の様子も本編中に写っています。",
      en: "Coverage of the lunar exploration rover research was broadcast on the BS Nippon TV program 'Galileo X,' including footage from my experiments.",
    },
    detail: {
      body: [
        {
          ja: "月にあるとされる溶岩洞窟の探査を目標とした小型二輪ローバの研究について、BS日テレ「ガリレオX」にて紹介されました。",
          en: "Research on a small two-wheeled rover aimed at exploring lunar lava tubes was featured on the BS Nippon TV program 'Galileo X.'",
        },
        {
          ja: "実験中の様子とともに研究内容が紹介されました。",
          en: "The research was introduced alongside footage from my experiments.",
        },
      ],
      video: "https://www.youtube.com/embed/15Ob3HZnR8k",
      links: [
        { label: { ja: "番組本編（YouTube）", en: "Program on YouTube" }, url: "https://www.youtube.com/watch?v=15Ob3HZnR8k" },
      ],
    },
  },
  {
    date: { ja: "2026年5月", en: "May 2026" },
    title: { ja: "SPEXA 国際宇宙ビジネス展 出展", en: "Exhibited at SPEXA International Space Business Exhibition" },
    summary: {
      ja: "ムーンショット型研究開発事業の一環として、月面探査ロボットの研究成果を展示。",
      en: "Exhibited research on lunar exploration robotics as part of the Moonshot R&D Program.",
    },
    detail: {
      body: [
        {
          ja: "ムーンショット型研究開発事業の一環として、SPEXA 国際宇宙ビジネス展に研究成果を出展しました。",
          en: "As part of the Moonshot R&D Program, research results on lunar exploration robotics were exhibited at the SPEXA International Space Business Exhibition.",
        },
        {
          ja: "展示ブースの設営から来場者への技術説明まで実際に現地で担当しました。",
          en: "I was responsible for hands-on tasks on-site, from setting up the exhibition booth to providing technical explanations to visitors.",
        },
      ],
    },
  },
  {
    date: { ja: "2026年4月", en: "Apr 2026" },
    title: { ja: "大学院給付奨学金", en: "Graduate School Scholarship (grant-type)" },
    summary: {
      ja: "返還不要の給付型大学院奨学金を受給。",
      en: "Recipient of a non-repayable, grant-type graduate scholarship.",
    },
    detail: {
      body: [
        {
          ja: "中央大学大学院において、返還を要しない給付型奨学金を受給しました。",
          en: "Received a non-repayable, grant-type scholarship at Chuo University Graduate School.",
        },
      ],
    },
  },
  {
    date: { ja: "2026年3月", en: "Mar 2026" },
    title: { ja: "成績優秀者代表", en: "Top-Student Representative" },
    summary: {
      ja: "学科における成績優秀者の代表として証書を授与。",
      en: "Recognized as the representative top-performing student in the department.",
    },
    detail: {
      body: [
        {
          ja: "中央大学 電気電子情報通信工学科において、成績優秀者の代表として証書を授与されました。",
          en: "Awarded a certificate as the representative top-performing student in the Department of Electrical, Electronic, and Communication Engineering at Chuo University.",
        },
      ],
    },
  },
  {
    date: { ja: "2026年3月", en: "Mar 2026" },
    title: { ja: "優良認定書", en: "Certificate of Excellence" },
    summary: {
      ja: "学業成績に対する優良認定書を授与。",
      en: "Awarded a certificate of excellence for academic performance.",
    },
    detail: {
      body: [
        {
          ja: "学業成績に対する優良認定書を授与されました。",
          en: "Awarded a certificate of excellence in recognition of academic performance.",
        },
      ],
    },
  },
  {
    date: { ja: "2026年1月", en: "Jan 2026" },
    title: { ja: "NHK BS番組にて研究内容が紹介", en: "Research featured on NHK BS program" },
    summary: {
      ja: "JAXA等と共同開発中の月面探査ロボットの研究について取材を受け、番組内で放送されました。",
      en: "The lunar exploration rover research, jointly developed with JAXA and others, was covered and broadcast on the NHK BS program.",
    },
    detail: {
      body: [
        {
          ja: "JAXAや産業技術総合研究所などと共同で進めている月面探査ロボットの研究について、NHK BSの取材を受けました。",
          en: "The lunar exploration rover research, conducted jointly with JAXA and AIST, was covered by NHK BS.",
        },
        {
          ja: "取材陣への説明・操作を担当し、映像にも出演しています。",
          en: "I was in charge of explaining the research and operating the robot for the crew, and appear in the broadcast.",
        },
      ],
      thumbnail: "https://imgu.web.nhk/static/assets/images/tvepisode/te/JZ37MV76G5/JZ37MV76G5-eyecatch_4c37bbd521090ab62701047e74977cef.jpg",
      links: [
        { label: { ja: "番組ページ（NHK）", en: "Program page (NHK)" }, url: "https://www.web.nhk/tv/an/frontiers/pl/series-tep-PM34JL2L14/ep/JZ37MV76G5" },
      ],
    },
  },
  {
    date: { ja: "2025年11月", en: "Nov 2025" },
    title: { ja: "日豪共同 実証実験への参加", en: "Japan-Australia Joint Field Trials" },
    summary: {
      ja: "オーストラリアの洞窟にて実証実験に参加し、各研究機関の公式Webサイトに掲載されました。",
      en: "Participated in field trials in an Australian cave; featured on the official websites of multiple research institutions including JAXA and CSIRO.",
    },
    detail: {
      body: [
        {
          ja: "研究プロジェクトの一環として、オーストラリアのクイーンズランド州にある洞窟での実証実験に参加しました。この実験の様子は、CSIROやJAXAをはじめ、複数の研究機関の公式Webサイトで紹介されています。",
          en: "As part of the research project, I participated in field trials in a cave in Queensland, Australia. The experiment was covered on the official websites of multiple institutions including CSIRO and JAXA.",
        },
        {
          ja: "CSIROの記事では実名入りで紹介していただきました。",
          en: "I was introduced by name in a CSIRO article.",
        },
      ],
      photos: [
        {
          src: "https://research.csiro.au/robotics/wp-content/uploads/sites/592/2026/03/japan-australia-field-trials-group-hi-1536x1025.jpg",
          caption: {
            ja: "オーストラリア・日本の共同研究チーム © CSIRO, Katrina Lo Surdo",
            en: "Australia–Japan joint research team © CSIRO, Katrina Lo Surdo",
          },
        },
      ],
      links: [
        { label: { ja: "CSIRO 公式サイト", en: "CSIRO official site" }, url: "https://research.csiro.au/robotics/csiro-japan-collaboration-advances-lunar-cave-robotics/" },
        { label: { ja: "JAXA 公式サイト", en: "JAXA official site" }, url: "https://www.isas.jaxa.jp/topics/004219.html" },
        { label: { ja: "中央大学 公式サイト", en: "Chuo University official site" }, url: "https://www.chuo-u.ac.jp/research/news/2026/03/84967/" },
        { label: { ja: "ムーンショット型研究開発事業", en: "Moonshot R&D Program" }, url: "https://moonshot.r.chuo-u.ac.jp/kunii/report/912/" },
      ],
    },
  },
];

export const experience: TimelineItem[] = [
  {
    period: { ja: "2019.04 — 2022.03", en: "Apr 2019 — Mar 2022" },
    title: { ja: "千葉県立小金高等学校", en: "Chiba Prefectural Koganei High School" },
    org: { ja: "普通科", en: "General Course" },
    detail: { ja: "ハンドボール部に所属し、競技に熱中した。", en: "Member of the school handball club, where I became devoted to the sport." },
  },
  {
    period: { ja: "2022.04 — 2026.03", en: "Apr 2022 — Mar 2026" },
    title: { ja: "理工学部 電気電子情報通信工学科", en: "B.Eng., Electrical, Electronic, and Communication Engineering" },
    org: { ja: "中央大学", en: "Chuo University" },
    detail: { ja: "電気・電子・情報通信分野を幅広く学ぶ。JAXA・産総研・東京農工大などとの共同プロジェクトに取り組む研究室に所属し、シミュレーションおよびJAXA探査実験棟での実証実験に従事。2025年11月にはオーストラリアでの国際共同実験にも参加した。", en: "Studied broadly across electrical, electronic, and information-communication engineering. Joined a lab conducting joint research with JAXA, AIST, and Tokyo University of Agriculture and Technology, contributing to simulation work and experiments at JAXA's exploration testbed. Also participated in international field trials in Australia in November 2025." },
  },
  {
    period: { ja: "在学中", en: "Ongoing, alongside studies" },
    title: { ja: "ボルダリングジムスタッフ", en: "Bouldering Gym Staff" },
    org: { ja: "ルートセッター ／ アルバイト", en: "Route Setter / Part-time" },
    detail: { ja: "150本以上のコース設計・キッズスクールの担当に加え、出席管理の自動化など運用改善にも従事。", en: "Set 150+ climbing routes, ran kids' classes, and worked on operational improvements such as automating attendance lookups." },
  },
  {
    period: { ja: "在学中", en: "Ongoing, alongside studies" },
    title: { ja: "社会人ハンドボールチーム創設", en: "Co-founded Adult Handball Team" },
    org: { ja: "社会人チーム", en: "Adult community team" },
    detail: { ja: "高校からの競技経験を活かし、仲間とゼロからチームを立ち上げた。", en: "Leveraged competitive experience from high school to help build the team from scratch with fellow players." },
  },
  {
    period: { ja: "2026.04 — 現在", en: "Apr 2026 — present" },
    title: { ja: "理工学研究科 電気電子情報通信工学専攻 修士課程", en: "M.S. student, Electrical, Electronic, and Communication Engineering" },
    org: { ja: "中央大学大学院 國井研究室（2028年3月卒業予定）", en: "Chuo University Graduate School, Kunii Laboratory (expected graduation: March 2028)" },
  },
];

export const contact = {
  thanks: {
    ja: "私のポートフォリオをご覧いただきありがとうございます。",
    en: "Thank you for taking the time to visit my portfolio.",
  } as Bi,
  heading: { ja: "Get in Touch", en: "Get in Touch" } as Bi,
  body: {
    ja: "研究内容・選考に関するご連絡など、お気軽にご連絡ください。",
    en: "Feel free to reach out about my research or for recruiting purposes.",
  } as Bi,
  emailLabel: { ja: "メールを送る", en: "Send an email" } as Bi,
  // TODO: 実際の連絡先・リンクに差し替えてください（README参照）。
  email: "haru.tsurukai.info@gmail.com",
  github: "https://github.com/Tsurukai-haru",
  linkedin: "" as string | undefined,
};

export const footer = {
  rights: { ja: "All rights reserved.", en: "All rights reserved." } as Bi,
};
