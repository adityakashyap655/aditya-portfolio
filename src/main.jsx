import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowRight, ArrowUpRight, Link2, Menu, X, Mail, Sparkles, Code2, Layers, Smartphone, ExternalLink, Send, MoveUpRight } from "lucide-react";
import "./style.css";

const PROFILE = {
  email: "adityakashyap4694@gmail.com",
  linkedin: "https://www.linkedin.com/in/adityakashyap655",
  github: "https://github.com/adityakashyap655"
};

const skills = [
  ["HTML5", "Semantic, accessible structure", Code2],
  ["CSS3", "Responsive layouts & styling", Layers],
  ["JavaScript", "Interactive web experiences", Code2],
  ["Figma", "Interface design & collaboration", Layers],
  ["UI/UX Design", "Human-centred digital products", Sparkles],
  ["Wireframing", "Clear structure before visuals", Layers],
  ["Prototyping", "Flows that feel real", MoveUpRight],
  ["Responsive Design", "Every screen, considered", Smartphone]
];

const projects = [
  { number:"01", title:"Gaming Website", type:"UI/UX DESIGN", desc:"A bold gaming experience shaped around immersive visuals, clear navigation and a high-energy interface.", tags:["Figma","UI/UX","Prototyping"], image:"https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85", tone:"violet", url:"#contact" },
  { number:"02", title:"Weather Forecast App", type:"WEB APPLICATION", desc:"A clean weather experience designed to make forecasts, conditions and everyday decisions feel effortless.", tags:["HTML","CSS","JavaScript"], image:"https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=85", tone:"blue", url:"#contact" },
  { number:"03", title:"E-commerce Website", type:"WEB DESIGN & DEVELOPMENT", desc:"A modern storefront concept focused on product discovery, intuitive shopping flows and responsive layouts.", tags:["HTML","CSS","JavaScript"], image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85", tone:"pink", url:"#contact" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const nav = [["About","about"],["Skills","skills"],["Work","work"],["Process","process"],["Contact","contact"]];
  const closeMenu = () => setMenuOpen(false);
  const submit = (e) => { e.preventDefault(); const data = new FormData(e.currentTarget); const subject = encodeURIComponent(data.get("subject")); const body = encodeURIComponent(`Hi Aditya,\n\n${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`); window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`; setSent(true); };
  return <div id="top">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="header">
      <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">A<span>.</span></span><span>ADITYA KASHYAP</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?"nav nav-open":"nav"}>{nav.map(([label,id])=><a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a></nav>
    </header>

    <main>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR INTERNSHIP OPPORTUNITIES</div>
          <p className="intro">Hi, I'm <span>Aditya Kashyap.</span></p>
          <h1>Designing digital<br/>experiences that<br/><em>make an impact.</em></h1>
          <p className="hero-desc">I'm a UI/UX Designer and Frontend Developer who loves turning thoughtful ideas into intuitive, engaging digital experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#contact">Get in touch <ArrowRight size={17}/></a></div>
          <div className="social-row"><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Link2 size={16}/> LinkedIn</a><a href={PROFILE.github} target="_blank" rel="noreferrer"><Code2 size={16}/> GitHub</a><span className="social-line"/></div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
          <div className="portrait-card">
            <div className="portrait-top"><span>CREATIVE MINDSET</span><span>01 / 05</span></div>
            <div className="portrait-art"><div className="portrait-glow"/><div className="portrait-initials">A<span>K</span></div><div className="portrait-caption">DESIGN<br/>MEETS CODE.</div></div>
            <div className="portrait-bottom"><span>UI/UX DESIGNER</span><span>✳</span><span>FRONTEND DEVELOPER</span></div>
          </div>
          <div className="float-chip chip-top"><Sparkles size={15}/> Thoughtful by design</div><div className="float-chip chip-bottom"><span className="mini-dot"/> Building what's next</div>
          <div className="hero-index">JAIPUR, INDIA <span>—</span> 2026</div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>

      <section id="about" className="section section-wrap">
        <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
        <div className="about-grid"><h2>Curiosity is where<br/>great design <em>begins.</em></h2><div className="about-copy"><p className="lead">I enjoy bringing clarity to complexity — shaping digital products that look considered and feel effortless to use.</p><p>My interests sit at the intersection of UI/UX design and frontend development. From understanding user needs and sketching wireframes to crafting polished interfaces and building them for the web, I love every step of the process.</p><p>I'm at the beginning of my professional journey, always learning, experimenting and looking for opportunities to grow with a thoughtful team.</p><a className="text-link" href="#contact">A little more about what I can do <ArrowUpRight size={16}/></a></div></div>
      </section>

      <section id="skills" className="section section-wrap">
        <div className="section-heading"><div><div className="section-kicker">02 / MY TOOLKIT</div><h2>Skills & <em>craft.</em></h2></div><p>A mix of design thinking and hands-on development to take ideas from first sketch to final screen.</p></div>
        <div className="skills-grid">{skills.map(([name,desc,Icon],i)=><div className="skill-card" key={name}><div className="skill-card-top"><span>0{i+1}</span><Icon size={20}/></div><h3>{name}</h3><p>{desc}</p><div className="skill-line"><span/></div></div>)}</div>
      </section>

      <section id="work" className="section section-wrap">
        <div className="section-heading work-heading"><div><div className="section-kicker">03 / SELECTED WORK</div><h2>Things I've <em>made.</em></h2></div><p>A few projects that reflect my interest in useful, engaging and visually clear digital experiences.</p></div>
        <div className="projects">{projects.map(p=><article className={`project-card ${p.tone}`} key={p.number}><div className="project-image"><img src={p.image} alt={`${p.title} project preview`} loading="lazy"/><span className="image-number">{p.number} / 03</span><a className="image-link" href={p.url} aria-label={`View ${p.title}`}><ArrowUpRight/></a></div><div className="project-info"><div className="project-meta">{p.type}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-links"><a href={p.url}>View project <ArrowUpRight size={15}/></a><a href="#contact">Live demo <ExternalLink size={14}/></a></div></div></article>)}</div>
        <p className="project-note">Project previews are illustrative. Replace the links and images with your final published work before sharing.</p>
      </section>

      <section id="process" className="section section-wrap process-section">
        <div className="section-kicker">04 / HOW I WORK</div><div className="section-heading"><h2>From thought<br/>to <em>thoughtful.</em></h2><p>Good experiences don't happen by accident. I like to work through a clear, iterative process.</p></div>
        <div className="process-track">{[["01","Research","Understand people, goals and the problem worth solving."],["02","Wireframing","Map content and user flows before adding visual detail."],["03","UI Design","Create a consistent visual language and polished screens."],["04","Prototyping","Connect screens into a tangible, testable experience."],["05","Testing","Gather feedback, find friction and refine the details."]].map(([n,t,d])=><div className="process-step" key={n}><span className="step-no">{n}</span><div className="step-marker"><span/></div><h3>{t}</h3><p>{d}</p></div>)}</div>
      </section>

      <section id="journey" className="section section-wrap journey-section">
        <div className="section-kicker">05 / THE JOURNEY SO FAR</div><div className="journey-grid"><div><h2>Always learning.<br/><em>Always building.</em></h2><p className="journey-intro">I'm a fresher building a strong foundation in design and frontend development, and excited to put that learning into practice.</p></div><div className="journey-items"><div className="journey-item"><span className="journey-icon"><Layers size={18}/></span><div><span className="journey-label">EDUCATION</span><h3>Learning & growing</h3><p>Add your degree, institution and graduation year here.</p></div></div><div className="journey-item"><span className="journey-icon"><Sparkles size={18}/></span><div><span className="journey-label">CURRENT FOCUS</span><h3>UI/UX + Frontend</h3><p>Practising user-centred design and building responsive web interfaces.</p></div></div><div className="journey-item"><span className="journey-icon"><ArrowUpRight size={18}/></span><div><span className="journey-label">NEXT CHAPTER</span><h3>Open to internships</h3><p>Ready to learn, contribute and grow through real-world projects.</p></div></div></div></div>
      </section>

      <section id="contact" className="contact-section section-wrap">
        <div className="contact-glow"/>
        <div className="section-kicker">06 / LET'S CONNECT</div><div className="contact-grid"><div className="contact-copy"><h2>Have a good<br/>idea? Let's make<br/><em>it happen.</em></h2><p className="contact-lead">Let's create something amazing together.</p><p>Have an opportunity, a project in mind or just want to say hello? My inbox is open.</p><a className="email-link" href={`mailto:${PROFILE.email}`}><Mail size={17}/>{PROFILE.email}<ArrowUpRight size={16}/></a><div className="contact-social"><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Link2/> LinkedIn <ArrowUpRight size={14}/></a><a href={PROFILE.github} target="_blank" rel="noreferrer"><Code2/> GitHub <ArrowUpRight size={14}/></a></div></div>
          <form className="contact-form" onSubmit={submit}><div className="form-heading"><span>DROP A MESSAGE</span><span className="form-star">✳</span></div><label>Your name<input name="name" placeholder="What should I call you?" required/></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required/></label><label>Subject<input name="subject" placeholder="What's this about?" required/></label><label>Message<textarea name="message" rows="4" placeholder="Tell me a little about it..." required/></label><button className="button button-primary submit-button" type="submit">Send message <Send size={16}/></button>{sent&&<p className="form-hint">Your email app should open with your message ready to send.</p>}<p className="form-hint">This form opens your email app — no message is stored on this website.</p></form>
        </div>
      </section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#top"><span className="brand-mark">A<span>.</span></span><span>ADITYA KASHYAP</span></a><span className="footer-note">Designed with intention. Built with curiosity.</span><div className="footer-right"><span>© 2026 Aditya Kashyap</span><a href="#top" aria-label="Back to top"><ArrowUpRight size={18}/></a></div></footer>
  </div>;
}
createRoot(document.getElementById("root")).render(<App/>);