import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Code2, Github, Globe2, Layers3, Mail, Menu, MousePointer2, Search, Sparkles, X, MessageCircle, UserRound } from 'lucide-react';
import './style.css';

const github = 'https://github.com/ifeoluwamorakinyojames-gif';
const email = 'ifeoluwamorakinyojames@gmail.com';
const whatsapp = 'https://wa.me/2348122425315?text=Hello%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.';
const projects = [
  { n: '01', name: 'Pink Sky Beauty & Wellness', type: 'SERVICE PLATFORM / CONTENT', description: 'A service-driven digital experience with a managed content system and an appointment-focused customer journey.', technologies: ['React', 'TypeScript', 'Sanity', 'Vite'], repo: 'PinkSky', live: 'https://pinkskybeauty.com/', theme: 'pink', monogram: 'PS', label: 'Beauty, thoughtfully digital.' },
  { n: '02', name: 'Reborn Collections', type: 'COMMERCE / PRODUCT DISCOVERY', description: 'A fashion storefront built around product discovery, catalogue browsing and a streamlined online shopping experience.', technologies: ['React', 'TypeScript', 'Tailwind', 'Sanity'], repo: 'reborn-collections', live: 'https://reborncollections.com/', theme: 'cream', monogram: 'RC', label: 'Discover your next look.' },
  { n: '03', name: 'Crest Crown Attorneys', type: 'PROFESSIONAL SERVICES / WEB', description: 'A legal services experience designed to make practice areas, firm information and enquiries easy to navigate.', technologies: ['Vite', 'JavaScript'], repo: 'Crest-law-firm-', live: 'https://crestcrownattorneys.com/', theme: 'gold', monogram: 'CC', label: 'Trust. Justice. Results.' },
  { n: '04', name: 'The Singles Forum', type: 'COMMUNITY / WEB EXPERIENCE', description: 'A community-focused website project. Technical implementation and results are pending a full repository review.', technologies: ['Community', 'Web'], repo: 'Thesinglesforum', theme: 'purple', monogram: 'TS', label: 'Purpose. People. Community.' }
];
const capabilities = [
 { icon: Code2, label: 'Web engineering', detail: 'Thoughtful web applications, responsive interfaces and maintainable architecture.' },
 { icon: Search, label: 'SEO · GEO · AEO', detail: 'Search-friendly architecture, structured content and improved discoverability.' },
 { icon: Sparkles, label: 'AI solutions', detail: 'Practical AI-assisted experiences and digital workflows.' },
 { icon: Layers3, label: 'Product thinking', detail: 'Clear user journeys, intelligent content systems and business-first decisions.' }
];
const links = [{ label: 'Work', href: '#work' }, { label: 'Expertise', href: '#expertise' }, { label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' }];
function App(){
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="site">
    <div className="background-glow" aria-hidden="true"/>
    <header className="header container">
      <a href="#top" className="brand" aria-label="Lumora home"><span className="brand-glyph"><Braces size={19}/></span> LUMORA<span className="accent">.</span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">{links.map(x => <a href={x.href} key={x.href} onClick={() => setMenuOpen(false)}>{x.label}</a>)}</nav>
      <a href={github} className="github-button" target="_blank" rel="noreferrer"><Github size={16}/> <span>My GitHub</span><ArrowUpRight size={14}/></a>
      <button className="menu-button" type="button" onClick={() => setMenuOpen(x => !x)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button>
    </header>
    <main id="top">
      <section className="hero container">
        <motion.div className="hero-copy" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
          <div className="availability"><span className="availability-dot"/> WEB DEVELOPMENT · SEO · AI</div>
          <p className="eyebrow">IFEOLUWA MORAKINYO JAMES · CEO, LUMORA</p>
          <h1>Ideas deserve<br/><em>exceptional</em><br/>execution<span className="accent">.</span></h1>
          <p className="hero-sub">I design and build digital experiences where thoughtful engineering meets real business impact.</p>
          <div className="hero-actions"><a href="#work" className="button-main">Explore selected work <ArrowUpRight size={18}/></a><a className="button-text" href="#contact">Let's connect <ArrowRight size={17}/></a></div>
          <div className="hero-mini"><span><Globe2 size={15}/> Building for the web</span><span><MousePointer2 size={15}/> Experience-led development</span></div>
        </motion.div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.2}} aria-hidden="true"><div className="art-outer"/><div className="art-middle"/><div className="art-inner"/><div className="art-center"><Braces size={76} strokeWidth={1}/></div><div className="floating-tag tag-one">CREATIVE ENGINEERING <span>↗</span></div><div className="floating-tag tag-two"><span className="tag-dot"/> SYSTEMS ONLINE</div><div className="art-cross cross-one">✳</div><div className="art-cross cross-two">+</div></motion.div>
        <a href="#work" className="scroll-cue" aria-label="Scroll to selected work"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
      </section>
      <section className="section work-section container" id="work">
        <div className="section-head"><div><div className="section-label">01 — SELECTED WORK</div><h2>Projects built with<br/><span className="muted-heading">intention.</span></h2></div><a href={github} target="_blank" rel="noreferrer" className="section-link">Browse GitHub <ArrowUpRight size={18}/></a></div>
        <p className="section-desc">Explore live client websites and their source repositories. Each project with a confirmed public website includes a live preview. Some websites may prevent embedded viewing; use the Visit live website link to open them directly.</p>
        <div className="project-grid">{projects.map(p => <article key={p.n} className="project-card"><div className={'project-cover '+p.theme}>{p.live ? <div className="live-site-frame"><iframe title={p.name + ' live website preview'} src={p.live} loading="lazy" referrerPolicy="strict-origin-when-cross-origin"/><div className="live-site-caption">LIVE WEBSITE PREVIEW · <a href={p.live} target="_blank" rel="noopener noreferrer">Open website <ArrowUpRight size={13}/></a></div></div> : <><div className="cover-top"><span>{p.n} / FEATURED PROJECT</span><ArrowUpRight size={20}/></div><div className="cover-design"><span className="cover-monogram">{p.monogram}</span><div className="cover-lines"><i/><i/><i/></div><span className="cover-label">Live website URL pending · {p.label}</span></div></> }</div><div className="project-meta">{p.type}</div><div className="project-heading"><h3>{p.name}</h3><a href={github+'/'+p.repo} target="_blank" rel="noreferrer" aria-label={'Open '+p.name+' GitHub repository'}><ArrowUpRight size={22}/></a></div><p>{p.description}</p><div className="technologies">{p.technologies.map(t=><span key={t}>{t}</span>)}</div><div className="project-links">{p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Visit live website <ArrowUpRight size={16}/></a>}<a href={github+'/'+p.repo} target="_blank" rel="noopener noreferrer">View GitHub repository <Github size={16}/></a></div></article>)}</div>
      </section>
      <section className="section expertise-section" id="expertise"><div className="container"><div className="section-label">02 — EXPERTISE</div><div className="expertise-intro"><h2>Different disciplines.<br/><span className="muted-heading">One clear purpose.</span></h2><p>Combining engineering, strategy and emerging technology to create digital products with intention.</p></div><div className="capability-grid">{capabilities.map((c,i)=><div className="capability" key={c.label}><div className="cap-icon"><c.icon size={25} strokeWidth={1.5}/></div><div className="cap-num">0{i+1}</div><h3>{c.label}</h3><p>{c.detail}</p></div>)}</div></div></section>
      <section className="section about-section container" id="about"><div><div className="section-label">03 — MEET THE FOUNDER</div><h2>Meet the person<br/><span className="muted-heading">behind Lumora.</span></h2><div className="founder-photo" role="img" aria-label="Portrait placeholder for Ifeoluwa Morakinyo James"><UserRound size={62} strokeWidth={1.1}/><span>CEO PORTRAIT</span><small>Professional photograph coming soon</small></div></div><div className="about-content"><div className="founder-role">FOUNDER &amp; CEO · LUMORA</div><h3 className="founder-name">Ifeoluwa Morakinyo James</h3><p>I'm a web developer working across modern frontend engineering, content platforms, SEO and practical AI solutions. I enjoy transforming complex requirements into experiences that feel simple and valuable.</p><p>My approach balances visual clarity, technical foundations and the needs of the people using the product. The projects above are starting points; more detailed case studies will follow verification.</p><a href={github} className="inline-link" target="_blank" rel="noreferrer"><Github size={17}/> Explore my repositories <ArrowUpRight size={17}/></a></div></section>
      <section className="contact-section container" id="contact"><div className="contact-panel"><div className="section-label">04 — LET'S BUILD SOMETHING</div><h2>Have something<br/><em>great in mind?</em></h2><p>I'd love to hear about the challenge you're solving.</p><div className="contact-actions"><a href={'mailto:'+email+'?subject='+encodeURIComponent('Project enquiry — Lumora')} className="button-main">Start a conversation <Mail size={19}/></a><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="button-text">Chat on WhatsApp <MessageCircle size={18}/></a></div><div className="contact-deco" aria-hidden="true"><Braces size={184} strokeWidth={.5}/></div></div></section>
    </main>
    <footer className="footer container"><a href="#top" className="footer-brand">LUMORA<span className="accent">.</span></a><span>© {new Date().getFullYear()} · Designed with intention.</span><div><a href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a><a href={'mailto:'+email}>Email <ArrowUpRight size={14}/></a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14}/></a></div></footer>
    <a href={whatsapp} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp at 08122425315" title="Chat on WhatsApp"><MessageCircle size={25}/><span>WhatsApp</span></a>
  </div>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
