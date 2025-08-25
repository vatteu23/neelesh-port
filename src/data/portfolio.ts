// Portfolio data and constants
export interface PortfolioItem {
  type: 'video' | 'project' | 'text';
  title?: string;
  url?: string;
  description?: string;
  role?: string;
  bts?: PortfolioItem[]; // Behind the scenes content
}

export interface WorkCategory {
  category: string;
  items: PortfolioItem[];
  subcategories?: WorkSubcategory[];
}

export interface WorkSubcategory {
  name: string;
  items: PortfolioItem[];
}

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
  title: "Virtual Production Supervisor & Visual Storyteller", 
  subtitle: "[ VP Engine Operator • Virtual Art Department • VFX Professional • 3D Generalist ]",
  bio: "Hi, I'm Neelesh, a passionate visual storyteller with a strong foundation in filmmaking and animation. I hold a Bachelor of Fine Arts degree, graduating with a Silver Medal, and have completed postgraduate programs in 3D Animation and Virtual Production. My journey began in the heart of the Indian Film Industry at Matrix VFX, where I contributed to top-tier films like Skanda, Kushi, and Bhagavanth Kesari. In 2024, I moved to Canada to expand my expertise at Seneca and Humber Polytechnic, where I gained hands-on experience across virtual production short films including 'Screech,' 'No Signal,' and my capstone project 'SAPPED.' I'm currently focused on VP Engine operations and Virtual Art Department work, mastering LED wall operations and designing high-quality content for immersive storytelling where traditional filmmaking meets the limitless possibilities of virtual production.",
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
    id: "vp-engine-operator-led-walls",
    title: "VP Engine Operator & LED Wall Management",
    description: "Specialized VP Engine operator with expertise in LED wall operations and real-time content delivery. Experienced in managing complex virtual production setups, live compositing workflows, and seamless integration of virtual and physical environments for film production.",
  },
  {
    id: "virtual-art-department-vad",
    title: "Virtual Art Department (V AD)",
    description: "Expert in designing high-quality immersive content for virtual production environments. Skilled in crafting visual narratives, production design for virtual sets, and creating photorealistic environments that enhance storytelling capabilities in cutting-edge ICVFX workflows.",
  },
  {
    id: "unreal-engine-composure-mocap",
    title: "Unreal Engine & Live Compositing",
    description: "Advanced proficiency in Unreal Engine's Composure system for live compositing of 3D motion capture characters. Expert in PCG workflows, Blueprint scripting, nDisplay configurations, and real-time rendering with tracked camera integration for seamless VFX production.",
  },
  {
    id: "film-industry-vfx-pipeline",
    title: "Film Industry VFX Pipeline",
    description: "Complete 3D generalist with professional experience on major Indian films. Skilled in the full production pipeline from Maya modeling to Nuke compositing, with expertise in traditional VFX workflows and the transition to modern virtual production techniques.",
  },
];

// Work experience
export const experience: ExperienceItem[] = [
  {
    company: "Humber_Polytechnic",
    position: "VIRTUAL_PRODUCTION_SUPERVISOR", 
    period: "2024",
    responsibilities: [
      "Led virtual production on capstone project 'SAPPED' as Virtual Production Supervisor, orchestrating live compositing of 3D motion capture characters using Unreal Engine's Composure system.",
      "Served as Engine Operator and Virtual Art Department artist on 'Screech', managing LED wall operations while crafting visual narratives.",
      "Worked as Systems TD and 3rd Assistant Director on 'No Signal', ensuring seamless technical workflow and on-set coordination.",
      "Gained hands-on experience with cutting-edge ICVFX technology and real-time compositing workflows.",
    ],
  },
  {
    company: "Matrix_VFX",
    position: "3D_GENERALIST", 
    period: "SEPT_2022 → NOV_2023",
    responsibilities: [
      "Contributed to several top-tier Indian films including Skanda (2023), Kushi (2023), Bhagavanth Kesari (2023), Custody (2023), Anni Manchi Sakunamule (2023), and Ooru Peru Bhairavakona (2024).",
      "Used Unreal Engine to create immersive layouts and integrated tracked cameras for seamless VFX rendering with multiple passes.",
      "Created high-quality 3D models, textures, lighting, animation, and rendering using Maya and industry-standard tools.",
      "Collaborated closely with compositing artists to achieve seamless blends between 3D and 2D elements.",
      "Discovered and developed deep passion for Unreal Engine, transitioning from traditional VFX to real-time workflows.",
    ],
  },
  {
    company: "Spectra_VFX",
    position: "UNREAL_ENGINE_GENERALIST",
    period: "NOV_2023 → MAY_2024", 
    responsibilities: [
      "Created stunning real-time visuals using advanced Unreal Engine techniques and workflows.",
      "Implemented Procedural Content Generation (PCG) systems to optimize foliage and environmental assets.",
      "Developed expertise in real-time rendering and virtual production techniques.",
    ],
  },
];

// Education
export const education: EducationItem[] = [
  {
    degree: "ONTARIO_COLLEGE_GRADUATE_CERTIFICATE",
    institution: "HUMBER_POLYTECHNIC",
    period: "2024",
    specialization: "VIRTUAL_PRODUCTION",
  },
  {
    degree: "ONTARIO_COLLEGE_GRADUATE_CERTIFICATE",
    institution: "SENECA_POLYTECHNIC",
    period: "2024",
    specialization: "3D_ANIMATION",
  },
  {
    degree: "BACHELOR_OF_FINE_ARTS",
    institution: "KL_UNIVERSITY", 
    period: "2019 → 2023",
    specialization: "SILVER_MEDAL_GRADUATE",
  },
  {
    degree: "DIPLOMA_IN_COMPOSITING",
    institution: "MAYA_ACADEMY_OF_ADVANCED_CINEMATICS",
    period: "2018",
  },
];

// Enhanced Portfolio work data
export const portfolioWork: WorkCategory[] = [
  {
    category: "Demo_Reels",
    items: [
      {
        type: "video",
        title: "Demo Reel",
        url: "https://player.vimeo.com/video/1108946824?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0",
      },
      {
        type: "video", 
        title: "Heading - EDU Video",
        url: "https://player.vimeo.com/video/1095492236?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0",
      },
      {
        type: "video",
        title: "Heading - Virtual Production Semester - 1 Demo reel",
        url: "https://player.vimeo.com/video/1094189150?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0",
      },
      {
        type: "video",
        title: "Dark Slope Video Documentation", 
        url: "https://player.vimeo.com/video/1065723895?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0",
      },
    ],
  },
  {
    category: "Unreal_Engine_Works",
    items: [],
    subcategories: [
      {
        name: "Cinematic_Projects",
        items: [
          {
            type: "video",
            title: "Lamborghini Cinematic",
            url: "https://youtu.be/ZDcCU7c6P5U",
          },
          {
            type: "video",
            title: "Niagara Portal",
            url: "https://youtu.be/FplOeruFBko",
          },
        ],
      },
      {
        name: "Technical_Projects",
        items: [
          {
            type: "project",
            title: "Beach Date",
            description: "Interactive virtual environment project",
          },
          {
            type: "project",
            title: "Pandora: The Unreal World",
            description: "Immersive world-building project",
          },
          {
            type: "project",
            title: "Substrate Materials",
            description: "Advanced material system development",
          },
          {
            type: "project",
            title: "Blueprinting",
            description: "Visual scripting and game logic systems",
          },
          {
            type: "project",
            title: "Auto Materials",
            description: "Automated material generation workflow",
          },
          {
            type: "project",
            title: "PCG",
            description: "Procedural Content Generation systems",
          },
          {
            type: "project",
            title: "RE-Targeting and Sequencer",
            description: "Animation retargeting and cinematic sequencing",
          },
        ],
      },
    ],
  },
  {
    category: "Virtual_Production_Short_Films",
    items: [
      {
        type: "video",
        title: "SAPPED",
        url: "https://youtu.be/pQL3_LXWgmw",
        role: "VP Supervisor & Virtual Art Department Artist",
      },
      {
        type: "video",
        title: "Screech",
        url: "https://youtu.be/8vH44axqvhI",
        role: "Engine Operator & Virtual Art Department Artist",
      },
      {
        type: "video",
        title: "NO Signal",
        url: "https://youtu.be/q4moYsxvLTA",
        role: "Systems Tech",
      },
    ],
  },
  {
    category: "Animations",
    items: [
      {
        type: "video",
        url: "https://youtu.be/762Lzi9MXHE",
      },
      {
        type: "video",
        url: "https://youtu.be/_W-7NwT6Xfg",
      },
      {
        type: "video",
        url: "https://youtu.be/MFHxhONwKBs",
      },
      {
        type: "video",
        url: "https://youtu.be/ntifEGsf-5c",
      },
      {
        type: "video",
        url: "https://youtu.be/udUM08G8lIA",
      },
      {
        type: "video",
        url: "https://youtu.be/sRIPtA_Yr0M",
      },
      {
        type: "video",
        url: "https://youtu.be/7ABfo5kQYs0",
      },
      {
        type: "video",
        url: "https://youtube.com/shorts/kE5ItZvMnKM",
      },
      {
        type: "video",
        url: "https://youtube.com/shorts/UpIVRTlydMY",
      },
      {
        type: "video",
        url: "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
      },
    ],
  },
  {
    category: "Volunteer",
    items: [
      {
        type: "text",
        title: "TAFFI - Toronto Animation Film Festival International",
        description: "Volunteer work at animation festival",
      },
      {
        type: "text",
        title: "Humber Polytechnic - Open House",
        description: "Campus event volunteer",
      },
      {
        type: "text",
        title: "OIAF - Ottawa International Animation Festival - Coming Soon",
        description: "Upcoming volunteer opportunity",
      },
    ],
  },
  {
    category: "Short_Films",
    items: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/KG01kavjO9I?si=CvVD8PqbQXlspt5Z",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/oMhbEONjGR8?si=Nf5WYMev6YX8071T",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/gIBOr6Bxn3Q?si=JHYV8jzGl6dzL1FB",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/dsnyvg0WzWc?si=hOEaCRFc1EvAgPL0",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/MhcQlvBW_7s?si=MNkKOniqU5iJzWR1",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/l_9t1ivExho?si=P9iH7X3mQjdn2M_i",
      },
    ],
  },
];

// Legacy support - maintaining backward compatibility
export const legacyPortfolioWork: WorkItem[] = portfolioWork.map(category => ({
  category: category.category,
  urls: category.items.filter(item => item.url).map(item => item.url!),
}));

// SEO and meta data
export const siteMetadata = {
  title: "Neelesh Reddy | Virtual Production Supervisor & Visual Storyteller",
  description: "Neelesh Reddy is a Virtual Production Supervisor and visual storyteller specializing in VP Engine operations, Virtual Art Department work, and cutting-edge ICVFX workflows. With experience on major films and expertise in Unreal Engine's Composure system.",
  siteUrl: "https://neeleshreddy.com", // Update with actual domain
  image: "/images/og-image.jpg", // Add OG image
};
