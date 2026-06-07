import Link from 'next/link'
import { ArrowRight, Users, Target, Heart, MapPin, Award, Star } from "lucide-react";
import { teamMembers } from "@/lib/teamMembers";

export default function About() {
  const heroImage = "https://images.pexels.com/photos/32213218/pexels-photo-32213218.jpeg";

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide world-class education consultancy services that guide students through their international education journey with excellence and integrity.",
      accent: "from-blue-500/10 to-blue-600/5",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
      border: "hover:border-blue-200",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "We believe in transparency, personalized guidance, and putting our students' success at the center of everything we do.",
      accent: "from-rose-500/10 to-rose-600/5",
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-600",
      border: "hover:border-rose-200",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "Our experienced consultants have helped thousands of students achieve their dreams at top universities around the world.",
      accent: "from-emerald-500/10 to-emerald-600/5",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
      border: "hover:border-emerald-200",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f7f4]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-primary">
        {/* Geometric background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-150 h-150 rounded-full bg-white/5" />
          <div className="absolute top-1/2 -right-16 w-64 h-64 rounded-full bg-secondary/10" />
          <div className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full bg-white/[0.03]" />
          {/* Diagonal stripe texture */}
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
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">
                  About Global Unity
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Your Global{" "}
                <span className="relative inline-block">
                  <span className="text-secondary">Education</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary/40 rounded-full" />
                </span>
                <br />
                Partner
              </h1>

              <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
                With decades of combined expertise, we've helped thousands of
                students achieve their dreams at world-class universities across
                the globe.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Expert Counselling", "Visa Support", "University Placement"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/10 border border-white/15 rounded-full text-white/80 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Image with floating stats card */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src={heroImage}
                  alt="About Global Unity"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-black/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground leading-none mb-1">
                    98%
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    Admission Success Rate
                  </p>
                </div>
              </div>
              {/* Floating secondary badge */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-2xl font-bold leading-none">5K+</p>
                <p className="text-xs opacity-80 font-medium">Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Mission / Values / Team cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Empowering Global Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering students to achieve their educational dreams, one journey
            at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border border-border/60 ${item.border} p-8 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 overflow-hidden`}
              >
                {/* Background gradient blob */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${item.accent} rounded-full -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className={`relative w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>

                <h3 className="relative text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Team section ── */}
      <section className="bg-white border-y border-border/60 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                The People Behind It
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                Meet Our Expert Team
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Seasoned consultants who have walked this path themselves and now
              guide others through it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="group relative bg-[#f8f7f4] rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-400"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold">
                      View Profile
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  {/* Index number badge */}
                  <div className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {member.bio}
                  </p>

                  {/* Star rating or speciality tag */}
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        className="w-3 h-3 fill-secondary text-secondary"
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">Expert</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative bg-primary rounded-3xl overflow-hidden p-12 md:p-16 text-white text-center">
          {/* Decorative */}
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
              Start Today
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Our expert team is dedicated to helping you achieve your
              educational goals. Schedule a free consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white text-primary px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/90 hover:shadow-xl hover:shadow-black/20 transition-all duration-200 group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

     
    </main>
  );
}
