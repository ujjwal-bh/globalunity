"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  User,
  Mail,
  Phone,
  GraduationCap,
  BookOpen,
  Globe,
  FileText,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { useLocation } from "../provider/LocationContext";

const academicOptions = [
  "SEE / SLC",
  "+2 / A-Levels / Equivalent",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD / Doctorate",
  "Diploma / Certificate",
  "Other",
];

const testScoreOptions = [
  "Not Given / Planning to Take",
  "IELTS",
  "PTE Academic",
  "TOEFL iBT",
];

const countryOptions = [
  "Australia",
  "Canada",
  "United Kingdom",
  "United States",
  "New Zealand",
  "Germany",
  "Japan",
  "South Korea",
  "Singapore",
  "Ireland",
  "Netherlands",
  "Other",
];

type FormData = {
  name: string;
  email: string;
  mobile: string;
  qualification: string;
  testType: string;
  testScore: string;
  purpose: string;
  preferredCountry: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function NepalFormsPage() {
     const { country } = useLocation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    testType: "",
    testScore: "",
    purpose: "",
    preferredCountry: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\+?[\d\s\-]{7,15}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid mobile number";
    }
    if (!formData.qualification) newErrors.qualification = "Please select your qualification";
    if (!formData.testType) newErrors.testType = "Please select your test status";
    const testGiven = formData.testType && formData.testType !== "Not Given / Planning to Take";
    if (testGiven && !formData.testScore.trim()) newErrors.testScore = `Please enter your ${formData.testType} score`;
    if (!formData.purpose.trim()) newErrors.purpose = "Please tell us your purpose";
    if (!formData.preferredCountry) newErrors.preferredCountry = "Please select a preferred country";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const showScoreInput =
    formData.testType && formData.testType !== "Not Given / Planning to Take";

  if (submitted) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Form Received!
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. Our team will review your details and get in touch with you at{" "}
            <span className="font-semibold text-foreground">{formData.email}</span> shortly.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 group shadow-lg"
          >
            Back to Home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden py-16 sm:py-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full -ml-36 -mb-36 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-semibold">Nepal Applicants</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Get in Touch With Us
          </h1>
          <p className="text-white/85 text-lg max-w-xl mx-auto leading-relaxed">
            Fill in your details below and our expert counsellors will reach out to guide you on your path to global education.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-white border border-border/60 rounded-3xl shadow-xl p-8 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-primary" />
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sita Rai"
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary ${errors.name ? "border-red-400 bg-red-50/30" : "border-border/60 hover:border-primary/40"}`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-0.5">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" />
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. sita@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary ${errors.email ? "border-red-400 bg-red-50/30" : "border-border/60 hover:border-primary/40"}`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-0.5">{errors.email}</p>}
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-primary" />
                Mobile Number <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="e.g. +977 98XXXXXXXX"
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary ${errors.mobile ? "border-red-400 bg-red-50/30" : "border-border/60 hover:border-primary/40"}`}
              />
              {errors.mobile && <p className="text-xs text-red-500 mt-0.5">{errors.mobile}</p>}
            </div>

            {/* Academic Qualification */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                Academic Qualification <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-foreground outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none pr-10 ${!formData.qualification ? "text-muted-foreground/60" : ""} ${errors.qualification ? "border-red-400 bg-red-50/30" : "border-border/60 hover:border-primary/40"}`}
                >
                  <option value="" disabled>Select qualification</option>
                  {academicOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              {errors.qualification && <p className="text-xs text-red-500 mt-0.5">{errors.qualification}</p>}
            </div>

            {/* Test Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-primary" />
                English Proficiency Test <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <select
                  name="testType"
                  value={formData.testType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-foreground outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none pr-10 ${!formData.testType ? "text-muted-foreground/60" : ""} ${errors.testType ? "border-red-400 bg-red-50/30" : "border-border/60 hover:border-primary/40"}`}
                >
                  <option value="" disabled>Select test / status</option>
                  {testScoreOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              {errors.testType && <p className="text-xs text-red-500 mt-0.5">{errors.testType}</p>}
            </div>

            {/* Test Score — conditionally shown */}
            {showScoreInput && (
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-secondary" />
                  {formData.testType} Score <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="testScore"
                  value={formData.testScore}
                  onChange={handleChange}
                  placeholder={
                    formData.testType === "IELTS"
                      ? "e.g. 6.5"
                      : formData.testType === "PTE Academic"
                      ? "e.g. 58"
                      : "e.g. 85"
                  }
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary ${errors.testScore ? "border-red-400 bg-red-50/30" : "border-border/60 hover:border-secondary/40"}`}
                />
                {errors.testScore && <p className="text-xs text-red-500 mt-0.5">{errors.testScore}</p>}
              </div>
            )}

            {/* Preferred Country */}
            <div className={`flex flex-col gap-1.5 ${showScoreInput ? "" : "sm:col-span-1"}`}>
              <label className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-primary" />
                Preferred Country <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <select
                  name="preferredCountry"
                  value={formData.preferredCountry}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-foreground outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none pr-10 ${!formData.preferredCountry ? "text-muted-foreground/60" : ""} ${errors.preferredCountry ? "border-red-400 bg-red-50/30" : "border-border/60 hover:border-primary/40"}`}
                >
                  <option value="" disabled>Select country</option>
                  {countryOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              {errors.preferredCountry && <p className="text-xs text-red-500 mt-0.5">{errors.preferredCountry}</p>}
            </div>

            {/* Purpose — full width */}
            <div className="sm:col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-primary" />
                Purpose of Study Abroad <span className="text-primary">*</span>
              </label>
              <textarea
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your study goals, intended course, career aspirations, or anything you'd like us to know..."
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none ${errors.purpose ? "border-red-400 bg-red-50/30" : "border-border/60 hover:border-primary/40"}`}
              />
              {errors.purpose && <p className="text-xs text-red-500 mt-0.5">{errors.purpose}</p>}
            </div>
          </div>

          

          {/* Divider */}
          <div className="border-t border-border/40 mt-8 pt-7 flex flex-col sm:flex-row  items-center justify-between gap-4">
            <div >
                  {/* Auto-detected country */}
                {country && (
                  <p className="text-xs text-muted-foreground my-2 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-primary" />
                    Detected location:{" "}
                    <span className="font-semibold text-foreground">{country}</span>
                    <span className="text-muted-foreground/60">(included automatically)</span>
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
              <span className="text-primary font-semibold">*</span> Required fields. Your information is kept strictly confidential.
            </p>
               
            </div>
            

            
              
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
          
        </div>
         
      </section>
    </main>
  );
}
