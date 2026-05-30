"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  Briefcase,
  Award,
  BookOpen,
  Star,
} from "lucide-react";

import { teamMembers } from "@/lib/teamMembers";

export default function TeamMemberPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Team Member Not Found
            </h1>

            <p className="text-muted-foreground mb-8">
              The team member you're looking for doesn't exist.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Team
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-primary font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/5 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl sticky top-24">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={800}
                  className="w-full h-96 object-cover"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h1 className="text-5xl sm:text-6xl font-bold mb-2">
                {member.name}
              </h1>

              <p className="text-2xl text-primary font-semibold mb-4">
                {member.role}
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                {member.bio}
              </p>

              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg"
              >
                <Mail className="w-5 h-5" />
                Send Message
              </a>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Experience
                    </span>
                  </div>

                  <p className="text-2xl font-bold">
                    {member.yearsOfExperience}+
                  </p>

                  <p className="text-xs text-muted-foreground">years</p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-sm text-muted-foreground">
                      Certifications
                    </span>
                  </div>

                  <p className="text-2xl font-bold">
                    {member.certifications.length}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    credentials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-primary rounded-full" />
          Professional Background
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl">
          {member.fullDescription}
        </p>
      </section>

      {/* Expertise */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Star className="w-7 h-7 text-primary" />
          Areas of Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {member.specializations.map((spec) => (
            <div
              key={spec}
              className="p-6 rounded-xl border bg-gradient-to-br from-primary/5 to-secondary/5"
            >
              {spec}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <BookOpen className="w-7 h-7 text-primary" />
          Education
        </h2>

        <div className="space-y-4">
          {member.education.map((edu) => (
            <div key={edu} className="p-6 border rounded-xl">
              {edu}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Award className="w-7 h-7 text-primary" />
          Certifications & Credentials
        </h2>

        <div className="space-y-4">
          {member.certifications.map((cert) => (
            <div
              key={cert}
              className="p-6 rounded-xl border border-primary/20"
            >
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Related Members */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">
          Meet Other Team Members
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers
            .filter((m) => m.id !== member.id)
            .slice(0, 3)
            .map((teamMember) => (
              <Link
                key={teamMember.id}
                href={`/team/${teamMember.id}`}
                className="group text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={teamMember.image}
                    alt={teamMember.name}
                    width={500}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold mb-1">
                  {teamMember.name}
                </h3>

                <p className="text-primary font-semibold mb-2">
                  {teamMember.role}
                </p>

                <p className="text-muted-foreground text-sm">
                  {teamMember.bio}
                </p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}