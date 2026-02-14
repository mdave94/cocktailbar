"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Navbar() {
  const { t } = useLanguage();
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get viewport height in pixels
      const viewportHeight = window.innerHeight;
      // Check if scrolled past 90vh (90% of viewport height)
      setIsSolid(window.scrollY > viewportHeight * 0.7);
    };
  
    // Check initial state
    handleScroll();
  
    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <> <nav
    className="fixed w-full top-0 z-50 flex px-4 py-3 md:px-6 md:py-4"
    aria-label="Main navigation"
  >
    {/* Black layer fades in via opacity when scrolled past 100vh */}
    <div
      className={`pointer-events-none absolute inset-0 bg-black transition-opacity duration-500 ${
        isSolid ? "opacity-95" : "opacity-0"
      }`}
      aria-hidden
    />
    <div className="relative z-10 flex w-full items-center justify-end">
   

<div className="flex items-center gap-4">
  <a
    href="#drinks"
    onClick={handleSmoothScroll}
    className="hidden text-sm text-white/90 transition hover:text-white sm:block"
  >
    {t.nav.drinks}
  </a>
  <a
    href="#about"
    onClick={handleSmoothScroll}
    className="hidden text-sm text-white/90 transition hover:text-white sm:block"
  >
    {t.nav.about}
  </a>
  <a
    href="#contact"
    onClick={handleSmoothScroll}
    className="hidden text-sm text-white/90 transition hover:text-white sm:block"
  >
    {t.nav.contact}
  </a>
  <LanguageSwitcher />
</div>
</div>
     
    
  </nav></>
  );
}