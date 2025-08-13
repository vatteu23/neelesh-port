// Portfolio data and constants
export interface WorkItem {
  category: string;
  urls: string[];
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
}

// Personal information
export const personalInfo = {
  name: "Neelesh Reddy",
  title: "Unreal Engine Generalist", 
  subtitle: "[ 3D Artist • VFX Professional • Technical artist • Engine operator ]",
  bio: "I am a qualified and professional unreal artist with nearly two years of experience around the art of unreal, Maya and 2 years of experience in over all 3D field, strong creative and analytical skills, team player with an eye for detail.",
  linkedIn: "https://www.linkedin.com/in/neelesh-reddy-botta-3405291a6/",
  email: "neelesh@example.com", // Add actual email
};

// Navigation items
export const navigationItems: NavigationItem[] = [
  { href: "/", label: "/home" },
  { href: "/about", label: "/about" },
  { href: "/work", label: "/work" },
];

// Skills/highlights
export const skills: SkillItem[] = [
  {
    id: "unreal-maya",
    title: "Unreal Engine & Maya Proficiency",
    description: "Nearly 2 years of experience creating high-quality 3D assets and animations.",
  },
  {
    id: "vfx-experience", 
    title: "VFX Professional Experience",
    description: "Worked at Matrix VFX and Spectra VFX, delivering cutting-edge visuals.",
  },
  {
    id: "3d-expert",
    title: "Expert in 3D & Visual Effects", 
    description: "Strong skills in 3D modeling, texturing, lighting, rendering, layouting and compositing.",
  },
];

// Work experience
export const experience: ExperienceItem[] = [
  {
    company: "Matrix_VFX",
    position: "3D_GENERALIST", 
    period: "SEPT_2022 → NOV_2023",
    responsibilities: [
      "Used Unreal Engine to its best to create beautiful layout, import tracked camera inside it to render with passes.",
      "Created high-quality 3D models, textures, lighting, animation, rendering from Maya.",
      "Collaborated with compositing artist to work out blend between 3D to 2D.",
    ],
  },
  {
    company: "Spectra_VFX",
    position: "UNREAL_ENGINE_GENERALIST",
    period: "NOV_2023 → MAY_2024", 
    responsibilities: [
      "Used Unreal Engine to create stunning visuals",
      "Used PCG to reduce the foliage weight.",
    ],
  },
];

// Education
export const education: EducationItem[] = [
  {
    degree: "DIPLOMA IN COMPOSTING",
    institution: "MAYA_ACADEMY_OF_ADVANCED_CINEMATICS",
    period: "2018",
  },
  {
    degree: "BACHELOR OF FINE ARTS",
    institution: "KL_UNIVERSITY", 
    period: "2019 → 2023",
    specialization: "3D_ANIMATION",
  },
  {
    degree: "ONTARIO COLLEGE GRADUATE CERTIFICATE",
    institution: "SENECA_POLYTECHNIC",
    period: "2024",
  },
];

// Portfolio work data
export const portfolioWork: WorkItem[] = [
  {
    category: "Short_Films",
    urls: [
      "https://www.youtube.com/embed/KG01kavjO9I?si=CvVD8PqbQXlspt5Z",
      "https://www.youtube.com/embed/oMhbEONjGR8?si=Nf5WYMev6YX8071T",
      "https://www.youtube.com/embed/gIBOr6Bxn3Q?si=JHYV8jzGl6dzL1FB",
      "https://www.youtube.com/embed/dsnyvg0WzWc?si=hOEaCRFc1EvAgPL0",
      "https://www.youtube.com/embed/MhcQlvBW_7s?si=MNkKOniqU5iJzWR1",
      "https://www.youtube.com/embed/l_9t1ivExho?si=P9iH7X3mQjdn2M_i",
    ],
  },
  {
    category: "animation",
    urls: [
      "https://youtu.be/762Lzi9MXHE",
      "https://youtu.be/_W-7NwT6Xfg", 
      "https://youtu.be/MFHxhONwKBs",
      "https://youtu.be/ntifEGsf-5c",
      "https://youtu.be/udUM08G8lIA",
      "https://youtu.be/sRIPtA_Yr0M",
      "https://youtu.be/7ABfo5kQYs0",
      "https://youtube.com/shorts/kE5ItZvMnKM",
      "https://youtube.com/shorts/UpIVRTlydMY",
      "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
    ],
  },
  {
    category: "Demo_Reel",
    urls: [
      "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
    ],
  },
  {
    category: "modeling",
    urls: [
      "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
    ],
  },
  {
    category: "texturing", 
    urls: [
      "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
    ],
  },
  {
    category: "unreal_engine",
    urls: [
      "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
    ],
  },
  {
    category: "Dynamics",
    urls: ["https://youtu.be/QMt5sEOaA_I"],
  },
];

// SEO and meta data
export const siteMetadata = {
  title: "Neelesh Reddy | Unreal Engine Generalist",
  description: "Neelesh Reddy is an Unreal Engine generalist with a passion for creating immersive experiences.",
  siteUrl: "https://neeleshreddy.com", // Update with actual domain
  image: "/images/og-image.jpg", // Add OG image
};
