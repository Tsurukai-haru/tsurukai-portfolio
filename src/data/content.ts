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

export interface ProjectItem {
  title: Bi;
  tag: Bi;
  status: Bi;
  description: Bi;
  stack: string[];
  metric?: Bi;
  github?: string;
}

export interface AchievementItem {
  category: Bi;
  title: Bi;
  detail: Bi;
}

export interface TimelineItem {
  period: Bi;
  title: Bi;
  org: Bi;
  detail?: Bi;
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
  headline: {
    ja: "月面の地下空洞を走破するため、小型ローバーに2自由度の能動テールを搭載する。",
    en: "Giving a small lunar rover a 2-DOF active tail, so it can climb where fixed wheels cannot.",
  } as Bi,
  sub: {
    ja: "機構設計からシミュレーション構築、日常の不便を解消する個人開発まで、課題を自分の手で動くものに変えるエンジニアです。",
    en: "From mechanism design and physics simulation to personal tools that fix everyday friction — an engineer who turns problems into things that actually work.",
  } as Bi,
  ctaPrimary: { ja: "研究を見る", en: "View research" } as Bi,
  ctaSecondary: { ja: "経歴を見る", en: "View experience" } as Bi,
};

export const about = {
  heading: { ja: "About Me", en: "About Me" } as Bi,
  sheetLabel: { ja: "SHEET 01 — PROFILE", en: "SHEET 01 — PROFILE" } as Bi,
  paragraphs: [
    {
      ja: "中央大学大学院 電気電子情報通信工学専攻、國井研究室に所属しています。月の地下に広がる溶岩洞窟（Lava Tube）の探査を目標に、小型2輪ローバーの機構設計と、その有効性を検証する物理シミュレーション環境の構築に取り組んできました。",
      en: "I'm a graduate student in the Kunii Laboratory at Chuo University. My work centers on mechanism design and physical-simulation verification for a small two-wheeled rover built to explore lunar lava tubes — underground caves now studied as candidate habitats.",
    },
    {
      ja: "設計の発想の起点は、ボルダリングジムでルートセッターとして150本以上のコースを組んできた経験です。セッティングでは、登り手にしてほしい動作（ゴールムーブ）を先に決め、そこからホールドの配置を逆算します。ロボットの機構設計でも同じ考え方を採用し、地形に対してどう動いてほしいかを先に定義し、そこから必要な自由度と制御則を逆算しました。",
      en: "The design approach traces back to setting bouldering routes — over 150 of them — at a climbing gym. Route-setting works backward: you decide the move you want the climber to make, then place the holds to produce it. I apply the same logic to mechanism design: define the motion you need from the terrain first, then derive the degrees of freedom and control law that produce it.",
    },
    {
      ja: "チームでの実証実験では、一人で抱え込まず現場で手を動かしながら合意形成することを大切にしています。豪州での野外実証実験では、想定外の砂質でローバーの車輪が空転する問題が発生しました。車輪へスポンジを取り付ける改良を発案し、チームで取り付け方法を発展させながら、実際の取り付け作業を主導しました。",
      en: "In field testing, I try not to solve problems alone — I'd rather work through them with the team, hands-on, on site. During an outdoor field trial in Australia, the rover's wheels lost traction in sand that behaved differently than expected. I proposed attaching sponge material to the wheels, then worked with the team to refine the method and led the actual fitting.",
    },
  ] as Bi[],
  values: [
    {
      title: { ja: "現地現物", en: "See it, touch it" } as Bi,
      body: {
        ja: "シミュレーションで終わらせず、実機・実環境で確かめる。",
        en: "Don't stop at simulation — verify on real hardware, in the real environment.",
      } as Bi,
    },
    {
      title: { ja: "逆算設計", en: "Design backward" } as Bi,
      body: {
        ja: "欲しい動作・結果を先に定義し、そこから自由度と制御を逆算する。",
        en: "Define the motion or outcome you want first, then derive the degrees of freedom and control law.",
      } as Bi,
    },
    {
      title: { ja: "チームでの主体性", en: "Lead inside the team" } as Bi,
      body: {
        ja: "一人で抱えず、提案してチームで発展させ、実行は自分が引き受ける。",
        en: "Propose, let the team develop the idea further, and take ownership of execution.",
      } as Bi,
    },
  ],
};

export const skills: SkillTier[] = [
  {
    tier: { ja: "主力", en: "Core" },
    items: [
      { name: "Autodesk Fusion", note: { ja: "CAD：能動テール機構の試作30点以上を設計", en: "CAD — designed 30+ prototype iterations of the active tail mechanism" } },
      { name: "MATLAB / Simscape Multibody", note: { ja: "3次元物理シミュレーション環境をゼロから構築", en: "Built the 3D multibody physics simulation environment from scratch" } },
      { name: "Python", note: { ja: "シミュレーション結果の解析・可視化スクリプトを作成", en: "Analysis and visualization scripts for simulation results" } },
    ],
  },
  {
    tier: { ja: "実務活用", en: "Applied" },
    items: [
      { name: "Stateflow", note: { ja: "ローバーの行動戦略（探索的接地・スタック回避）をステートマシンで実装", en: "Implemented the rover's behavior strategy (exploratory contact, stuck-recovery) as a state machine" } },
      { name: "3Dプリント（FDM）", note: { ja: "機構プロトタイプの試作・反復検証", en: "Prototyping and iteration for mechanism design" } },
      { name: "Raspberry Pi", note: { ja: "ローバー実機の制御基盤として運用", en: "Used as the onboard control platform on the physical rover" } },
    ],
  },
  {
    tier: { ja: "補助", en: "Supporting" },
    items: [
      { name: "OptiTrack", note: { ja: "モーションキャプチャによる実機の軌跡・スリップ率の計測", en: "Motion-capture measurement of trajectory and slip ratio on the physical rover" } },
      { name: "Excel（VLOOKUP等）", note: { ja: "アルバイト先の出席管理を自動化し、作業時間を半減", en: "Automated attendance lookups at a part-time job, cutting the task's time roughly in half" } },
    ],
  },
];

export const research = {
  sheetLabel: { ja: "SHEET 02 — RESEARCH", en: "SHEET 02 — RESEARCH" } as Bi,
  heading: {
    ja: "小型2輪ローバーのための2自由度能動テール機構",
    en: "A 2-DOF Active Tail Mechanism for a Small Two-Wheeled Rover",
  } as Bi,
  intro: {
    ja: "月の地下に広がる溶岩チューブは、将来の居住拠点として注目される一方、未踏の不整地が続く環境です。小型化したローバーは軽量で群展開に向く反面、静的安定性が低く、車輪半径を超える段差で転倒・スタックしやすいという課題を抱えます。本研究では、この課題に対し2自由度の能動テール機構と、その運用戦略を提案しました。",
    en: "Lunar lava tubes are gaining attention as candidate sites for future habitats, but they remain unmapped, rugged terrain. Small rovers are light enough to deploy in swarms, but their low static stability makes them prone to tipping or getting stuck on steps taller than their wheel radius. This research proposes a 2-DOF active tail mechanism and behavior strategy to address that.",
  } as Bi,
  approachHeading: { ja: "アプローチ", en: "Approach" } as Bi,
  approach: [
    {
      ja: "第1関節でテールを持ち上げて車軸を引き上げ（リフト）、第2関節で地面を蹴り出してボディを段差奥へ押し出す（リーチ・推進）。2軸を協調動作させ、車軸が段差エッジに衝突しない軌道を生成する。",
      en: "Joint 1 lifts the tail to raise the wheel axle; joint 2 pushes off the ground to drive the body further onto the step. Coordinating the two joints generates a trajectory that clears the step edge without collision.",
    },
    {
      ja: "検証に先立ち、特定のハードウェア構成に依存しない一般化モデルでMATLAB/Simscape Multibodyの3次元物理シミュレーション環境を独力で構築。グラウザ（突起）形状を再現した点群接触モデルや、固定テールの実機データに基づく摩擦パラメータのチューニングなど、シミュレーションの忠実度を実機実験から逆算して高めた。",
      en: "Before building specific hardware, I built a 3D multibody physics simulation in MATLAB/Simscape using a hardware-agnostic generalized model. Fidelity was tuned against real hardware: a point-cloud contact model reproducing the wheel's grouser geometry, and friction parameters calibrated from physical fixed-tail step-climbing data.",
    },
    {
      ja: "不整地走行では、テールを周期駆動して接地機会を確保する「探索的接地制御」と、オドメトリでスタックを検知してテールでボディを持ち上げる「スタック回避制御」を組み合わせたハイブリッド制御を実装し、固定テール・跳躍機構と比較評価した。",
      en: "For rough-terrain traversal, I implemented a hybrid controller combining periodic tail motion to keep ground contact (\"exploratory contact control\") with odometry-based stuck-detection that triggers an active lift-and-push recovery, and benchmarked it against a fixed tail and a hopping mechanism.",
    },
  ] as Bi[],
  stats: [
    { value: "1.5", unit: "×", label: { ja: "車輪半径に対する段差登攀限界（固定テール比 0.8倍 → 1.5倍）", en: "Step-climbing limit, as a multiple of wheel radius (vs. 0.8× for a fixed tail)" } },
    { value: "2", unit: "×", label: { ja: "不整地走行における移動距離（固定テール比、ハイブリッド制御）", en: "Net travel distance on rough terrain vs. a fixed tail (hybrid control)" } },
    { value: "30", unit: "+", label: { ja: "CADで試作・検証したテール機構のプロトタイプ数", en: "Tail-mechanism prototype iterations designed and tested in CAD" } },
  ] as StatItem[],
  closingHeading: { ja: "学びと今後", en: "Takeaway & next step" } as Bi,
  closing: {
    ja: "参照できる先行実装が少ない中で、モデルベースのアプローチによって機構の有効性を定量的に示せたことが、この研究の核です。一方で、検証は物理シミュレーション中心であり、実機への展開（Sim-to-Realギャップの解消）が今後の課題です。",
    en: "With few prior implementations to reference, the core result is showing the mechanism's effectiveness quantitatively through a model-based approach. The verification so far is simulation-centric, so closing the sim-to-real gap on physical hardware is the next step.",
  } as Bi,
  context: {
    ja: "本研究は、内閣府ムーンショット型研究開発事業 目標3「未知未踏領域における拠点建築のための集団共有知能をもつ進化型ロボット群」プロジェクトの一環として、JAXAを含む複数の研究機関と連携して進められました（プロジェクトは完了済み）。",
    en: "This work was conducted as part of the Cabinet Office's Moonshot R&D Program, Goal 3 project on evolving robot swarms for outpost construction in uncharted terrain, in collaboration with several institutions including JAXA (the project has since concluded).",
  } as Bi,
};

export const projects: ProjectItem[] = [
  {
    title: { ja: "Claude 使用量メニューバーアプリ", en: "Claude Usage Menu Bar App" },
    tag: { ja: "個人開発", en: "Personal project" },
    status: { ja: "自己利用中", en: "In use" },
    description: {
      ja: "Claude の5時間ごとの使用量をmacOSのメニューバーにリアルタイム表示するネイティブアプリ。認証情報はmacOS Keychainに保存し、ログイン時自動起動にも対応。自分が毎日使うツールを自分で作った。",
      en: "A native macOS menu bar app that shows Claude's 5-hour usage allowance in real time. Credentials are stored securely in the macOS Keychain; supports launch at login. Built it because I needed it myself.",
    },
    stack: ["Swift", "SwiftUI", "macOS 14+"],
    metric: { ja: "毎日自分で使用中", en: "Used daily by myself" },
    github: "https://github.com/Tsurukai-haru/claude-usage-menubar",
  },
  {
    title: { ja: "能動テール機構の物理シミュレーション環境構築", en: "Physics Simulation Environment for the Active Tail Mechanism" },
    tag: { ja: "研究", en: "Research" },
    status: { ja: "完了（卒業論文として提出）", en: "Completed — submitted as graduation thesis" },
    description: {
      ja: "MATLAB/Simscape Multibodyを用いた3次元物理シミュレーションをゼロから構築。段差登攀・不整地走行の両実験で、固定テール・跳躍機構との比較評価を行った。",
      en: "Built a 3D multibody physics simulation in MATLAB/Simscape from the ground up, and used it to benchmark the active tail against a fixed tail and a hopping mechanism across step-climbing and rough-terrain trials.",
    },
    stack: ["MATLAB", "Simscape Multibody", "Stateflow", "Python"],
    metric: { ja: "段差登攀 1.5倍／移動距離 約2倍", en: "1.5× step-climbing, ~2× travel distance" },
  },
  {
    title: { ja: "ボルダリングジム 受付・出席管理アプリ", en: "Front-Desk & Attendance App for a Bouldering Gym" },
    tag: { ja: "個人開発", en: "Personal project" },
    status: { ja: "開発中（プロトタイプ）", en: "In progress — prototype" },
    description: {
      ja: "アルバイト先のジムで、紙の出席表をExcelへ手作業転記している運用に着目。会員番号入力で氏名・年齢区分を自動表示し、利用時間から料金を自動計算するアプリを設計・開発中。",
      en: "At the gym where I work part-time, staff hand-transcribe paper attendance sheets into Excel every day. I'm designing and building an app that looks up a member by ID, auto-fills their name and age tier, and calculates the fee from check-in/out time.",
    },
    stack: ["React", "Vite", "FastAPI", "SQLite"],
    metric: { ja: "対象業務：日次の手書き転記作業", en: "Target: daily paper-to-spreadsheet transcription" },
  },
  {
    title: { ja: "Excelによる出席管理の自動化", en: "Spreadsheet Automation for Attendance Lookups" },
    tag: { ja: "業務改善", en: "Process improvement" },
    status: { ja: "運用中", en: "In use" },
    description: {
      ja: "会員番号から氏名を引き当てるVLOOKUP関数を導入し、手作業で行っていた出席記録の転記作業を効率化した。",
      en: "Introduced a VLOOKUP-based lookup from member ID to name, streamlining a previously manual attendance-transcription task.",
    },
    stack: ["Excel"],
    metric: { ja: "作業時間を約半分に短縮", en: "Cut the task's time roughly in half" },
  },
];

export const achievements: AchievementItem[] = [
  {
    category: { ja: "研究成果", en: "Research" },
    title: { ja: "段差登攀性能：車輪半径の1.5倍", en: "Step-climbing performance: 1.5× wheel radius" },
    detail: { ja: "固定テール機構の限界（0.8倍）を、能動テール機構により大幅に更新。", en: "A substantial improvement over the fixed-tail limit of 0.8×, achieved with the active tail mechanism." },
  },
  {
    category: { ja: "研究成果", en: "Research" },
    title: { ja: "不整地走行距離：固定テール比 約2倍", en: "Rough-terrain travel distance: ~2× a fixed tail" },
    detail: { ja: "スタック検知に基づくハイブリッド制御により、極限不整地でも走行を継続。", en: "A hybrid, stuck-detection-driven controller kept the rover moving even in extreme rough terrain." },
  },
  {
    category: { ja: "プロジェクト", en: "Project" },
    title: { ja: "ムーンショット型研究開発事業 目標3 プロジェクト参画", en: "Participation in Moonshot R&D Program, Goal 3" },
    detail: { ja: "JAXAを含む複数機関と連携した国の研究開発プロジェクトに参加（プロジェクトは完了済み）。", en: "Took part in a national R&D project run with JAXA and other institutions (the project has since concluded)." },
  },
  {
    category: { ja: "学業", en: "Academics" },
    title: { ja: "成績優秀者代表", en: "Top-student representative" },
    detail: { ja: "学部における成績優秀者の代表として証書を授与。", en: "Recognized as the representative top-performing student in the undergraduate program." },
  },
  {
    category: { ja: "学業", en: "Academics" },
    title: { ja: "優良認定書", en: "Certificate of Excellence" },
    detail: { ja: "学業成績に対する優良認定書を授与。", en: "Awarded a certificate of excellence for academic performance." },
  },
  {
    category: { ja: "学業", en: "Academics" },
    title: { ja: "大学院給付奨学金", en: "Graduate school scholarship (grant-type)" },
    detail: { ja: "返還を要しない給付型の大学院奨学金を受給。", en: "Recipient of a non-repayable, grant-type graduate scholarship." },
  },
  {
    category: { ja: "課外活動", en: "Outside research" },
    title: { ja: "ボルダリングジム ルートセッター：150本以上", en: "Bouldering route setter: 150+ routes" },
    detail: { ja: "ゴールムーブから逆算する設計思考を、研究の機構設計にも応用。", en: "The backward-from-the-goal-move design thinking carried directly into mechanism design for the rover." },
  },
];

export const experience: TimelineItem[] = [
  {
    period: { ja: "2026.04 — 現在", en: "Apr 2026 — present" },
    title: { ja: "理工学研究科 電気電子情報通信工学専攻 修士課程", en: "M.S. student, Electrical, Electronic, and Communication Engineering" },
    org: { ja: "中央大学大学院 國井研究室（2028年3月卒業予定）", en: "Chuo University Graduate School, Kunii Laboratory (expected graduation: March 2028)" },
  },
  {
    period: { ja: "2022.04 — 2026.03", en: "Apr 2022 — Mar 2026" },
    title: { ja: "理工学部 電気電子情報通信工学科", en: "B.Eng., Electrical, Electronic, and Communication Engineering" },
    org: { ja: "中央大学（卒業論文：小型2輪ローバに適した能動テールのための準静的モデルと物理シミュレーションによる機構設計と有効性検証に関する研究）", en: "Chuo University (Graduation thesis: Mechanism Design and Effectiveness Verification Using Quasi-Static Models and Physical Simulation for an Active Tail Suited to Small Two-Wheeled Rovers)" },
  },
  {
    period: { ja: "在学中", en: "Ongoing, alongside studies" },
    title: { ja: "ルートセッター／スタッフ", en: "Route setter / staff" },
    org: { ja: "ボルダリングジム（アルバイト）", en: "Bouldering gym (part-time)" },
    detail: { ja: "150本以上のコース設計に加え、出席管理の自動化など運用改善にも従事。", en: "Set 150+ climbing routes and also worked on operational improvements such as automating attendance lookups." },
  },
  {
    period: { ja: "在学中", en: "Ongoing, alongside studies" },
    title: { ja: "創設初期メンバー", en: "Founding-period member" },
    org: { ja: "社会人ハンドボールチーム", en: "Adult (shakaijin) handball team" },
    detail: { ja: "チームの立ち上げに初期メンバーの一人として参加。", en: "Joined as one of the early members during the team's founding." },
  },
];

export const contact = {
  sheetLabel: { ja: "SHEET 07 — CONTACT", en: "SHEET 07 — CONTACT" } as Bi,
  heading: { ja: "Get in Touch", en: "Get in Touch" } as Bi,
  body: {
    ja: "研究内容・選考に関するご連絡など、お気軽にご連絡ください。",
    en: "Feel free to reach out about my research or for recruiting purposes.",
  } as Bi,
  emailLabel: { ja: "メールを送る", en: "Send an email" } as Bi,
  // TODO: 実際の連絡先・リンクに差し替えてください（README参照）。
  email: "haru.tsurukai.info@gmail.com",
  github: "https://github.com/Tsurukai-haru",
  linkedin: "",
};

export const footer = {
  rights: { ja: "All rights reserved.", en: "All rights reserved." } as Bi,
};
