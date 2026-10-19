import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/newsreader/400-italic.css";
import "./styles.css";

const CV_URL = `${import.meta.env.BASE_URL}CV.pdf`;
const SCHOLAR_URL = "https://scholar.google.com/citations?user=m6xc7jAAAAAJ";
const EMAIL = "zhly233@gmail.com";

const copy = {
  en: {
    nav: ["About", "Research", "Publications", "Contact"],
    cv: "Download CV",
    skip: "Skip to content",
    menu: "Open navigation",
    close: "Close navigation",
    field: "THEORETICAL & COMPUTATIONAL PHYSICS",
    title: (
      <>
        Finding order in
        <br />
        the <em>quantum world.</em>
      </>
    ),
    intro: (
      <>
        I’m <strong>Luyao Zhong</strong>, a Ph.D. student in Physics at the Hong
        Kong University of Science and Technology.
      </>
    ),
    description:
      "Exploring how symmetry and interactions shape the remarkable behavior of quantum materials.",
    explore: "Explore my research",
    contact: "Get in touch",
    diagram: "ORBITAL SYMMETRY",
    diagramSub: "A study in form & structure",
    pause: "Pause illustration",
    play: "Animate illustration",
    location: "HONG KONG",
    affiliation: "Ph.D. in Physics",
    university: "Hong Kong University of Science and Technology",
    focusLabel: "CURRENT FOCUS",
    focus: "Unconventional superconductivity",
    aboutLabel: "01 / A LITTLE CONTEXT",
    aboutTitle: (
      <>
        Curiosity, with a<br />
        <em>theoretical foundation.</em>
      </>
    ),
    aboutText: (
      <>
        I work at the intersection of <strong>condensed-matter theory</strong>{" "}
        and <strong>scientific computing</strong>, using analytical and
        numerical methods to understand quantum materials.
      </>
    ),
    aboutText2:
      "My research spans symmetry-based classifications of superconducting pairing and first-principles studies of electronic and thermal transport. I’m interested in the connections between mathematical structure and physical behavior.",
    methods: "MY TOOLKIT",
    toolkit: [
      "Symmetry & group theory",
      "Quantum mechanics",
      "Python",
      "Numerical linear algebra",
      "Scientific computing",
    ],
    researchLabel: "02 / RESEARCH",
    researchTitle: (
      <>
        From symmetry
        <br />
        to <em>emergent behavior.</em>
      </>
    ),
    researchNote:
      "Two connected directions. One curiosity about the quantum world.",
    research: [
      {
        title: "Unconventional superconductivity",
        category: "THEORY · SYMMETRY · TOPOLOGY",
        place: "HKUST",
        date: "2025 — 2026",
        text: "Understanding superconducting pairing in multiorbital quantum systems through symmetry and group representation theory.",
        points: [
          "Symmetry-based classification of pairing channels",
          "Effective Hamiltonians and Bogoliubov–de Gennes models",
          "Operator representations, basis transformations, and low-energy projections",
        ],
      },
      {
        title: "Electronic & thermal transport",
        category: "FIRST PRINCIPLES · QUANTUM MATERIALS",
        place: "Chongqing University",
        date: "2023 — 2025",
        text: "Investigating how electronic structure and electron–hole compensation influence transport in topological and quantum materials.",
        points: [
          "First-principles electronic structure calculations",
          "Boltzmann transport and lattice thermal transport",
          "Interplay of thermal and electrical conductivity",
        ],
      },
    ],
    papersLabel: "03 / PUBLICATIONS",
    papersTitle: (
      <>
        Ideas, <em>in print.</em>
      </>
    ),
    allPapers: "View Google Scholar",
    all: "All papers",
    read: "Read paper",
    bib: "Copy BibTeX",
    copied: "Copied",
    showing: "Showing",
    papersUnit: "publications",
    journeyLabel: "04 / ALONG THE WAY",
    education: "Education",
    honors: "Honors & recognition",
    degrees: [
      {
        degree: "Ph.D. in Physics",
        school: "Hong Kong University of Science and Technology",
        date: "FEB 2026 — PRESENT",
        detail: "Hong Kong",
      },
      {
        degree: "B.Sc. in Physics",
        school: "Chongqing University",
        date: "SEP 2021 — JUN 2025",
        detail: "Chongqing, China",
      },
    ],
    awards: [
      {
        title: "Top-10 Poster Award",
        org: "Quantum Materials Symposium · HKUST(GZ)",
        date: "2025",
      },
      {
        title: "Yan Jici Scholarship",
        org: "Institute of Physics, Chinese Academy of Sciences",
        date: "2023",
      },
      {
        title: "Outstanding Student Scholarship",
        org: "Chongqing University",
        date: "2022–24",
      },
    ],
    contactLabel: "05 / LET’S CONNECT",
    contactTitle: (
      <>
        Good questions start
        <br />
        <em>great conversations.</em>
      </>
    ),
    contactText:
      "Have a shared research interest, a question, or an idea? I’d love to hear from you.",
    copyEmail: "Copy email address",
    emailCopied: "Email address copied",
    copyFailed: "Copy unavailable. Please select and copy the text.",
    copiedCitation: "BibTeX citation copied",
    footer: "Physics, with curiosity.",
    top: "Back to top",
    pdf: "CV · PDF",
    scholar: "Google Scholar",
    github: "GitHub",
  },
  zh: {
    nav: ["关于", "研究", "论文", "联系"],
    cv: "下载简历",
    skip: "跳转至正文",
    menu: "打开导航",
    close: "关闭导航",
    field: "理论物理与计算物理",
    title: (
      <>
        于量子世界，
        <br />
        探寻<em>秩序之美。</em>
      </>
    ),
    intro: (
      <>
        我是 <strong>Luyao Zhong</strong>
        ，目前在香港科技大学攻读物理学博士学位。
      </>
    ),
    description: "研究对称性与相互作用如何塑造量子材料中丰富而独特的物理现象。",
    explore: "探索我的研究",
    contact: "联系我",
    diagram: "轨道对称性",
    diagramSub: "形态与结构的概念示意",
    pause: "暂停图形动画",
    play: "播放图形动画",
    location: "中国香港",
    affiliation: "物理学博士研究生",
    university: "香港科技大学",
    focusLabel: "当前研究方向",
    focus: "非常规超导",
    aboutLabel: "01 / 关于我",
    aboutTitle: (
      <>
        以好奇心为起点，
        <br />
        <em>以理论为基石。</em>
      </>
    ),
    aboutText: (
      <>
        我的研究结合<strong>凝聚态理论</strong>与<strong>科学计算</strong>
        ，运用解析与数值方法理解量子材料的物理性质。
      </>
    ),
    aboutText2:
      "从基于对称性的超导配对分类，到电子与热输运的第一性原理计算，我关注数学结构与物理行为之间的联系。",
    methods: "研究工具",
    toolkit: ["对称性与群论", "量子力学", "Python", "数值线性代数", "科学计算"],
    researchLabel: "02 / 研究方向",
    researchTitle: (
      <>
        从对称性出发，
        <br />
        理解<em>涌现行为。</em>
      </>
    ),
    researchNote: "两个相互关联的方向，同一份对量子世界的好奇。",
    research: [
      {
        title: "非常规超导",
        category: "理论 · 对称性 · 拓扑",
        place: "香港科技大学",
        date: "2025 — 2026",
        text: "利用对称性与群表示理论，研究多轨道量子体系中的超导配对。",
        points: [
          "基于对称性的超导配对通道分类",
          "有效哈密顿量与 Bogoliubov–de Gennes 模型",
          "算符表示、基变换与低能投影",
        ],
      },
      {
        title: "电子与热输运",
        category: "第一性原理 · 量子材料",
        place: "重庆大学",
        date: "2023 — 2025",
        text: "研究电子结构与电子–空穴补偿如何影响拓扑材料和量子材料中的输运行为。",
        points: [
          "电子结构的第一性原理计算",
          "玻尔兹曼输运与晶格热输运",
          "热导率与电导率的相互关系",
        ],
      },
    ],
    papersLabel: "03 / 学术论文",
    papersTitle: (
      <>
        让想法，<em>落于笔端。</em>
      </>
    ),
    allPapers: "查看 Google Scholar",
    all: "全部论文",
    read: "阅读论文",
    bib: "复制 BibTeX",
    copied: "已复制",
    showing: "共显示",
    papersUnit: "篇论文",
    journeyLabel: "04 / 求学之路",
    education: "教育经历",
    honors: "荣誉与奖项",
    degrees: [
      {
        degree: "物理学博士（在读）",
        school: "香港科技大学",
        date: "2026.02 — 至今",
        detail: "中国香港",
      },
      {
        degree: "物理学学士",
        school: "重庆大学",
        date: "2021.09 — 2025.06",
        detail: "中国重庆",
      },
    ],
    awards: [
      {
        title: "十佳海报奖",
        org: "量子材料研讨会 · 香港科技大学（广州）",
        date: "2025",
      },
      { title: "严济慈奖学金", org: "中国科学院物理研究所", date: "2023" },
      { title: "优秀学生奖学金", org: "重庆大学", date: "2022–24" },
    ],
    contactLabel: "05 / 保持联系",
    contactTitle: (
      <>
        每个好问题，
        <br />
        都值得<em>一次交流。</em>
      </>
    ),
    contactText: "如果你有共同的研究兴趣、问题或想法，欢迎与我联系。",
    copyEmail: "复制邮箱地址",
    emailCopied: "邮箱地址已复制",
    copyFailed: "无法自动复制，请选中文本手动复制。",
    copiedCitation: "BibTeX 引用已复制",
    footer: "以好奇心，探索物理。",
    top: "返回顶部",
    pdf: "简历 · PDF",
    scholar: "Google Scholar",
    github: "GitHub",
  },
};

const publications = [
  {
    id: "nbp2",
    year: 2026,
    material: (
      <>
        NbP<sub>2</sub>
      </>
    ),
    theme: "orange",
    type: "THERMAL TRANSPORT",
    title:
      "Upward deviation from the Wiedemann–Franz law and phonon-dominated thermal transport in the topological semimetal NbP₂",
    authors: ["Jie Yang", "Luyao Zhong", "Xiaolong Yang"],
    volume: "114",
    pages: "204302",
    doi: "10.1103/c1h3-z72r",
  },
  {
    id: "cosi",
    year: 2026,
    material: <>CoSi</>,
    theme: "green",
    type: "ELECTRON–HOLE COMPENSATION",
    title:
      "Large violation of the Wiedemann–Franz law driven by electron-hole compensation in the topological semimetal CoSi",
    authors: [
      "Luyao Zhong",
      "Xin Jin",
      "Mingquan He",
      "Rui Wang",
      "Xiaoyuan Zhou",
      "Tianqi Deng",
      "Xiaolong Yang",
    ],
    volume: "113",
    pages: "L121102",
    doi: "10.1103/5svq-g1k7",
  },
  {
    id: "kagome",
    year: 2023,
    material: (
      <>
        ATi<sub>3</sub>Bi<sub>5</sub>
      </>
    ),
    theme: "blue",
    type: "KAGOME METALS",
    title:
      "Electrical and thermal transport properties of the kagome metals ATi₃Bi₅ (A = Rb, Cs)",
    authors: [
      "Xintong Chen",
      "Xiangqi Liu",
      "Wei Xia",
      "Xinrun Mi",
      "Luyao Zhong",
      "Kunya Yang",
      "Long Zhang",
      "Yuhan Gan",
      "Yan Liu",
      "Guiwen Wang",
      "Aifeng Wang",
      "Yisheng Chai",
      "Junying Shen",
      "Xiaolong Yang",
      "Yanfeng Guo",
      "Mingquan He",
    ],
    volume: "107",
    pages: "174510",
    doi: "10.1103/PhysRevB.107.174510",
  },
];

function Icon({ name = "arrow", size = 20, ...props }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    diagonal: (
      <>
        <path d="M6 18 18 6M6 6h12v12" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8V4H4v12h4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    up: <path d="M12 20V4m-6 6 6-6 6 6" />,
    pause: (
      <>
        <path d="M9 5v14M15 5v14" />
      </>
    ),
    play: <path d="m8 4 12 8-12 8Z" />,
    star: <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5" />,
    location: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}

function OrbitMark({ className = "" }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.4">
        <ellipse
          cx="20"
          cy="20"
          rx="18"
          ry="6.5"
          transform="rotate(-45 20 20)"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="18"
          ry="6.5"
          transform="rotate(45 20 20)"
        />
      </g>
      <circle cx="20" cy="20" r="2.8" fill="currentColor" />
    </svg>
  );
}

function project(theta, phi) {
  const r = 178 * (0.13 + Math.sin(theta) ** 2 * Math.abs(Math.cos(2 * phi)));
  const x = r * Math.sin(theta) * Math.cos(phi);
  const y = r * Math.sin(theta) * Math.sin(phi);
  const z = r * Math.cos(theta);
  const rx = x * 0.84 - y * 0.54;
  const ry = x * 0.54 + y * 0.84;
  return [280 + rx * 1.14, 277 + ry * 0.5 - z * 1.18];
}

function meshPath(points) {
  return points
    .map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(2)},${y.toFixed(2)}`)
    .join(" ");
}

const orbitalPaths = [
  ...Array.from({ length: 35 }, (_, i) => {
    const theta = (Math.PI * (i + 1)) / 36;
    return {
      d: meshPath(
        Array.from({ length: 145 }, (_, j) =>
          project(theta, (j / 144) * Math.PI * 2),
        ),
      ),
      color: i < 17 ? "#cb593a" : "#777b65",
      opacity: 0.66,
    };
  }),
  ...Array.from({ length: 56 }, (_, i) => {
    const phi = (Math.PI * 2 * i) / 56;
    return {
      d: meshPath(
        Array.from({ length: 75 }, (_, j) => project((j / 74) * Math.PI, phi)),
      ),
      color: Math.cos(phi * 2) > 0 ? "#bd482c" : "#6c7860",
      opacity: 0.55,
    };
  }),
];

function Orbital({ t, animate, setAnimate }) {
  return (
    <figure className={`orbital ${animate ? "is-animated" : ""}`}>
      <div className="orbital-corner corner-tl" />
      <div className="orbital-corner corner-tr" />
      <div className="orbital-heading">
        <span className="tiny-plus">+</span>
        <span>FIG. 01</span>
        <span>ψ(k)</span>
      </div>
      <svg
        className="orbital-art"
        viewBox="0 0 560 525"
        role="img"
        aria-label={t.diagramSub}
      >
        <defs>
          <radialGradient id="orbital-glow">
            <stop stopColor="#e9b394" stopOpacity=".26" />
            <stop offset="1" stopColor="#f6f5f0" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="dots"
            width="23"
            height="23"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".7" fill="#909582" opacity=".35" />
          </pattern>
        </defs>
        <rect width="560" height="525" fill="url(#dots)" />
        <ellipse
          cx="280"
          cy="277"
          rx="260"
          ry="230"
          fill="url(#orbital-glow)"
        />
        <g
          className="orbital-guides"
          stroke="#b8bbae"
          strokeWidth=".7"
          fill="none"
        >
          <ellipse
            cx="280"
            cy="277"
            rx="229"
            ry="95"
            transform="rotate(-23 280 277)"
            strokeDasharray="3 5"
          />
          <path
            d="M73 342 491 176M280 468V66M92 175l373 202"
            strokeDasharray="3 5"
          />
        </g>
        <g className="orbital-mesh" fill="none" strokeWidth=".67">
          {orbitalPaths.map((p, i) => (
            <path key={i} d={p.d} stroke={p.color} opacity={p.opacity} />
          ))}
        </g>
        <circle cx="280" cy="277" r="4" fill="#d74e2d" />
        <g fill="#7e8275" className="axis-label">
          <text x="495" y="175">
            kₓ
          </text>
          <text x="468" y="384">
            kᵧ
          </text>
          <text x="288" y="69">
            kz
          </text>
        </g>
        <path
          d="M414 117h31v-23"
          stroke="#d74e2d"
          fill="none"
          strokeWidth="1"
        />
        <circle cx="414" cy="117" r="2.5" fill="#d74e2d" />
        <text x="451" y="89" className="diagram-label" fill="#787e6c">
          SYMMETRY
        </text>
      </svg>
      <figcaption>
        <div>
          <span className="diagram-name">{t.diagram}</span>
          <span className="diagram-sub">{t.diagramSub}</span>
        </div>
        <button
          className="motion-button"
          aria-label={animate ? t.pause : t.play}
          aria-pressed={animate}
          onClick={() => setAnimate(!animate)}
        >
          <Icon name={animate ? "pause" : "play"} size={15} />
        </button>
      </figcaption>
      <div className="orbital-corner corner-bl" />
      <div className="orbital-corner corner-br" />
    </figure>
  );
}

function ResearchDrawing({ index }) {
  return index === 0 ? (
    <svg viewBox="0 0 150 130" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1">
        {[0, 30, 60, 90, 120, 150].map((r) => (
          <ellipse
            key={r}
            cx="75"
            cy="65"
            rx="51"
            ry="18"
            transform={`rotate(${r} 75 65)`}
          />
        ))}
      </g>
      <circle cx="75" cy="65" r="4" fill="currentColor" />
    </svg>
  ) : (
    <svg viewBox="0 0 150 130" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1">
        {[0, 1, 2].flatMap((y) =>
          [0, 1, 2].map((x) => (
            <path
              key={`${x}${y}`}
              d={`M${23 + x * 35},${25 + y * 35}h35l-17.5 30.3Z`}
            />
          )),
        )}
      </g>
      {[0, 1, 2].flatMap((y) =>
        [0, 1, 2].map((x) => (
          <circle
            key={`${x}${y}`}
            cx={23 + x * 35}
            cy={25 + y * 35}
            r="3"
            fill="currentColor"
          />
        )),
      )}
    </svg>
  );
}

function App() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("luyao-language") === "zh" ? "zh" : "en";
    } catch {
      return "en";
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [copied, setCopied] = useState("");
  const [toast, setToast] = useState("");
  const [animate, setAnimate] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const timer = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const t = copy[language];
  const visiblePapers = publications.filter(
    (p) => filter === "all" || p.year === filter,
  );

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    try {
      localStorage.setItem("luyao-language", language);
    } catch {
      /* Storage is optional. */
    }
  }, [language]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handleOutside = (event) => {
      if (
        !mobileMenuRef.current?.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      )
        setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [menuOpen]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copyText(value, id, message) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setToast(message);
    } catch {
      setToast(t.copyFailed);
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setCopied("");
      setToast("");
    }, 3000);
  }

  function copyCitation(paper) {
    const titles = {
      nbp2: "Upward deviation from the Wiedemann-Franz law and phonon-dominated thermal transport in the topological semimetal {NbP2}",
      cosi: "Large violation of the Wiedemann-Franz law driven by electron-hole compensation in the topological semimetal {CoSi}",
      kagome:
        "Electrical and thermal transport properties of the kagome metals {ATi3Bi5} ({A = Rb, Cs})",
    };
    const value = `@article{${paper.id}${paper.year},\n  title = {${titles[paper.id]}},\n  author = {${paper.authors.join(" and ")}},\n  journal = {Physical Review B},\n  volume = {${paper.volume}},\n  pages = {${paper.pages}},\n  year = {${paper.year}},\n  doi = {${paper.doi}}\n}`;
    copyText(value, paper.id, t.copiedCitation);
  }

  return (
    <div className={`site lang-${language}`}>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="header" id="top">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="Luyao Zhong — home">
            <OrbitMark />
            <span>
              Luyao Zhong<span className="brand-dot">.</span>
            </span>
          </a>
          <nav
            className="desktop-nav"
            aria-label={language === "en" ? "Main navigation" : "主导航"}
          >
            {["about", "research", "publications", "contact"].map((id, i) => (
              <a key={id} href={`#${id}`}>
                {t.nav[i]}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="language-button"
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              aria-label={
                language === "en" ? "切换到中文" : "Switch to English"
              }
            >
              <span className={language === "en" ? "active" : ""}>EN</span>
              <span className="language-divider">/</span>
              <span className={language === "zh" ? "active" : ""}>中</span>
            </button>
            <a
              className="header-cv"
              href={CV_URL}
              download="Luyao_Zhong_CV.pdf"
            >
              {t.cv}
              <Icon name="download" size={16} />
            </a>
            <button
              ref={menuButtonRef}
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? t.close : t.menu}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
        <nav
          ref={mobileMenuRef}
          id="mobile-navigation"
          className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
          aria-label={language === "en" ? "Mobile navigation" : "移动端导航"}
          inert={!menuOpen}
        >
          {["about", "research", "publications", "contact"].map((id, i) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {t.nav[i]}
              <Icon name="diagonal" size={17} />
            </a>
          ))}
          <a href={CV_URL} download="Luyao_Zhong_CV.pdf">
            {t.cv}
            <Icon name="download" size={17} />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="status-dot" />
                {t.field}
              </p>
              <h1 id="hero-title">{t.title}</h1>
              <p className="hero-intro">{t.intro}</p>
              <p className="hero-description">{t.description}</p>
              <div className="hero-buttons">
                <a className="button button-dark" href="#research">
                  {t.explore}
                  <Icon name="diagonal" size={17} />
                </a>
                <a className="text-link" href="#contact">
                  {t.contact}
                  <Icon name="arrow" size={18} />
                </a>
              </div>
            </div>
            <Orbital t={t} animate={animate} setAnimate={setAnimate} />
          </div>
          <div className="hero-meta">
            <div className="location">
              <Icon name="location" size={15} />
              <span>{t.location}</span>
              <span className="location-coordinate">22.34° N, 114.26° E</span>
            </div>
            <span className="hero-meta-note">
              {language === "en"
                ? "SYMMETRY. STRUCTURE. POSSIBILITY."
                : "对称性 · 结构 · 可能性"}
            </span>
            <a className="scroll-link" href="#about" aria-label={t.nav[0]}>
              <span>SCROLL TO EXPLORE</span>
              <Icon name="arrow" size={16} />
            </a>
          </div>
        </section>

        <section
          id="about"
          className="about section container"
          aria-labelledby="about-title"
        >
          <p className="eyebrow section-eyebrow">{t.aboutLabel}</p>
          <div className="about-layout">
            <div>
              <h2 id="about-title">{t.aboutTitle}</h2>
              <div className="affiliation">
                <span className="affiliation-symbol">
                  H<span>K</span>
                </span>
                <div>
                  <strong>{t.affiliation}</strong>
                  <span>{t.university}</span>
                </div>
              </div>
            </div>
            <div className="about-copy">
              <p className="lead">{t.aboutText}</p>
              <p>{t.aboutText2}</p>
              <div className="toolkit">
                <span className="eyebrow">{t.methods}</span>
                <div className="tags">
                  {t.toolkit.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="research"
          className="research-section"
          aria-labelledby="research-title"
        >
          <div className="container section">
            <p className="eyebrow section-eyebrow">{t.researchLabel}</p>
            <div className="section-heading">
              <h2 id="research-title">{t.researchTitle}</h2>
              <p className="section-note">{t.researchNote}</p>
            </div>
            <div className="research-list">
              {t.research.map((r, i) => (
                <article className="research-item" key={i}>
                  <div className={`research-visual visual-${i}`}>
                    <ResearchDrawing index={i} />
                    <span>0{i + 1}</span>
                  </div>
                  <div className="research-body">
                    <p className="eyebrow research-category">{r.category}</p>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                    <ul>
                      {r.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="research-date">
                    <span>{r.date}</span>
                    <span>{r.place}</span>
                    <div className="research-direction">
                      <Icon name="diagonal" size={26} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="publications"
          className="publications section container"
          aria-labelledby="publications-title"
        >
          <p className="eyebrow section-eyebrow">{t.papersLabel}</p>
          <div className="section-heading publications-heading">
            <h2 id="publications-title">{t.papersTitle}</h2>
            <a
              className="text-link"
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.allPapers}
              <Icon name="diagonal" size={16} />
            </a>
          </div>
          <div className="publications-toolbar">
            <div
              className="paper-filters"
              role="group"
              aria-label={
                language === "en"
                  ? "Filter publications by year"
                  : "按年份筛选论文"
              }
            >
              {["all", 2026, 2023].map((year) => (
                <button
                  key={year}
                  aria-pressed={filter === year}
                  onClick={() => setFilter(year)}
                  className={filter === year ? "selected" : ""}
                >
                  {year === "all" ? t.all : year}
                  {year === "all" && <span>03</span>}
                </button>
              ))}
            </div>
            <span className="paper-count" aria-live="polite">
              {t.showing} {visiblePapers.length} {t.papersUnit}
            </span>
          </div>
          <div className="paper-list">
            {visiblePapers.map((p) => (
              <article className="paper" key={p.id}>
                <div className={`paper-art ${p.theme}`} aria-hidden="true">
                  <span className="material-name">{p.material}</span>
                  <div className="material-lines">
                    {Array.from({ length: 8 }, (_, i) => (
                      <i key={i} style={{ "--i": i }} />
                    ))}
                  </div>
                  <span className="material-year">{p.year}</span>
                </div>
                <div className="paper-content">
                  <p className="paper-journal">
                    PHYSICAL REVIEW B <span>·</span> {p.year}
                  </p>
                  <h3>
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.title}
                    </a>
                  </h3>
                  <p className="paper-authors">
                    {p.authors.map((name, i) => (
                      <React.Fragment key={name}>
                        {i > 0 && ", "}
                        {name === "Luyao Zhong" ? (
                          <strong>{name}</strong>
                        ) : (
                          name
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                  <p className="paper-reference">
                    <em>Physical Review B</em> <strong>{p.volume}</strong>,{" "}
                    {p.pages} ({p.year})
                  </p>
                  <div className="paper-actions">
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.read}
                      <Icon name="diagonal" size={14} />
                    </a>
                    <span className="action-separator" />
                    <button onClick={() => copyCitation(p)}>
                      <Icon
                        name={copied === p.id ? "check" : "copy"}
                        size={13}
                      />
                      {copied === p.id ? t.copied : t.bib}
                    </button>
                  </div>
                </div>
                <span className="paper-index">
                  {String(publications.indexOf(p) + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-section" aria-labelledby="journey-label">
          <div className="container section">
            <p className="eyebrow section-eyebrow" id="journey-label">
              {t.journeyLabel}
            </p>
            <div className="journey-layout">
              <div className="education">
                <h2>
                  {t.education}
                  <span className="heading-star">
                    <Icon name="diagonal" size={25} />
                  </span>
                </h2>
                <div className="education-timeline">
                  {t.degrees.map((d, i) => (
                    <article className="education-item" key={d.school}>
                      <span
                        className={`timeline-dot ${i === 0 ? "current" : ""}`}
                      />
                      <span className="eyebrow education-date">{d.date}</span>
                      <h3>{d.degree}</h3>
                      <p>{d.school}</p>
                      <span className="education-location">{d.detail}</span>
                    </article>
                  ))}
                </div>
              </div>
              <div className="honors">
                <h2>
                  {t.honors}
                  <span className="heading-star">
                    <Icon name="star" size={25} />
                  </span>
                </h2>
                <div className="awards-list">
                  {t.awards.map((a) => (
                    <article className="award" key={a.title}>
                      <div>
                        <h3>{a.title}</h3>
                        <p>{a.org}</p>
                      </div>
                      <span className="award-date">{a.date}</span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">{t.contactLabel}</p>
              <h2 id="contact-title">{t.contactTitle}</h2>
              <p className="contact-description">{t.contactText}</p>
              <div className="contact-email">
                <a href={`mailto:${EMAIL}`}>
                  {EMAIL}
                  <Icon name="diagonal" size={27} />
                </a>
                <button
                  onClick={() => copyText(EMAIL, "email", t.emailCopied)}
                  aria-label={copied === "email" ? t.emailCopied : t.copyEmail}
                >
                  <Icon
                    name={copied === "email" ? "check" : "copy"}
                    size={19}
                  />
                </button>
              </div>
            </div>
            <div className="contact-side">
              <OrbitMark className="contact-orbit" />
              <div className="contact-socials">
                <a href={SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
                  {t.scholar}
                  <Icon name="diagonal" size={16} />
                </a>
                <a
                  href="https://github.com/northsi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.github}
                  <Icon name="diagonal" size={16} />
                </a>
                <a href={CV_URL} download="Luyao_Zhong_CV.pdf">
                  {t.pdf}
                  <Icon name="download" size={16} />
                </a>
              </div>
            </div>
          </div>
          <footer className="footer container">
            <a className="footer-brand" href="#top">
              Luyao Zhong<span>.</span>
            </a>
            <span>
              © {new Date().getFullYear()} Luyao Zhong{" "}
              <span className="footer-separator">/</span> {t.footer}
            </span>
            <a className="back-to-top" href="#top">
              {t.top}
              <Icon name="up" size={15} />
            </a>
          </footer>
        </section>
      </main>
      <div
        className={`toast ${toast ? "visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast && (
          <>
            <Icon name={copied ? "check" : "copy"} size={16} />
            <span>{toast}</span>
          </>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
