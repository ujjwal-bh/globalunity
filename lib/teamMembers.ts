export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  fullDescription: string;
  image: string;
  email: string;
  education: string[];
  certifications: string[];
  specializations: string[];
  yearsOfExperience: number;
}

export const teamMembers: TeamMember[] = [
  {
    id: "emily-richardson",
    name: "Emily Richardson",
    role: "Lead Education Consultant",
    bio: "15+ years of experience in international education",
    fullDescription: "Emily Richardson is the Lead Education Consultant at Global Unity with over 15 years of dedicated experience in international education. She specializes in helping students navigate the complex process of university selection and application, with a particular focus on matching students with institutions that align with their academic goals and career aspirations. Emily's personalized approach has helped thousands of students gain admission to top-tier universities worldwide.",
    image: "https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg",
    email: "emily@globalunity.com",
    education: [
      "Master's in International Education - University of Oxford",
      "Bachelor's in Business Administration - Harvard University",
    ],
    certifications: [
      "ICEF Agent Certification",
      "NAFSA Professional Credential",
      "EAIE Member Certification",
    ],
    specializations: [
      "University Selection & Matching",
      "Application Strategy",
      "Student Counseling",
      "Study Abroad Programs",
    ],
    yearsOfExperience: 15,
  },
  {
    id: "michael-chen",
    role: "Visa Specialist",
    name: "Michael Chen",
    bio: "Expert in visa procedures for 25+ countries",
    fullDescription: "Michael Chen is our Visa Specialist with extensive expertise in immigration and visa procedures across 25+ countries. With a background in international law and immigration policy, Michael ensures that every student's visa application is meticulously prepared and submitted with the highest likelihood of approval. He stays updated with the latest visa regulations and requirements across all major study destinations.",
    image: "https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg",
    email: "michael@globalunity.com",
    education: [
      "Master's in International Law - Cambridge University",
      "Bachelor's in Law - National University of Singapore",
    ],
    certifications: [
      "Immigration Law Specialist (UK)",
      "US Immigration Consultant Certified",
      "Australian Migration Agent",
    ],
    specializations: [
      "Visa Application & Compliance",
      "Immigration Law",
      "Document Preparation",
      "Multi-Country Visa Strategy",
    ],
    yearsOfExperience: 12,
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Career Counselor",
    bio: "Helps students plan their post-graduation career paths",
    fullDescription: "Priya Sharma is our Career Counselor dedicated to helping students plan and achieve their post-graduation career objectives. With experience in human resources and career development, Priya works with students to identify their strengths, explore career options, and develop actionable plans to launch successful careers in their chosen fields. She maintains strong connections with employers and industry leaders across the globe.",
    image: "https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg",
    email: "priya@globalunity.com",
    education: [
      "Master's in Human Resource Management - MIT",
      "Bachelor's in Psychology - Delhi University",
    ],
    certifications: [
      "Certified Career Coach (ICC)",
      "Myers-Briggs Type Indicator Certification",
      "Workplace Conflict Management Specialist",
    ],
    specializations: [
      "Career Planning & Development",
      "Resume & Interview Coaching",
      "Job Search Strategy",
      "Employer Networking",
    ],
    yearsOfExperience: 10,
  },
  {
    id: "david-martinez",
    name: "David Martinez",
    role: "University Relations Manager",
    bio: "Manages partnerships with 150+ universities worldwide",
    fullDescription: "David Martinez is our University Relations Manager responsible for maintaining and expanding relationships with over 150 partner universities globally. With his extensive network and deep understanding of institutional strengths, David works closely with students to find the perfect university fit. His direct connections with admissions offices around the world ensure that our students receive priority consideration and personalized guidance through the application process.",
    image: "https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg",
    email: "david@globalunity.com",
    education: [
      "Master's in International Relations - Stanford University",
      "Bachelor's in Economics - Universidad Carlos III de Madrid",
    ],
    certifications: [
      "University Partnership Manager Certification",
      "International Education Policy Certification",
      "AACRAO Professional Member",
    ],
    specializations: [
      "University Partnerships & Relations",
      "Institutional Evaluation",
      "Student-University Matching",
      "International Admissions",
    ],
    yearsOfExperience: 14,
  },
];
