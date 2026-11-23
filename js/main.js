import { createRoot } from 'react-dom/client';
import { html } from './html.js';
import BlurText from './reactbits/BlurText.js';
import CountUp from './reactbits/CountUp.js';
import SpotlightCard from './reactbits/SpotlightCard.js';
import FadeContent from './reactbits/FadeContent.js';
import MaskedHeading from './reactbits/MaskedHeading.js';
import { profile, work, about, facts, timeline, toolbox } from './data.js';

const CARAMEL = '#A8653E';

const ageNow = ({ year, month }) => {
  const now = new Date();
  return now.getFullYear() - year - (now.getMonth() + 1 < month ? 1 : 0);
};

const introText = profile.intro.replace('{age}', ageNow(profile.born));

const Reveal = ({ children, delay = 0 }) => html`
  <${FadeContent} blur=${true} duration=${0.9} delay=${delay} threshold=${0.15}>${children}<//>
`;

const Label = ({ id, children }) => html`<h2 className="label" id=${id}>${children}</h2>`;

const Nav = () => html`
  <nav className="nav wrap" aria-label="Main">
    <a className="brand" href="#top">Luca du Toit</a>
    <ul>
      <li><a href="#work">Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href=${profile.cv} download>CV</a></li>
    </ul>
  </nav>
`;

const Hero = () => html`
  <header className="hero wrap" id="top">
    <${MaskedHeading}
      tag="h1"
      className="greeting"
      text=${profile.greeting}
      src="img/heading-texture.svg"
      align="left"
      weight=${600}
      tracking=${-0.02}
      lineHeight=${1.05}
      textScale=${0.115}
      reveal="rise"
      trigger="load"
      duration=${1.2}
      stagger=${0.12}
      fillScale=${1.35}
      parallax=${30}
      drift=${24}
    />
    <${BlurText}
      className="intro"
      text=${introText}
      animateBy="words"
      delay=${22}
      stepDuration=${0.3}
      distance=${14}
      trigger="load"
    />
    <p className="links">
      <a href="#work">See my work ↓</a>
      <a href=${`mailto:${profile.email}`}>Say hello</a>
      <a href=${profile.github} target="_blank" rel="noopener">GitHub ↗</a>
    </p>
  </header>
`;

const Work = () => html`
  <section className="section wrap" aria-labelledby="work">
    <${Reveal}><${Label} id="work">Selected work<//><//>
    <div className="work">
      ${work.map(
        (p, i) => html`
          <${Reveal} key=${p.title} delay=${i * 0.1}>
            <${SpotlightCard}
              className="project"
              theme="light"
              spotlightColor=${CARAMEL}
              intensity=${0.45}
              style=${{ '--spotlight-card-surface': '#FFFDF9' }}
            >
              <h3>${p.title}</h3>
              <p>${p.blurb}</p>
              <div className="project-foot">
                <span className="stack">${p.stack}</span>
                <a href=${p.link} target="_blank" rel="noopener">Code ↗</a>
              </div>
            <//>
          <//>
        `
      )}
    </div>
  </section>
`;

const About = () => html`
  <section className="section wrap" aria-labelledby="about">
    <${Reveal}>
      <${Label} id="about">About<//>
      <p className="lead">${about}</p>
    <//>

    <${Reveal} delay=${0.1}>
      <ul className="facts">
        ${facts.map(
          f => html`
            <li key=${f.label}>
              <span className="num"><${CountUp} to=${f.value} suffix=${f.suffix || ''} duration=${1.6} /></span>
              <span>${f.label}</span>
            </li>
          `
        )}
      </ul>
    <//>

    <${Reveal} delay=${0.15}>
      <dl className="timeline">
        ${timeline.map(
          t => html`
            <div key=${t.when}>
              <dt>${t.when}</dt>
              <dd>${t.what} <span>· ${t.where}</span></dd>
            </div>
          `
        )}
      </dl>
      <p className="toolbox"><span>Toolbox</span> ${toolbox.join(', ')}</p>
    <//>
  </section>
`;

const Contact = () => html`
  <footer className="contact wrap" aria-labelledby="contact">
    <${Reveal}>
      <${Label} id="contact">Contact<//>
      <p className="lead">Looking for a place to contribute and keep learning. Email is the quickest way to reach me.</p>
      <a className="email" href=${`mailto:${profile.email}`}>${profile.email}</a>
      <p className="links">
        <a href=${profile.github} target="_blank" rel="noopener">GitHub ↗</a>
        <a href=${profile.cv} download>Download CV</a>
      </p>
    <//>
    <p className="fine">© ${new Date().getFullYear()} ${profile.name} · Cape Town</p>
  </footer>
`;

const App = () => html`
  <${Nav} />
  <main>
    <${Hero} />
    <${Work} />
    <${About} />
  </main>
  <${Contact} />
`;

createRoot(document.getElementById('root')).render(html`<${App} />`);
