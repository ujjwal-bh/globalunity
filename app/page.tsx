"use client"
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Users,
  Zap,
  BookOpen,
  Award,
  Lightbulb,
  Star,
  Phone,
  Mail,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { useLocation } from "./provider/LocationContext";

export default function Home() {
  const {country, city, status} = useLocation();
  console.log(country, city, status, "country city")
  const services = [
    {
      icon: Globe,
      title: "University Selection",
      description:
        "Find the perfect university match based on your goals, budget, and academic profile.",
    },
    {
      icon: BookOpen,
      title: "Application Support",
      description:
        "Expert guidance through the entire application process with personalized assistance.",
    },
    {
      icon: Award,
      title: "Visa Consultation",
      description:
        "Navigate visa requirements and documentation with our experienced consultants.",
    },
    {
      icon: Users,
      title: "Career Guidance",
      description:
        "Post-study career planning and placement assistance in your desired field.",
    },
  ];

  const stats = [
    { number: "5,000+", label: "Students Placed" },
    { number: "150+", label: "Partner Universities" },
    { number: "98%", label: "Success Rate" },
    { number: "25+", label: "Countries" },
  ];

  if (status === 'loading') return <div>Loading</div>

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full h-[700px] sm:h-[750px] lg:h-screen min-h-[600px] max-h-[900px]">
        {/* === CAROUSEL BACKGROUND === */}
        <HeroCarousel />

        {/* === GRADIENT OVERLAY === */}
        <div className="absolute inset-0 z-10 bg-linear-to-r from-black/70 via-black/45 to-black/20 pointer-events-none" />

        {/* === CONTENT (overlaid on top) === */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6 w-fit border border-white/30">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-white text-sm font-semibold">
              Your Success is Our Mission
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl drop-shadow-lg">
            Your Gateway to <span className="text-primary">Global</span>{" "}
            Education
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-white/85 mb-8 leading-relaxed max-w-lg">
            Expert guidance to help you achieve your dreams at world-class
            universities. From applications to visas, we're with you every step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/services"
              className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/70 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/15 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-sm"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats */}
          {/* <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-8 border-t border-white/20">
            {[
              { num: "5K+", label: "Students Placed" },
              { num: "150+", label: "Universities" },
              { num: "98%", label: "Success Rate" },
              { num: "25+", label: "Countries" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  {s.num}
                </p>
                <p className="text-xs sm:text-sm text-white/70 uppercase tracking-wider mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column with floating accent card */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-[4/5] max-h-[560px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/32213218/pexels-photo-32213218.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="EduVisa team collaborating"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-6 py-5 border border-border/40">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Years of Excellence
              </p>
            </div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
          </div>

          {/* Text column */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
                About Us
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-5">
                Who We Are
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full mb-6" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              EduVisa is immensely proud to have a team of dedicated education
              professionals from diverse walks of life. Our team has rich and
              global experience in consulting, education, training and
              development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in making a positive impact through accessible and
              quality education to all students globally. Our professional and
              talented team offers balanced quality services than most of its
              competitors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                {
                  icon: Lightbulb,
                  color: "primary",
                  title: "Experience",
                  desc: "Decades of cumulative experience in international education",
                },
                {
                  icon: Users,
                  color: "secondary",
                  title: "Support",
                  desc: "We support you through your entire educational journey",
                },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/40 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}
                  >
                    <Icon
                      className={`w-5 h-5 ${color === "primary" ? "text-primary" : "text-secondary"}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-2 w-fit"
            >
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/20 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
              Our Advantages
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Why Choose EduVisa?
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-5" />
            <p className="text-lg text-muted-foreground">
              We combine expertise, dedication, and innovation to ensure your
              success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: Lightbulb,
                title: "Expert Consultants",
                description:
                  "Our experienced team brings decades of combined expertise in international education and student placements.",
                color: "primary",
              },
              {
                icon: Zap,
                title: "Fast & Efficient",
                description:
                  "Streamlined processes ensure timely support and quick turnaround on your applications and documents.",
                color: "secondary",
              },
              {
                icon: Globe,
                title: "Global Network",
                description:
                  "Connected with 150+ universities and institutions across 25+ countries worldwide.",
                color: "primary",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const isPrimary = item.color === "primary";
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col gap-5"
                >
                  <div
                    className={`w-13 h-13 w-14 h-14 rounded-2xl flex items-center justify-center ${isPrimary ? "bg-primary/10" : "bg-secondary/10"} group-hover:scale-105 transition-transform`}
                  >
                    <Icon
                      className={`w-6 h-6 ${isPrimary ? "text-primary" : "text-secondary"}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className={`mt-auto h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full ${isPrimary ? "bg-primary/40" : "bg-secondary/40"}`}
                  />
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-secondary" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10 sm:p-14">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Begin?
                </h3>
                <p className="text-white/85 leading-relaxed mb-8 max-w-md">
                  Join thousands of successful students who have achieved their
                  dreams with our expert guidance.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3 rounded-xl font-bold hover:bg-white/90 transition-colors group shadow-lg"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="hidden lg:flex flex-col gap-3">
                {[
                  "5,000+ Students Successfully Placed",
                  "98% Success Rate in Admissions",
                  "24/7 Expert Support Available",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3.5 border border-white/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-white shrink-0" />
                    <span className="text-white font-medium text-sm">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 rounded-2xl overflow-hidden shadow-sm">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white text-center px-6 py-10 flex flex-col items-center gap-1"
              >
                <p className="text-4xl sm:text-5xl font-bold text-primary">
                  {stat.number}
                </p>
                <div className="w-8 h-0.5 bg-primary/30 rounded-full my-2" />
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
              Comprehensive Solutions
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-5" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Complete educational consulting from university selection through
              successful enrollment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isPrimary = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`group relative p-7 rounded-2xl bg-white border border-border/60 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col gap-4`}
                >
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 ${isPrimary ? "bg-primary" : "bg-secondary"} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />

                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${isPrimary ? "bg-primary/10" : "bg-secondary/10"} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className={`w-7 h-7 ${isPrimary ? "text-primary" : "text-secondary"}`}
                    />
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div
                    className={`flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1 ${isPrimary ? "text-primary" : "text-secondary"}`}
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <TestimonialsCarousel/>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-primary to-primary/90 relative overflow-hidden py-24">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full -ml-36 -mb-36 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Don't let distance be a barrier to your dreams. Take the first step
            today and schedule your free consultation with our expert advisors.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-white/95 transition-all duration-300 group shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg"
          >
            Schedule Free Consultation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-b from-foreground to-foreground/95 text-white pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-secondary" />
                Global Unity
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Your trusted partner in global education and international
                student success.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-white/60 hover:text-white transition-colors font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/60 hover:text-white transition-colors font-medium"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-white transition-colors font-medium"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/60 hover:text-white transition-colors font-medium"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-white transition-colors font-medium"
                  >
                    University Selection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-white transition-colors font-medium"
                  >
                    Application Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/visas"
                    className="text-white/60 hover:text-white transition-colors font-medium"
                  >
                    Visa Guidance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-white transition-colors font-medium"
                  >
                    Career Planning
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Get in Touch</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  <span>info@eduvisa.com</span>
                </li>
                <li className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-secondary/20 hover:bg-secondary/30 text-secondary px-4 py-2 rounded-lg transition-colors font-semibold text-sm"
                  >
                    Contact Us
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-white/60 text-sm">
                © 2024 Global Unity Education. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-white/60 text-sm font-medium">
                  Follow Us
                </span>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                  >
                    <span className="text-white text-sm font-bold">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                  >
                    <span className="text-white text-sm font-bold">in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
