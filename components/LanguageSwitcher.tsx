"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { locales, localeLabels, localeFlagSrc, type Locale } from "@/lib/i18n";

const FLAG_SIZE = 28;

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative " ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 w-11 items-center cursor-pointer justify-center overflow-hidden rounded-full border border-white/25 bg-white/10 shadow-md backdrop-blur-sm transition-all duration-300 ease-out hover:scale-110 hover:border-amber-400/60 hover:bg-amber-500/20 hover:shadow-amber-500/20 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-transparent active:scale-[0.98]"
        aria-label={localeLabels[locale]}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Image
          src={localeFlagSrc[locale]}
          alt=""
          width={FLAG_SIZE}
          height={FLAG_SIZE}
          className="rounded-sm object-cover transition-transform duration-300"
          unoptimized
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-50 mt-2 flex flex-col gap-0.5 rounded-xl border border-white/20 bg-black/95 py-1.5 shadow-2xl backdrop-blur-md animate-dropdown-in"
          role="menu"
        >
          {locales.map((loc, i) => (
            <button
              key={loc}
              type="button"
              role="menuitem"
              onClick={() => {
                setLocale(loc as Locale);
                setOpen(false);
              }}
              className="flex items-center cursor-pointer gap-3 rounded-lg px-4 py-2.5 text-left opacity-0 transition-all duration-200 ease-out hover:bg-white/15  animate-menu-item-in mx-1"
              style={{ animationDelay: `${0.05 * (i + 1)}s` }}
            >
              <span className="relative flex h-4 w-6 shrink-0 overflow-hidden rounded border border-white/20">
                <Image
                  src={localeFlagSrc[loc as Locale]}
                  alt=""
                  width={40}
                  height={32}
                  className="object-cover"
                  unoptimized
                />
              </span>
              <span
                className={`text-xs font-medium transition-colors duration-200 ${
                  locale === loc ? "text-amber-400" : "text-white"
                }`}
              >
                {localeLabels[loc as Locale]}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
