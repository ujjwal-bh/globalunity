"use client";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Star,
  Users,
  Globe,
  BookOpen,
  Award,
  Phone,
  Mail,
} from "lucide-react";
import { getData } from "@/lib/getData";


// ─── Page ────────────────────────────────────────────────────────────────────
export default async function ServiceDetail( ) {
    const params = useParams();
    const servicesList = getData().services;
  const service = servicesList.find((s) => s.id === params.id);
  if (!service) notFound();

  const Icon = service.icon;
  const otherServices = servicesList.filter((s) => s.id !== service.id);

  return (
    <main className="min-h-screen bg-[#f8f7f4]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          {/* Back link */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-10 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6`}>
                <Icon className="w-3.5 h-3.5 text-secondary" />
                <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">
                  {service.tagline}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                {service.title}
              </h1>

              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                {service.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-4 py-2">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-white text-sm font-semibold">{service.rating}</span>
                  <span className="text-white/50 text-sm">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-4 py-2">
                  <Clock className="w-3.5 h-3.5 text-white/60" />
                  <span className="text-white/80 text-sm">{service.duration}</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* What's included */}
            <div className="bg-white rounded-2xl border border-border/60 p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">What's Included</h2>
              <div className={`${service.accentLight} ${service.accentBorder} border rounded-xl p-6`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${service.accentText} shrink-0`} />
                      <span className="text-sm text-foreground/80 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl border border-border/60 p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Our Process</h2>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-px bg-border/60" />
                <div className="space-y-8">
                  {service.steps.map((step, i) => (
                    <div key={i} className="flex gap-6 relative">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.accent} flex items-center justify-center text-white text-sm font-bold shrink-0 z-10 shadow-md`}
                      >
                        {i + 1}
                      </div>
                      <div className="pt-1.5 pb-2">
                        <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl border border-border/60 p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-border/50 last:border-0 pb-5 last:pb-0">
                    <p className="font-semibold text-foreground mb-2">{faq.q}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: sticky sidebar */}
          <div className="space-y-6">

            {/* CTA card */}
            <div className="bg-white rounded-2xl border border-border/60 p-7 sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Interested in this service?
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Book a free 30-minute consultation with one of our experts and get personalised advice.
              </p>
              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r ${service.accent} text-white py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 hover:shadow-lg transition-all group mb-4`}
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <div className="flex flex-col gap-3 pt-2">
                <a href="tel:+15551234567" className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-3.5 h-3.5" /> +1 (555) 123-4567
                </a>
                <a href="mailto:info@eduvisa.com" className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-3.5 h-3.5" /> info@eduvisa.com
                </a>
              </div>
            </div>

            {/* Rating card */}
            <div className="bg-white rounded-2xl border border-border/60 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-foreground">{service.rating}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Based on <span className="font-semibold text-foreground">{service.reviews}</span> verified student reviews
              </p>
            </div>
          </div>
        </div>

        {/* ── Other services ── */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Explore Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="group bg-white rounded-2xl border border-border/60 hover:border-primary/20 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute top-3 left-3 w-8 h-8 bg-gradient-to-br ${s.accent} rounded-lg flex items-center justify-center`}>
                      <SIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{s.description}</p>
                    <span className={`inline-flex items-center gap-1 mt-3 text-xs font-semibold ${s.accentText}`}>
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>


    </main>
  );
}
