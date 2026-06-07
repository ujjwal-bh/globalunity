"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Loader2, Globe, Users } from "lucide-react";
import { useLocation } from "../provider/LocationContext";


const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    detail: "Monday to Friday, 9 AM – 6 PM",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@eduvisa.com",
    detail: "We respond within 24 hours",
    href: "mailto:info@eduvisa.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Education Consultancy Center",
    detail: "Global presence across multiple countries",
    href: "#",
  },
];

const services = [
  "University Selection",
  "Visa Guidance",
  "Application Help",
  "Career Planning",
  "Other",
];

const whyUs = [
  "Get personalized guidance from experienced consultants",
  "Learn about universities that match your profile",
  "Understand visa requirements for your target country",
  "Plan your educational journey with expert advice",
  "Connect with thousands of successful students",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function Contact() {
  const { country } = useLocation();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, country }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition";

  const labelClass = "block text-sm font-semibold text-foreground mb-1.5";

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/85 py-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -mr-64 -mt-64 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/25 w-fit">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white text-sm font-semibold">Get in Touch</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight">
                Let's Start Your{" "}
                <span className="relative">
                  <span className="text-white/90">Journey</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/40 rounded-full" />
                </span>
              </h1>

              <p className="text-lg text-white/85 mb-10 leading-relaxed max-w-lg">
                Our dedicated team is ready to guide you through every step of your educational adventure. Reach out today and let's make your dreams a reality.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Expert guidance and personalized support",
                  "Quick response to all inquiries",
                  "Free initial consultation available",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90 font-medium text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/32213218/pexels-photo-32213218.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Contact us"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3 border border-border/40">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Call Us Anytime</p>
                  <p className="font-bold text-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact info cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1 pt-16 pb-6">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Reach Out</p>
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Information</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map(({ icon: Icon, title, value, detail, href }) => (
            <a
            
              key={title}
              href={href}
              className="group p-7 rounded-2xl border border-border/60 bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-13 h-13 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{title}</p>
                <p className="font-bold text-foreground text-base mb-1">{value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Get in touch <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Form + Why us ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Form — takes 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-border/60 shadow-sm p-8 sm:p-10">
            <div className="mb-8">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Enquiry Form</p>
              <h2 className="text-3xl font-bold text-foreground mb-1">Send us a Message</h2>
              <div className="w-10 h-1 bg-primary rounded-full mt-3" />
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                  Thank you for reaching out. One of our consultants will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-1 text-sm text-primary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your study goals, target universities, or any questions..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Auto-detected country */}
                {country && (
                  <p className="text-xs text-muted-foreground -mt-1 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-primary" />
                    Detected location:{" "}
                    <span className="font-semibold text-foreground">{country}</span>
                    <span className="text-muted-foreground/60">(included automatically)</span>
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed group mt-1"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Why us — takes 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Why contact us card */}
            <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white">
              <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-5">Why Contact Us?</h3>
              <ul className="flex flex-col gap-3.5">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Free consultation card */}
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-7">
              <div className="w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-foreground text-lg mb-2">Free Initial Consultation</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Your first consultation is completely free. Let's discuss your goals and build a personalised roadmap for your education journey.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
              >
                Book now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Response time badge */}
            <div className="rounded-2xl border border-border/60 bg-white p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-green-500 text-lg">⚡</span>
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">Average Response Time</p>
                <p className="text-muted-foreground text-xs mt-0.5">We reply within <span className="text-primary font-semibold">2–4 hours</span> on business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}