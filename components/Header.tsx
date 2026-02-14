"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

const LOGO_HEIGHT = 44;
const LOGO_WIDTH = 88;

/* function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
} */

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
      <a
        href="#hero"
        className="flex items-center gap-3 transition-opacity hover:opacity-90"
      >

  
      </a>
      <nav className="flex items-center gap-4">
        <a
          href="#drinks"
          className="hidden text-sm text-white/90 transition hover:text-white sm:block"
        >
          {t.nav.drinks}
        </a>
        <a
          href="#about"
          className="hidden text-sm text-white/90 transition hover:text-white sm:block"
        >
          {t.nav.about}
        </a>
        <a
          href="#contact"
          className="hidden text-sm text-white/90 transition hover:text-white sm:block"
        >
          {t.nav.contact}
        </a>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
