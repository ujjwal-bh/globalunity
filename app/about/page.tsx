import Link from 'next/link'
import { ArrowRight, Users, Target, Heart } from "lucide-react";
import { teamMembers } from "@/lib/teamMembers";

export default function About() {
  const heroImage = "https://images.pexels.com/photos/32213218/pexels-photo-32213218.jpeg";

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
                <span className="text-white text-sm font-medium">About Us</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Your Global Education <span className="text-secondary">Partner</span>
              </h1>

              <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg">
                With decades of combined expertise, we've helped thousands of students achieve their dreams at world-class universities across the globe.
              </p>

              <div className="space-y-4">
                {[
                  "5,000+ students successfully guided",
                  "150+ partner universities worldwide",
                  "98% success rate in admissions",
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
                alt="About Global Unity"
                className="rounded-3xl w-full h-auto shadow-2xl object-cover"
              />
              <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Empowering Global Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering students to achieve their educational dreams globally
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To provide world-class education consultancy services that guide students through their international education journey with excellence and integrity.",
            },
            {
              icon: Heart,
              title: "Our Values",
              description: "We believe in transparency, personalized guidance, and putting our students' success at the center of everything we do.",
            },
            {
              icon: Users,
              title: "Our Team",
              description: "Our experienced consultants have helped thousands of students achieve their dreams at top universities around the world.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-border hover:border-primary/30 bg-muted/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16 text-center">
            Meet Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="inline-flex items-center gap-2 text-primary group-hover:text-primary/80 transition-colors">
                  {/* <Linkedin className="w-4 h-4" /> */}
                  <span className="text-sm font-medium">View Profile</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-linear-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our expert team is dedicated to helping you achieve your educational goals. Schedule a consultation with any of our specialists today!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors group"
          >
            Get in Touch
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
