"use client";

import { Icon } from "./icons";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const dark = root.dataset.theme === "dark" ||
      (!root.dataset.theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const theme = dark ? "light" : "dark";
    root.dataset.theme = theme;
    try { localStorage.setItem("coddle-theme", theme); } catch {}
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggle}>
      <span className="show-in-light"><Icon name="moon" size={17} /><span className="sr-only">Switch to dark mode</span></span>
      <span className="show-in-dark"><Icon name="sun" size={17} /><span className="sr-only">Switch to light mode</span></span>
    </button>
  );
}
