"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { getData } from "@/lib/getData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Visas", href: "/visas" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const data = getData();

  // Elevate header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Top announcement bar ── */}
      <div className="hidden sm:block bg-primary text-white text-xs py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-90">
              <Phone className="w-3 h-3" /> +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-1.5 opacity-90">
              <Mail className="w-3 h-3" /> admin@globalunityeducation.com
            </span>
          </div>
          <span className="opacity-80 tracking-wide">
            🌍 Providing visa services for 10+ countries.
          </span>
        </div>
      </div>

      {/* ── Main header ── */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-border/40"
            : "border-b border-border/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F53e00747c4a44cf0b217fc7d7ad2497c%2F8fd7c48b062e475781cf484c21e9f095?format=webp&width=800&height=1200"
                alt="Global Unity Logo"
                className="h-11 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-semibold font-medium rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {/* Active underline */}
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                        isActive
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 group"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="md:hidden z-100 flex items-center justify-center w-10 h-10 rounded-xl hover:bg-muted transition-colors bg-primary/50"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer backdrop ──
           FIX: Conditionally rendered instead of opacity toggle.
           backdrop-blur combined with pointer-events:none can still capture
           touch events on real mobile browsers (Safari/Chrome on iOS & Android),
           so we mount/unmount it entirely instead. ── */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
          aria-hidden="true"
        />
      )}

      {/* ── Mobile drawer panel ── */}
      <div
        className={`fixed top-0 left-0 z-[70] h-full w-[90%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F53e00747c4a44cf0b217fc7d7ad2497c%2F8fd7c48b062e475781cf484c21e9f095?format=webp&width=800&height=1200"
              alt="Global Unity Logo"
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Drawer footer */}
        <div className="px-4 pb-8 pt-4 border-t border-border/60 flex flex-col gap-3">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <div className="flex flex-col gap-2 pt-2">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-primary transition-colors px-1"
            >
              <Phone className="w-3.5 h-3.5" /> +1 (555) 123-4567
            </a>
            <a
              href="mailto:info@eduvisa.com"
              className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-primary transition-colors px-1"
            >
              <Mail className="w-3.5 h-3.5" /> info@eduvisa.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
