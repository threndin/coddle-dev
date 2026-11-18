import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link className="brand" href="/" aria-label="Coddle Developers home">
            <Image src="/coddle-mark.png" className="brand-mark" width={24} height={25} alt="" />
            <span>Coddle<span className="brand-divider" aria-hidden="true">/</span><span className="brand-section">Developers</span></span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main id="main" className="wrap grid flex-1 grid-cols-1 items-center gap-7 py-12 min-[761px]:grid-cols-[.85fr_1.15fr] min-[761px]:gap-16 min-[761px]:py-20">
        <div className="font-[family-name:var(--mono)] text-[clamp(6rem,24vw,10rem)] leading-none font-bold tracking-[-.1em] text-[var(--accent)] min-[761px]:text-[clamp(7rem,19vw,16rem)]" aria-hidden="true">404</div>
        <div className="max-w-[530px]">
          <p className="section-label">404 ERROR</p>
          <h1 className="my-[18px] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-.055em]">Page not found.</h1>
          <p className="text-[var(--muted)] leading-[1.7]">The page may have moved, or the address may be incorrect. Head back to the developer hub to find your next starting point.</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3.5">
            <Link className="inline-flex items-center gap-2.5 rounded-lg bg-[var(--accent)] px-[18px] py-[13px] text-sm font-semibold text-white hover:opacity-85" href="/">Back to home <Icon name="arrow-up" size={16} /></Link>
            <Link className="inline-flex items-center gap-2.5 py-3 text-sm font-semibold text-[var(--accent)] hover:underline hover:underline-offset-4" href="/#ecosystem">Explore the ecosystem <Icon name="arrow-up" size={16} /></Link>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span>Coddle Developers</span>
          <a href="https://usecoddle.com">usecoddle.com <Icon name="arrow-up" size={14} /></a>
        </div>
      </footer>
    </div>
  );
}
