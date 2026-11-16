import Image from "next/image";
import { Icon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const coddleUrl = "https://usecoddle.com";

const products = [
  { name: "Coddle", category: "AI ASSISTANT", summary: "Ask questions, shape ideas, and get help with everyday tasks.", url: coddleUrl, icon: "spark", action: "Visit Coddle", color: "orange" },
  { name: "Coddle Workspace", category: "TEAM COLLABORATION", summary: "Give your team one place to share notes, organize tasks, and work together.", url: "https://workspace.usecoddle.com", icon: "workspace", action: "Open Workspace", color: "blue" },
  { name: "Coddle Learn", category: "LEARN TECH", summary: "Build technical skills through roadmaps, coding practice, and hands-on projects.", url: "https://learn.usecoddle.com", icon: "learn", action: "Explore Learn", color: "green" },
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="/" aria-label="Coddle Developers home">
            <Image src="/coddle-mark.png" className="brand-mark" width={24} height={25} alt="" />
            <span>Coddle<span className="brand-divider" aria-hidden="true">/</span><span className="brand-section">Developers</span></span>
          </a>
          <div className="header-actions">
            <nav aria-label="Main navigation"><a href="#ecosystem">Ecosystem</a></nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main" className="wrap">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-art" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-label"><span /> DEVELOPER HUB</div>
            <h1 id="hero-title">Build with<br /><em>Coddle.</em></h1>
            <p>Your starting point for building, collaborating, and learning across the Coddle ecosystem.</p>
            <a className="hero-cta" href="#ecosystem">Explore the ecosystem <Icon name="arrow-down" size={17} /></a>
          </div>
          <span className="hero-index" aria-hidden="true">CODDLE.DEV <span>//</span> 01</span>
        </section>

        <section className="ecosystem" id="ecosystem" aria-labelledby="ecosystem-title">
          <div className="section-label"><span /> THE ECOSYSTEM</div>
          <div className="section-intro">
            <h2 id="ecosystem-title">Find your starting point.</h2>
            <p>Three products to help you think through ideas, work with others, and build new skills.</p>
          </div>
          <ul className="products">
            {products.map((product, index) => (
              <li key={product.name}>
                <a className={`product ${product.color}`} href={product.url}>
                  <div className="card-top">
                    <span className="product-icon"><Icon name={product.icon} size={23} /></span>
                    <span className="card-index" aria-hidden="true">0{index + 1}</span>
                  </div>
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.summary}</p>
                  <span className="product-action">{product.action} <Icon name="arrow-up" size={15} /></span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span><span className="footer-code" aria-hidden="true">&lt;/&gt;</span> Coddle Developers</span>
          <a href={coddleUrl}>usecoddle.com <Icon name="arrow-up" size={14} /></a>
        </div>
      </footer>
    </>
  );
}
