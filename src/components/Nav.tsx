"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Nav() {
  const { language, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navLinks = [
    { id: "projects", label: t.nav.projects },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-lg tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
        >
          juraj<span className="text-zinc-400">.digital</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="text-xs font-mono font-medium text-zinc-400 hover:text-zinc-900 transition-colors border border-zinc-200 rounded-lg px-3 py-1.5 hover:border-zinc-300"
          >
            {language === "sk" ? "EN" : "SK"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="text-xs font-mono font-medium text-zinc-400 border border-zinc-200 rounded-lg px-2.5 py-1.5"
          >
            {language === "sk" ? "EN" : "SK"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-11 h-11 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-base text-zinc-700 hover:text-zinc-900 py-3 border-b border-zinc-100 last:border-0"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
