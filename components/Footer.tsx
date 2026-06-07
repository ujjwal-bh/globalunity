"use client";
import { Globe, Phone,Mail } from "lucide-react";
import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-white pt-16 pb-8 mt-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" /> Global Unity
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">Your trusted partner in global education and international student success.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-3 text-sm">
                {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-white/60 hover:text-white transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Services</h4>
              <ul className="space-y-3 text-sm">
                {["University Selection", "Application Support", "Visa Guidance", "Career Planning"].map((s) => (
                  <li key={s}>
                    <Link href="/services" className="text-white/60 hover:text-white transition-colors">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Contact</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-primary shrink-0" /> +1 (555) 123-4567</li>
                <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-primary shrink-0" /> admin@globalunityeducation.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-sm">© 2026 Global Unity Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
};