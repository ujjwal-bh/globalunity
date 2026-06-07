import Link from 'next/link'
import { ArrowRight, Globe, BookOpen, Award, Users, CheckCircle2, Clock, Star } from "lucide-react";
import { getData } from '@/lib/getData';


export default function Services() {
  const servicesList = getData().services;
  return (
    <main className="min-h-screen bg-[#f8f7f4]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-white/5" />
          <div className="absolute top-1/2 -right-16 w-64 h-64 rounded-full bg-secondary/10" />
          <div className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full bg-white/[0.03]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">
                  Our Services
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Comprehensive{" "}
                <span className="relative inline-block">
                  <span className="text-secondary">Education</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary/40 rounded-full" />
                </span>
                <br />
                Support
              </h1>

              <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
                From university selection to visa approval, we provide
                end-to-end support tailored to your specific educational needs
                and aspirations.
              </p>

              <div className="flex flex-wrap gap-3">
                {["University Selection", "Visa Support", "Career Planning", "Application Help"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/10 border border-white/15 rounded-full text-white/80 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: stacked service thumbnails */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {servicesList.map((s) => (
                <div
                  key={s.id}
                  className="relative rounded-2xl overflow-hidden h-36 shadow-lg"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                    {s.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>    

      {/* ── Service Cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Services Built for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert guidance tailored to every step of your international
            education journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-white rounded-2xl border border-border/60 hover:border-primary/20 overflow-hidden hover:shadow-2xl hover:shadow-black/5 transition-all duration-400 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Icon badge */}
                  <div className={`absolute top-4 left-4 w-10 h-10 bg-gradient-to-br ${service.accent} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Rating */}
                  {/* <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-foreground">{service.rating}</span>
                  </div> */}

                  {/* Duration pill on image bottom */}
                  {/* <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                    <Clock className="w-3 h-3 text-white/80" />
                    <span className="text-xs text-white/90 font-medium">{service.duration}</span>
                  </div> */}
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-widest ${service.accentText} mb-2`}>
                    {service.tagline}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className={`${service.accentLight} ${service.accentBorder} border rounded-xl p-4 mb-6`}>
                    <div className="grid grid-cols-2 gap-2">
                      {service.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${service.accentText} shrink-0`} />
                          <span className="text-xs text-foreground/70 font-medium">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className={`text-sm font-semibold ${service.accentText} flex items-center gap-1.5 group-hover:gap-2.5 transition-all`}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="text-xs text-muted-foreground border border-border/60 rounded-full px-3 py-1">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-white border-y border-border/60 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Why Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Why Choose Our Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Guidance",
                desc: "Years of experience in international education consulting with proven results.",
                emoji: "🎓",
              },
              {
                title: "Personalized Approach",
                desc: "No two students are the same. Every plan is crafted uniquely for you.",
                emoji: "🎯",
              },
              {
                title: "Proven Success",
                desc: "98% of our students get admitted to their top-choice universities.",
                emoji: "🏆",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl border border-border/60 hover:border-primary/20 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 bg-[#f8f7f4]"
              >
                <div className="text-4xl mb-5">{item.emoji}</div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
              backgroundImage:
                "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
              Get Started
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">
              Ready to Begin?
            </h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Talk to one of our experts today and find the right service for
              your journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white text-primary px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/90 hover:shadow-xl hover:shadow-black/20 transition-all duration-200 group"
            >
              Inquire About Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
