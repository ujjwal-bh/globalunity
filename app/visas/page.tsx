import Link from 'next/link'
import { ArrowRight, CheckCircle, FileText, Clock } from "lucide-react";

export default function Visas() {
  const heroImage = "https://images.pexels.com/photos/32213218/pexels-photo-32213218.jpeg";

  const visaTypes = [
    {
      country: "United States",
      flag: "🇺🇸",
      icon: CheckCircle,
      details: "Student Visa (F-1) guidance and preparation",
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      icon: CheckCircle,
      details: "Student Visa (Tier 4) application support",
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      icon: CheckCircle,
      details: "Study Permit assistance and documentation",
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      icon: CheckCircle,
      details: "Student Visa (subclass 500) consultation",
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      icon: CheckCircle,
      details: "Student Residence Permit application support",
    },
    {
      country: "Other Countries",
      flag: "🌍",
      icon: CheckCircle,
      details: "Visa guidance for multiple other destinations",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-linear-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden py-20">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full -ml-36 -mb-36"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
            {/* Left side - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span className="text-white text-sm font-medium">Visa Solutions</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Visa <span className="text-secondary">Guidance</span> Made Easy
              </h1>

              <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg">
                Navigate the complexities of student visa applications with confidence. Our experts provide comprehensive support for 25+ countries worldwide.
              </p>

              <div className="space-y-4">
                {[
                  "Coverage for 25+ countries globally",
                  "Document preparation assistance",
                  "Interview coaching and tips",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                      <span className="text-secondary font-bold text-sm">✓</span>
                    </div>
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden lg:block relative">
              <img
                src={heroImage}
                alt="Visa guidance"
                className="rounded-3xl w-full h-auto shadow-2xl object-cover"
              />
              <div className="absolute inset-0 rounded-3xl bg-liear-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Countries We Cover</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Expert guidance for student visas to leading study destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {visaTypes.map((visa, index) => {
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 group bg-linear-to-br from-white to-muted/20 overflow-hidden hover:scale-105 transform"
              >
                {/* Flag display */}
                <div className="absolute top-4 right-4 text-5xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {visa.flag}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{visa.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{visa.country}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{visa.details}</p>

                <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">Expert Support</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: FileText,
              title: "Document Review",
              description: "We review and prepare all necessary visa documents",
            },
            {
              icon: Clock,
              title: "Timeline Planning",
              description: "Strategic planning to ensure timely visa submission",
            },
            {
              icon: CheckCircle,
              title: "Interview Prep",
              description: "Comprehensive preparation for visa interviews",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="p-8 rounded-xl bg-muted/50 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-linear-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Detailed Visa Information Coming Soon</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            We're preparing comprehensive information about visa requirements, processing times, and specific guidance for different countries and universities. This section will be updated with detailed checklists and requirements soon.
          </p>
          <Link
           href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors group"
          >
            Schedule Visa Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">EduVisa</h4>
              <p className="text-white/60 text-sm">Your trusted partner in global education.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/services" className="hover:text-white transition-colors">University Selection</Link></li>
                <li><Link href="/visas" className="hover:text-white transition-colors">Visa Guidance</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Career Planning</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Phone: +1 (555) 123-4567</li>
                <li>Email: info@eduvisa.com</li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Form</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-white/60 text-sm">
              © 2024 EduVisa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
