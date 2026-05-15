import { useEffect } from 'react'
import profilePic from './assets/profile_pic.png'
import resumePdf from './assets/Resume.pdf'
import './App.css'

type Experience = {
  year: string
  role: string
  org: string
  desc: string
}

type Education = {
  title: string
  org: string
  year: string
  notes: string[]
}

type Skill = { name: string; desc: string }

type Work = { title: string; year: string; img: string }

const EXPERIENCE: Experience[] = [
  {
    year: '2021',
    role: 'Systems Software Engineer',
    org: 'Microsoft Azure, A4O',
    desc:
      'Work on PaaS team for Unity Cloud, a cloud-native virtual network function product. Mostly worked on networking and observability agents - service mesh agents for load balancing, DNS and circuit breaking, opentelemetryagents for metrics and tracing, and client forredis database. Link: https://azure.microsoft.com/en-us/products/private-5g-core',
  },
  {
    year: '2019',
    role: 'Senior Systems Software Engineer',
    org: 'Extreme Networks',
    desc:
      'Worked on created data access layer for TierraOS, a cloud native device OS. Also worked a year on manageability for SLX-OS for SLX series of data centre routers.',
  },
  {
    year: '2017',
    role: 'Systems Software Engineer',
    org: 'Siemens Healthineers',
    desc:
      'Worked on Siemens Artis Zee X Ray angiography system, specifically in its movement control (MC) team.',
  },
  {
    year: '2015',
    role: 'Engineer',
    org: 'Power Research and Development Consultants (PRDC)',
    desc:
      'I was a C++ (MFC, STL) developer working on both front and back end of MiPower, a power system simulation software.',
  },
]

const EDUCATION: Education[] = [
  {
    title: 'Bachelors in Engineering',
    org: 'Visveshvaraya Technological University',
    year: '2011 - 2015',
    notes: ['First Class with Distinction'],
  },
]

const PRO_SKILLS: Skill[] = [
  { name: 'Systems Programming', desc: '' },
  { name: 'Distributed Systems', desc: '' },
  { name: 'AI Productivity', desc: '' },
]

const LANGUAGES: Skill[] = [
  { name: 'C++', desc: 'Backend services, APIs, and systems-side implementation.' },
  { name: 'Golang', desc: 'Frontend interfaces and strongly typed application code.' },
  { name: 'Rust', desc: 'Frontend interfaces and strongly typed application code.' },
  { name: 'Linux / Bash / Git', desc: 'Tooling, automation, and day-to-day engineering workflow.' },
]

const WORKS: Work[] = [
  {
    title: 'Rust API Starter',
    year: '2026',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80',
  }
]

function App() {
  useEffect(() => {
    fetch('/api/health')
      .catch(() => undefined)
  }, [])

  return (
    <main>
      {/* ─────── Hero ─────── */}
      <section className="section hero">
        <div className="hero__photo">
          <img src={profilePic} alt="Vivek portrait" />
        </div>
        <div className="hero__text">
          <h1 className="hero__name">Vivek Subramanian</h1>
          <p className="hero__role">Systems Software Engineer</p>
          <a
            className="hero__cta"
            href="mailto:tzar123@gmail.com?subject=Hello%20Vivek"
          >
            Reach out
          </a>
        </div>
      </section>

      {/* ─────── About ─────── */}
      <section className="section about">
        <div className="about__text">
          <h2>About Me (he/him)</h2>
          <p>
            I am a systems-focused software engineer who enjoys building reliable backend services,
            developer tooling, and clean deployment workflows. I like working close to the runtime:
            thinking about failure modes, latency, infrastructure boundaries, and the ergonomics of
            shipping software that is easy to operate.
          </p>
        </div>
        <div className="about__photo">
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80"
            alt="Workspace with a laptop"
          />
        </div>
      </section>

      {/* ─────── Relevant Experience ─────── */}
      <section className="section two-col">
        <h2 className="two-col__title">Selected Experience</h2>
        <div className="exp">
          {EXPERIENCE.map((e) => (
            <div className="exp__item" key={e.year + e.role}>
              <div className="exp__year">{e.year}</div>
              <div>
                <p className="exp__role">{e.role}</p>
                <p className="exp__org">{e.org}</p>
                <p className="exp__desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────── Education ─────── */}
      <section className="section two-col">
        <h2 className="two-col__title">
          Education
        </h2>
        <div className="edu">
          {EDUCATION.map((ed) => (
            <div className="edu__item" key={ed.title}>
              <h3 className="edu__title">{ed.title}</h3>
              <p className="edu__line">{ed.org}</p>
              <p className="edu__line edu__line--italic">{ed.year}</p>
              {ed.notes.map((n) => (
                <p className="edu__line" key={n}>
                  {n}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─────── Skills (split light/dark) ─────── */}
      <section className="skills">
        <h2 className="skills__title">
          Stack &amp;
          <br />
          Strengths
        </h2>
        <div className="skills__panel">
          <div className="skills__group">
            <h3>Core Skills</h3>
            {PRO_SKILLS.map((s) => (
              <p key={s.name}>
                <span className="skills__name">{s.name}</span>
                <span className="skills__desc">{s.desc}</span>
              </p>
            ))}
          </div>
          <div className="skills__group">
            <h3>Tooling &amp; Languages</h3>
            {LANGUAGES.map((s) => (
              <p key={s.name}>
                <span className="skills__name">{s.name}</span>
                <span className="skills__desc">{s.desc}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── Selected Works ─────── */}
      <section className="section">
        <h2 className="works__title">Selected Work</h2>
        <div className="works__grid">
          {WORKS.map((w) => (
            <article key={w.title}>
              <div className="work__img">
                <img src={w.img} alt={w.title} loading="lazy" />
              </div>
              <h3 className="work__title">{w.title}</h3>
              <p className="work__year">{w.year}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ─────── Connect (footer) ─────── */}
      <section className="section--dark" id="connect">
        <div className="section__inner">
          <h2 className="connect__title">Connect with me</h2>
          <p className="connect__name">Vivek Subramanian</p>
          <div className="connect__contact">
            <p>Available for backend, systems, and tooling work.</p>
            <p>Rust, TypeScript, Linux, and developer infrastructure.</p>
            <p>Replace this block with your preferred email, GitHub, and LinkedIn.</p>
          </div>
          <a className="connect__resume" href={resumePdf} download="Vivek_Subramanian_Resume.pdf">
            Download resume
          </a>
          <div className="connect__follow">
            <p>Find me on</p>
            <div className="connect__socials">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.06-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.27.83-.39.39-.63.76-.83 1.27-.15.39-.33.97-.38 2.04C2.66 8.48 2.65 8.85 2.65 12s0 3.52.06 4.76c.05 1.07.23 1.65.38 2.04.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.15.97.33 2.04.38 1.24.06 1.61.06 4.76.06s3.52 0 4.76-.06c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.27-.83.39-.39.63-.76.83-1.27.15-.39.33-.97.38-2.04.06-1.24.06-1.61.06-4.76s0-3.52-.06-4.76c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 0 0-.83-1.27 3.4 3.4 0 0 0-1.27-.83c-.39-.15-.97-.33-2.04-.38C15.52 4 15.15 4 12 4Zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9Zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Zm5.16-2.16a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32Z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.84v1.64h.05c.53-1 1.84-2.04 3.78-2.04 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.86V21h-4V9Z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6.99 4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.4 4.86a4.1 4.1 0 0 0 1.27 5.47 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.55a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.34 8.34 0 0 0 22 5.92Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
