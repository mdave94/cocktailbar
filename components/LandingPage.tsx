"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navbar } from "./Navbar";

const cocktails = [
  {
    id: "negroni",
    name: "Negroni",
    tags: ["Gin", "Campari", "Vermouth"],
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80",
  },
  {
    id: "mojito",
    name: "Mojito",
    tags: ["Rum", "Menta", "Lime"],
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80",
  },
  {
    id: "manhattan",
    name: "Manhattan",
    tags: ["Bourbon", "Vermouth", "Angostura"],
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
  },
];

export function LandingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen ">
      <Navbar />

      {/* Hero: full-bleed video with text overlay bottom-left (reference style) */}
      <section
        id="hero"
        className="relative flex min-h-dvh flex-col justify-end overflow-hidden"
      >
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/DejaVu.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Gradient overlay: darker at bottom for text readability */}
        <div
          className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"
          aria-hidden
        />
        {/* Soft shadow strip at bottom of video only (below text/button) */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/50 to-transparent md:h-28"
          aria-hidden
        />
        {/* Text and CTA bottom-left – no shadow on title or button */}
        <div className="relative z-10 px-4 pb-12 pt-24 md:px-10 md:pb-16 lg:px-16">
          <h1 className="max-w-xl opacity-0 animate-fade-in-up text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-3 max-w-md opacity-0 animate-fade-in-up text-lg text-white/95 drop-shadow-md animate-delay-1 md:text-xl">
            {t.hero.subtitle}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-zinc-900 opacity-0 animate-fade-in-up transition hover:bg-amber-400 animate-delay-2"
          >
            {t.hero.cta}
          </a>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <span className="inline-block opacity-0 animate-fade-in animate-delay-4 text-white/80">
            <svg
              className="h-8 w-8 animate-float"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </span>
        </div>
      </section>

      {/* Drinks */}
      <section
        id="drinks"
        className="scroll-mt-20 px-4 py-16 md:px-10 md:py-24 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            {t.drinks.title}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-white/70">
            {t.drinks.subtitle}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cocktails.map((cocktail, i) => (
              <article
                key={cocktail.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-amber-500/30 hover:bg-white/10"
                style={{
                  animation: "fade-in-up 0.6s ease-out forwards",
                  animationDelay: `${0.1 * i}s`,
                  opacity: 0,
                }}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={cocktail.image}
                    alt={cocktail.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-xl font-semibold text-white">
                    {cocktail.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {cocktail.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-amber-400/90">
                    {t.drinks.viewRecipe} →
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      

      {/* CTA */}
      <section
        id="contact"
        className="scroll-mt-20 px-4 py-16 md:px-10 md:py-24 lg:px-16"
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-amber-500/20 bg-linear-to-br from-amber-500/10 to-transparent p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            {t.cta.description}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-amber-500 px-10 py-4 font-semibold text-zinc-900 transition hover:bg-amber-400"
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
   
            <p className="text-sm text-white/70">{t.footer.tagline}</p>
          </div>
          <p className="text-xs text-white/50">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
