import { createRoot } from 'react-dom/client';
import { html } from './html.js';
import BlurText from './reactbits/BlurText.js';
import CountUp from './reactbits/CountUp.js';
import SpotlightCard from './reactbits/SpotlightCard.js';
import FadeContent from './reactbits/FadeContent.js';
import {
  profile,
  stats,
  experience,
  education,
  projects,
  skills,
  strengths,
  languages,
  achievements,
  interests
} from './data.js';

const CARAMEL = '#A8653E';

const Reveal = ({ children, delay = 0 }) => html`
  <${FadeContent} blur=${true} duration=${0.9} delay=${delay} threshold=${0.15}>${children}<//>
`;

const Dots = ({ level, label }) => html`
  <span className="dots" role="img" aria-label=${`${label}: ${level} out of 5`}>
    ${[1, 2, 3, 4, 5].map(i => html`<span key=${i} className=${i <= level ? 'dot on' : 'dot'} />`)}
  </span>
`;

const SectionTitle = ({ id, eyebrow, title }) => html`
  <header className="section-head">
    <p className="eyebrow">${eyebrow}</p>
    <h2 id=${id}>${title}</h2>
  </header>
`;

const Nav = () => html`
  <nav className="nav" aria-label="Main">
    <a className="brand" href="#top">Luca du Toit</a>
    <ul className="nav-links">
      <li><a href="#experience">Experience</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a className="btn btn-small" href=${profile.cv} download>Download CV</a>
  </nav>
`;

const Hero = () => html`
  <section className="hero" id="top">
    <div className="wrap">
      <p className="eyebrow">${profile.role} · ${profile.location}</p>
      <div role="heading" aria-level="1" className="hero-name">
        <${BlurText} text=${profile.name} animateBy="letters" delay=${70} direction="bottom" trigger="load" />
      </div>
      <${BlurText}
        className="hero-about"
        text=${profile.about}
        animateBy="words"
        delay=${25}
        stepDuration=${0.3}
        distance=${18}
        trigger="load"
      />
      <div className="hero-actions">
        <a className="btn" href="#projects">View my projects</a>
        <a className="btn btn-ghost" href=${profile.github} target="_blank" rel="noopener">GitHub ↗</a>
        <a className="btn btn-ghost" href=${profile.cv} download>Download CV</a>
      </div>
    </div>
  </section>
`;

const Stats = () => html`
  <section className="stats" aria-label="Highlights">
    <div className="wrap stats-grid">
      ${stats.map(
        s => html`
          <div className="stat" key=${s.label}>
            <span className="stat-value">
              <${CountUp} to=${s.value} suffix=${s.suffix || ''} duration=${1.8} />
            </span>
            <span className="stat-label">${s.label}</span>
          </div>
        `
      )}
    </div>
  </section>
`;

const Entry = ({ item }) => html`
  <article className="entry">
    <div className="entry-top">
      <h3>${item.title}</h3>
      <span className="date">${item.dates}</span>
    </div>
    <p className="org">${item.org} · ${item.place}</p>
    <ul className="points">
      ${item.points.map(p => html`<li key=${p}>${p}</li>`)}
    </ul>
  </article>
`;

const Experience = () => html`
  <section className="section" aria-labelledby="experience">
    <div className="wrap">
      <${Reveal}>
        <${SectionTitle} id="experience" eyebrow="Where I've worked" title="Experience" />
        <div className="timeline">${experience.map(e => html`<${Entry} key=${e.title} item=${e} />`)}</div>
      <//>
    </div>
  </section>
`;

const Education = () => html`
  <section className="section alt" aria-labelledby="education">
    <div className="wrap">
      <${Reveal}>
        <${SectionTitle} id="education" eyebrow="Where I've studied" title="Education" />
        <div className="timeline">${education.map(e => html`<${Entry} key=${e.title} item=${e} />`)}</div>
      <//>
    </div>
  </section>
`;

const Projects = () => html`
  <section className="section" aria-labelledby="projects">
    <div className="wrap">
      <${Reveal}>
        <${SectionTitle} id="projects" eyebrow="Things I've built" title="Projects" />
      <//>
      <div className="project-grid">
        ${projects.map(
          (p, i) => html`
            <${Reveal} key=${p.title} delay=${i * 0.12}>
              <${SpotlightCard}
                className="project"
                theme="light"
                spotlightColor=${CARAMEL}
                intensity=${0.5}
                style=${{ '--spotlight-card-surface': '#FFFDF9' }}
              >
                <p className="project-kind">${p.kind} · ${p.year}</p>
                <h3>${p.title}</h3>
                <p className="project-desc">${p.description}</p>
                <ul className="tags">${p.tags.map(t => html`<li key=${t}>${t}</li>`)}</ul>
                <a className="project-link" href=${p.link} target="_blank" rel="noopener">View code on GitHub ↗</a>
              <//>
            <//>
          `
        )}
      </div>
    </div>
  </section>
`;

const Skills = () => html`
  <section className="section alt" aria-labelledby="skills">
    <div className="wrap">
      <${Reveal}>
        <${SectionTitle} id="skills" eyebrow="What I work with" title="Skills" />
        <div className="skills-grid">
          <div className="panel">
            <h3>Technical</h3>
            <ul className="meter-list">
              ${skills.map(
                s => html`<li key=${s.name}><span>${s.name}</span><${Dots} level=${s.level} label=${s.name} /></li>`
              )}
            </ul>
          </div>
          <div className="panel">
            <h3>Strengths</h3>
            <ul className="chips">${strengths.map(s => html`<li key=${s}>${s}</li>`)}</ul>
            <h3 className="spaced">Languages</h3>
            <ul className="meter-list">
              ${languages.map(
                l => html`<li key=${l.name}><span>${l.name}</span><${Dots} level=${l.level} label=${l.name} /></li>`
              )}
            </ul>
          </div>
          <div className="panel">
            <h3>Achievements</h3>
            <ul className="achievements">
              ${achievements.map(
                a => html`<li key=${a.text}><span>${a.text}</span><span className="date">${a.year}</span></li>`
              )}
            </ul>
            <h3 className="spaced">Interests</h3>
            <ul className="chips">${interests.map(s => html`<li key=${s}>${s}</li>`)}</ul>
          </div>
        </div>
      <//>
    </div>
  </section>
`;

const Contact = () => html`
  <footer className="contact" aria-labelledby="contact">
    <div className="wrap">
      <${Reveal}>
        <p className="eyebrow">Get in touch</p>
        <h2 id="contact">Let's work together</h2>
        <p className="contact-text">
          I'm looking for opportunities where I can contribute and keep learning. References are available on request.
        </p>
        <div className="hero-actions">
          <a className="btn" href=${`mailto:${profile.email}`}>${profile.email}</a>
          <a className="btn btn-ghost" href=${profile.github} target="_blank" rel="noopener">GitHub ↗</a>
          <a className="btn btn-ghost" href=${profile.cv} download>Download CV</a>
        </div>
      <//>
      <p className="fine">© ${new Date().getFullYear()} ${profile.name} · ${profile.location}</p>
    </div>
  </footer>
`;

const App = () => html`
  <${Nav} />
  <main>
    <${Hero} />
    <${Stats} />
    <${Experience} />
    <${Education} />
    <${Projects} />
    <${Skills} />
  </main>
  <${Contact} />
`;

createRoot(document.getElementById('root')).render(html`<${App} />`);
