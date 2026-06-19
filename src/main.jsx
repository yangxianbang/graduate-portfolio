import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const contacts = [
  { mark: "TEL", label: "电话", value: "19818870916", href: "tel:19818870916" },
  { mark: "MAIL", label: "邮箱", value: "19818870916@163.com", href: "mailto:19818870916@163.com" },
  { mark: "LOC", label: "期望城市", value: "深圳 / 北京 / 长三角", href: "#contact" },
];

const projects = [
  {
    kicker: "负责人 · 控制算法验证",
    title: "中型固定翼飞机先进控制算法验证",
    summary:
      "在真实中型固定翼平台上验证先进控制算法的可行性与稳定性，覆盖航电安装、传感器集成校准、控制系统代码编写和试飞测试。",
    meta: ["C++", "MATLAB", "PX4", "传感器校准", "闭环试飞"],
    impact: "将算法从仿真推进到飞行平台，关注响应效率、控制精度与实际飞行环境稳定性。",
  },
  {
    kicker: "工程师 · 低空物流平台",
    title: "垂直起降长航时太阳能固定翼物流无人机",
    summary:
      "参与固定翼与多旋翼结合的无人机方案，使用增程式动力系统与柔性太阳能电池一体化蒙皮技术，负责气动分析和参数调控。",
    meta: ["XFLR5", "MATLAB", "气动分析", "轻量化", "VTOL"],
    impact: "在设计方案、气动优化与工程调参之间建立闭环，服务长航时物流无人机任务需求。",
  },
  {
    kicker: "负责人 · 从 0 到 1",
    title: "太阳能远距非常规鸭翼布局飞机",
    summary:
      "从比赛要求出发设计太阳能驱动、非常规鸭翼布局、高载重比、高制空时长飞机，负责机翼抗扭、整体分析、结构优化与试飞。",
    meta: ["总体设计", "结构优化", "抗扭设计", "试飞", "太阳能飞机"],
    impact: "独立推进小型太阳能无人机从方案设计到制造试飞，形成完整工程落地能力。",
  },
  {
    kicker: "负责人 · 智能路径规划",
    title: "基于灰狼算法的多无人机路径规划",
    summary:
      "采用变长度编码表达多无人机协同轨迹，改进 GWO 搜索效率，并通过非线性更新因子平衡快速寻优与深度挖掘。",
    meta: ["GWO", "路径规划", "协同飞行", "建模仿真", "EI 会议"],
    impact: "论文发表于 2024 IEEE ICCECT，聚焦智能配送任务下的算法适配与工程约束。",
  },
];

const strengths = [
  {
    mark: "FLY",
    title: "从设计到试飞的闭环能力",
    text: "具备航空器总体设计、结构优化、航电调试、控制部署和试飞验证经验，能把想法推到真实平台。",
  },
  {
    mark: "SYS",
    title: "算法与硬件双栈理解",
    text: "熟悉无人机控制算法、路径规划、PX4 飞控系统，同时参与过传感器集成、航电安装与电磁驱动装置研发。",
  },
  {
    mark: "LOW",
    title: "低空技术问题意识",
    text: "研究方向聚焦低空技术与工程，项目覆盖物流无人机、太阳能长航时平台和多机协同规划。",
  },
  {
    mark: "AI",
    title: "快速学习与 AI 工具使用",
    text: "熟练运用大模型工具辅助学习、调研与工程实践，持续关注前沿技术并尝试落地。",
  },
];

const education = [
  "大连理工大学 · 硕士 · 低空技术与工程（推免）",
  "沈阳航空航天大学 · 本科 · 飞行器设计与工程",
  "本科专业成绩排名 1/63，综合成绩排名 1/63",
  "辽宁省政府奖学金，连续五次校综合一等奖学金",
];

function NavBar() {
  return (
    <header className="nav-shell">
      <a className="brand" href="#hero" aria-label="返回首页">
        <span className="brand-mark">Y</span>
        <span>Yang Xianbang</span>
      </a>
      <nav aria-label="主导航">
        <a href="#profile">经历</a>
        <a href="#projects">项目</a>
        <a href="#strengths">优势</a>
        <a href="#contact">联系</a>
      </nav>
      <a className="nav-contact" href="mailto:19818870916@163.com">
        <span className="mini-mark">MAIL</span>
        联系我
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="/hero-poster.svg">
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <NavBar />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Graduate Portfolio · UAV Control · Low-altitude Technology</p>
          <h1>
            杨宪邦
            <span>把无人机算法带到真实飞行平台的研究生工程实践者</span>
          </h1>
          <p className="hero-subtitle">
            低空技术与工程硕士在读，方向覆盖固定翼控制算法、太阳能无人机、路径规划与航电系统集成。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              查看项目
              <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="ghost-button" href="mailto:19818870916@163.com">
              <span className="mini-mark">MAIL</span>
              发送邮件
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="核心信息">
          <div>
            <span className="panel-label">Current</span>
            <strong>大连理工大学 · 硕士</strong>
          </div>
          <div>
            <span className="panel-label">Focus</span>
            <strong>低空技术 / 控制算法 / UAV Engineering</strong>
          </div>
          <div className="metric-row">
            <span>
              <strong>1/63</strong>
              本科专业排名
            </span>
            <span>
              <strong>EI</strong>
              会议论文
            </span>
            <span>
              <strong>CN</strong>
              发明专利
            </span>
          </div>
        </aside>
      </div>
      <div className="scroll-cue">Scroll</div>
    </section>
  );
}

function Profile() {
  return (
    <section className="section profile-section" id="profile">
      <div className="section-heading">
        <p className="eyebrow">Profile</p>
        <h2>个人经历</h2>
      </div>
      <div className="profile-layout">
        <div className="avatar-card">
          <div className="avatar-frame">
            <img className="avatar-photo" src="/avatar.jpg" alt="杨宪邦头像" />
          </div>
          <h3>杨宪邦</h3>
          <p>算法工程师 / 硬件工程师方向</p>
          <div className="contact-list">
            {contacts.map((item) => {
              return (
                <a href={item.href} key={item.label}>
                  <span className="mini-mark">{item.mark}</span>
                  <span>{item.value}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="profile-copy">
          <p>
            我是一名低空技术与工程方向研究生，本科毕业于沈阳航空航天大学飞行器设计与工程专业，并以专业第一推免至大连理工大学。
            我的项目经历横跨无人机控制算法、航电系统集成、太阳能长航时平台、路径规划和机械执行机构。
          </p>
          <p>
            我更关注“算法是否能在真实平台稳定工作”。从 C++/MATLAB/PX4 到传感器校准、结构优化与试飞，我希望把研究中的模型、控制律和规划算法转化为可验证、可交付的工程能力。
          </p>
          <div className="education-grid">
            {education.map((item) => (
              <div className="education-item" key={item}>
                <span className="mini-mark">EDU</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading wide-heading">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2>精选项目</h2>
        </div>
        <p>
          用大卡片呈现能力边界：控制算法、飞行平台、工程调试、智能规划和论文/专利成果。
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
            <p className="project-kicker">{project.kicker}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="chip-row">
              {project.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="project-impact">
              <span className="mini-mark">FLOW</span>
              <span>{project.impact}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="section strength-section" id="strengths">
      <div className="section-heading">
        <p className="eyebrow">Capabilities</p>
        <h2>个人优势</h2>
      </div>
      <div className="strength-grid">
        {strengths.map((item) => {
          return (
            <article className="strength-card" key={item.title}>
              <div className="icon-box">
                <span>{item.mark}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-title">
          <p className="eyebrow">Contact</p>
          <h2>期待进入真实系统，把低空技术做成可飞、可靠、可验证的工程结果。</h2>
        </div>
        <div className="contact-cards">
          <a href="tel:19818870916" className="contact-card">
            <span className="mini-mark">TEL</span>
            <span>电话</span>
            <strong>19818870916</strong>
          </a>
          <a href="mailto:19818870916@163.com" className="contact-card">
            <span className="mini-mark">MAIL</span>
            <span>邮箱</span>
            <strong>19818870916@163.com</strong>
          </a>
          <a href="#projects" className="contact-card">
            <span className="mini-mark">ROLE</span>
            <span>意向</span>
            <strong>算法工程师 / 硬件工程师</strong>
          </a>
        </div>
        <div className="footer-line">
          <span>Yang Xianbang Portfolio</span>
          <span>Low-altitude Technology · UAV Control · Aerospace Engineering</span>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Hero />
      <main>
        <Profile />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
