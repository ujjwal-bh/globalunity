import { Globe, BookOpen, Award, Users } from "lucide-react";
export const baseData = {
  name: "Global Unity Education",
  tagline: "Your Success, Our Commitment!",
  description: "Your trusted partner for international education and visa services.",
  aboutus: [
    "At Global Unity Education, we are passionate about empowering students to achieve their dreams of studying abroad. With over a decade of experience, we have successfully guided thousands of students through the complex process of university applications and visa approvals.",
    "Our mission is to bridge the gap between students and their global aspirations. We understand that every student is unique, which is why we offer tailored services that cater to individual needs and goals. Whether you're looking to study abroad, we have the expertise and resources to help you succeed. Join us on your journey to global education and let us help you turn your dreams into reality."
  ],
  contact: {
    phone: "+1 (555) 123-4567",
    email: ""
  },
  social: {
    facebook: "https://www.facebook.com/globalunityeducation",
    twitter: "https://twitter.com/globalunityedu",
    linkedin: "https://www.linkedin.com/company/global-unity-education"
  },
  services: [
    {
      id: "university-selection",
      icon: Globe,
      title: "University Selection",
      tagline: "Find your perfect academic home",
      description:
        "We help you find the perfect university based on your academic profile, goals, and preferences. Our consultants analyse hundreds of institutions to shortlist the ones that truly match you.",
      image: "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg",
      duration: "2-3 weeks",
      rating: "4.9",
      reviews: 312,
      highlights: ["Profile evaluation", "Shortlisting top universities", "Ranking analysis", "Fit assessment"],
      steps: [
        { title: "Initial Assessment", desc: "We evaluate your academic background, test scores, and career aspirations." },
        { title: "University Shortlisting", desc: "We identify 8-12 universities that best match your profile across reach, match, and safety categories." },
        { title: "Detailed Research", desc: "In-depth analysis of programs, faculty, culture, and career outcomes at each shortlisted university." },
        { title: "Final Recommendation", desc: "A personalised report with our recommended list and application strategy." },
      ],
      faqs: [
        { q: "How many universities will you shortlist for me?", a: "Typically 8-12 universities split across reach, match, and safety tiers based on your profile." },
        { q: "Do you specialise in any specific countries?", a: "We cover universities across the US, UK, Canada, Australia, Europe, and Singapore." },
      ],
      accent: "from-blue-500 to-blue-700",
      accentLight: "bg-blue-50",
      accentText: "text-blue-600",
      accentBorder: "border-blue-100",
      accentHex: "#2563eb",
    },
    {
      id: "application-support",
      icon: BookOpen,
      title: "Application Support",
      tagline: "Stand out from thousands of applicants",
      description:
        "Complete assistance with your university applications, essays, and documentation. We ensure every component of your application tells a compelling, authentic story.",
      image: "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg",
      duration: "4-6 weeks",
      rating: "4.8",
      reviews: 275,
      highlights: ["SOP & essay writing", "Document checklist", "Application review", "Deadline tracking"],
      steps: [
        { title: "Document Audit", desc: "We review all your existing documents and identify gaps that need to be addressed." },
        { title: "Essay Strategy", desc: "Craft a narrative strategy that connects your experiences to your future goals." },
        { title: "Drafting & Editing", desc: "Multiple rounds of writing and refinement until your application shines." },
        { title: "Submission", desc: "We handle the final submission checklist and confirm receipt from each university." },
      ],
      faqs: [
        { q: "Will you write my essays for me?", a: "We guide and edit — your voice stays authentic. We never write essays from scratch for you." },
        { q: "How many revisions are included?", a: "Unlimited revisions until you're satisfied and the deadline arrives." },
      ],
      accent: "from-emerald-500 to-emerald-700",
      accentLight: "bg-emerald-50",
      accentText: "text-emerald-600",
      accentBorder: "border-emerald-100",
      accentHex: "#059669",
    },
    {
      id: "visa-consultation",
      icon: Award,
      title: "Visa Consultation",
      tagline: "Stress-free visa approvals",
      description:
        "Expert guidance on visa applications, requirements, and interview preparation. We have a 97% visa approval rate across all major student visa categories.",
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
      duration: "1-2 weeks",
      rating: "4.9",
      reviews: 408,
      highlights: ["Document preparation", "Interview coaching", "Embassy guidance", "Follow-up support"],
      steps: [
        { title: "Visa Category Assessment", desc: "We determine the right visa type for your destination country and program." },
        { title: "Document Preparation", desc: "A complete checklist and review of all required financial, academic, and personal documents." },
        { title: "Mock Interview", desc: "Realistic mock visa interviews with detailed feedback to prepare you for the real thing." },
        { title: "Submission & Follow-up", desc: "We assist with the application portal and follow up with the embassy on your behalf." },
      ],
      faqs: [
        { q: "Which countries' visas do you support?", a: "US (F-1), UK (Tier 4), Canada (Study Permit), Australia (Subclass 500), Schengen, and more." },
        { q: "What if my visa gets rejected?", a: "We provide full support for re-application and appeals at no extra charge." },
      ],
      accent: "from-violet-500 to-violet-700",
      accentLight: "bg-violet-50",
      accentText: "text-violet-600",
      accentBorder: "border-violet-100",
      accentHex: "#7c3aed",
    },
    {
      id: "career-planning",
      icon: Users,
      title: "Career Planning",
      tagline: "Your career starts before graduation",
      description:
        "Post-study career guidance and job placement assistance in your desired field. We connect you with alumni networks, internships, and industry mentors.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      duration: "Ongoing",
      rating: "4.7",
      reviews: 189,
      highlights: ["Career mapping", "Resume building", "Job placement", "Industry networking"],
      steps: [
        { title: "Career Goal Setting", desc: "We map your strengths and ambitions to realistic, high-impact career paths." },
        { title: "Resume & LinkedIn", desc: "Professional-grade resume and LinkedIn profile crafted for your target industry." },
        { title: "Internship Placement", desc: "Introductions to our network of 500+ companies actively hiring international students." },
        { title: "Ongoing Mentorship", desc: "Monthly check-ins with an industry mentor throughout your studies." },
      ],
      faqs: [
        { q: "When should I start career planning?", a: "Ideally before you even apply — choosing the right program in the right city matters enormously." },
        { q: "Do you guarantee job placement?", a: "We don't guarantee placement, but 84% of our students secure roles within 3 months of graduation." },
      ],
      accent: "from-rose-500 to-rose-700",
      accentLight: "bg-rose-50",
      accentText: "text-rose-600",
      accentBorder: "border-rose-100",
      accentHex: "#e11d48",
    },
  ]
  
};

export const countryData = {
  nepal: {
    contact: {
      phone: "+977 9800000000",
      email: "nepal@globalunity.com"
    },
    extraServices: [

    ]
  },

  india: {
    contact: {
      phone: "+91 9800000000",
      email: "india@globalunity.com"
    },
    extraServices: [
     
    ]
  }
};