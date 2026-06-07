import Link from 'next/link'
import { ArrowRight, FileText, Clock, CheckCircle, Shield, TrendingUp, ArrowUpRight } from "lucide-react";

const visaTypes = [
  {
    country: "United States",
    flagImg: "https://flagcdn.com/w320/us.png",
    visaCode: "F-1",
    visaName: "Student Visa",
    details: "Covers universities, colleges, and language programs across all 50 states.",
    processingTime: "3–5 weeks",
    successRate: "97%",
    difficulty: "Medium",
    difficultyColor: "text-amber-600 bg-amber-50",
    highlights: ["OPT work rights", "STEM extension eligible", "No tuition cap"],
  },
  {
    country: "United Kingdom",
    flagImg: "https://flagcdn.com/w320/gb.png",
    visaCode: "Student",
    visaName: "Student Visa",
    details: "Covering undergraduate, postgraduate, and foundation programs at UK institutions.",
    processingTime: "3 weeks",
    successRate: "96%",
    difficulty: "Medium",
    difficultyColor: "text-amber-600 bg-amber-50",
    highlights: ["20 hrs/week work rights", "Graduate visa route", "NHS healthcare"],
  },
  {
    country: "Canada",
    flagImg: "https://flagcdn.com/w320/ca.png",
    visaCode: "SDS",
    visaName: "Study Permit",
    details: "Fast-track Student Direct Stream processing for eligible applicants.",
    processingTime: "2–4 weeks",
    successRate: "95%",
    difficulty: "Easy",
    difficultyColor: "text-emerald-600 bg-emerald-50",
    highlights: ["PR pathway available", "Co-op programs allowed", "Work while studying"],
  },
  {
    country: "Australia",
    flagImg: "https://flagcdn.com/w320/au.png",
    visaCode: "500",
    visaName: "Student Visa",
    details: "Full-time study at any registered Australian education provider.",
    processingTime: "4–6 weeks",
    successRate: "94%",
    difficulty: "Easy",
    difficultyColor: "text-emerald-600 bg-emerald-50",
    highlights: ["48 hrs/fortnight work", "Post-study work visa", "Dependents allowed"],
  },
  {
    country: "Germany",
    flagImg: "https://flagcdn.com/w320/de.png",
    visaCode: "§16b",
    visaName: "Student Residence Permit",
    details: "Access to world-class, largely tuition-free public universities.",
    processingTime: "6–8 weeks",
    successRate: "92%",
    difficulty: "Hard",
    difficultyColor: "text-rose-600 bg-rose-50",
    highlights: ["Free tuition available", "20 hrs/week work rights", "EU mobility"],
  },
  {
    country: "Other Countries",
    flagImg: "https://flagcdn.com/w320/un.png",
    visaCode: "25+",
    visaName: "Global Coverage",
    details: "New Zealand, Ireland, Netherlands, Singapore, Japan, France and more.",
    processingTime: "Varies",
    successRate: "93%",
    difficulty: "Varies",
    difficultyColor: "text-violet-600 bg-violet-50",
    highlights: ["New Zealand & Ireland", "Singapore & Japan", "Netherlands & France"],
  },
];

const process = [
  {
    icon: FileText,
    step: "01",
    title: "Document Review",
    description: "We audit every document — financial statements, transcripts, language scores — and flag anything that could cause delays.",
  },
  {
    icon: Clock,
    step: "02",
    title: "Timeline Planning",
    description: "We map your application deadline, processing time, and travel window into a clear, stress-free calendar.",
  },
  {
    icon: Shield,
    step: "03",
    title: "Interview Coaching",
    description: "Real embassy-style mock interviews with personalised feedback until you walk in with complete confidence.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Appeal Support",
    description: "In the rare case of a refusal, we prepare a strong appeal or full reapplication at no additional cost.",
  },
];

export default function Visas() {
  return (
    <main className="min-h-screen bg-[#f8f7f4]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-white/5" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
              <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">
                Visa Solutions
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Visa Guidance
              <br />
              <span className="text-secondary">Made Simple</span>
            </h1>

            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Navigate student visa applications with confidence. Expert support
              for 25+ countries with a 95%+ approval rate across all destinations.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors group"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-white border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/60">
            {[
              { value: "25+", label: "Countries Covered" },
              { value: "95%+", label: "Approval Rate" },
              { value: "3,200+", label: "Visas Processed" },
              { value: "48hr", label: "Response Time" },
            ].map((stat) => (
              <div key={stat.label} className="py-10 px-8 text-center">
                <p className="text-4xl font-bold text-primary mb-1 tracking-tight">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Country Cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Destinations</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Countries We Cover
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            Comprehensive visa guidance for the world's top study destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visaTypes.map((visa) => (
            <div
              key={visa.country}
              className="group bg-white rounded-2xl border border-border/60 hover:border-primary/20 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 overflow-hidden"
            >
              {/* Flag image */}
              <div className="relative h-44 overflow-hidden bg-muted">
                <img
                  src={visa.flagImg}
                  alt={`${visa.country} flag`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                {/* Visa code — top right */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1">
                  <span className="text-xs font-bold text-foreground font-mono">{visa.visaCode}</span>
                </div>

                {/* Processing time — bottom left */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <Clock className="w-3 h-3 text-white/80" />
                  <span className="text-white text-xs font-medium">{visa.processingTime}</span>
                </div>

                {/* Success rate — bottom right */}
                <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <span className="text-white text-xs font-semibold">{visa.successRate} approved</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {visa.country}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">{visa.visaName}</p>
                  </div>
                  <span className={`text-xs font-semibold rounded-full px-2.5 py-1 ${visa.difficultyColor}`}>
                    {visa.difficulty}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {visa.details}
                </p>

                <div className="space-y-2 mb-5">
                  {visa.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="text-xs text-foreground/70 font-medium">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Link
                    href="/contact"
                    className="flex items-center justify-between text-sm font-semibold text-primary hover:text-primary/70 transition-colors group/link"
                  >
                    <span>Get visa guidance</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white border-y border-border/60 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                Our Process
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              A clear, structured approach that takes you from application to approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-[#f8f7f4] rounded-2xl border border-border/60 hover:border-primary/20 p-7 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 bg-primary/8 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-3xl font-black text-foreground/[0.07] select-none leading-none">{item.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative bg-primary rounded-3xl overflow-hidden p-12 md:p-16 text-white text-center">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-secondary/10 rounded-full -mr-10 -mb-10 pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">Free Consultation</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Ready to Apply?</h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Book a free 30-minute visa consultation. We'll assess your profile,
              recommend the best strategy, and walk you through every step.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white text-primary px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/90 hover:shadow-xl hover:shadow-black/20 transition-all duration-200 group"
            >
              Schedule Visa Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-foreground text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div>
              <h4 className="font-bold text-lg mb-3">EduVisa</h4>
              <p className="text-white/50 text-sm leading-relaxed">Your trusted partner in global education.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white/80 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white/80 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li><Link href="/services/university-selection" className="hover:text-white transition-colors">University Selection</Link></li>
                <li><Link href="/visas" className="hover:text-white transition-colors">Visa Guidance</Link></li>
                <li><Link href="/services/career-planning" className="hover:text-white transition-colors">Career Planning</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white/80 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li>+1 (555) 123-4567</li>
                <li>info@eduvisa.com</li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Form</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-white/30 text-sm">© 2024 EduVisa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
