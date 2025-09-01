// ===================================================================
// UNIFIED PROJECTS DATA - EASY TO UPDATE
// ===================================================================
// This file contains all your projects in one simple, easy-to-update format.
// Just add, edit, or remove projects here - no need to modify multiple files!

export interface Project {
  // Basic Info
  id: string;                    // Unique identifier (auto-generated from title)
  title: string;                 // Project name
  description: string;           // Project description
  category: string;              // Category (e.g., "Unreal Engine", "Animation", "Demo Reel")
  
  // Media
  videoUrl?: string;            // YouTube, Vimeo, or local video URL
  thumbnailUrl?: string;        // Custom thumbnail (optional - auto-generated from video)
  images?: string[];            // Additional project images
  
  // Metadata
  tools?: string[];             // Tools/software used
  year?: string;                // Project year
  client?: string;              // Client/company (if applicable)
  role?: string;                // Your role in the project
  tags?: string[];              // Additional tags for filtering
  
  // Display Options
  featured?: boolean;           // Show on homepage/featured sections
  order?: number;               // Custom sort order (lower = first)
}

// ===================================================================
// ALL PROJECTS - ADD NEW PROJECTS HERE
// ===================================================================

export const allProjects: Project[] = [
  
  // UNREAL ENGINE PROJECTS
  // =====================
  {
    id: "beach-date",
    title: "Beach Date",
    description: "A cinematic short film showcasing advanced lighting and atmospheric effects in Unreal Engine.",
    category: "Unreal Engine",
    videoUrl: "https://youtu.be/nMDf272PdB4",
    thumbnailUrl: "/projects/beach-date/1.png",
    tools: ["Unreal Engine 5", "Lumen", "Nanite", "Blueprints"],
    year: "2024",
    featured: true,
    order: 1,
    images: [
      "/projects/beach-date/1.png",
      "/projects/beach-date/2.png",
      "/projects/beach-date/3.png",
      "/projects/beach-date/4.png",
      "/projects/beach-date/5.png"
    ]
  },
  
  {
    id: "advanced-blueprinting",
    title: "Advanced Blueprinting",
    description: "Complex gameplay systems built entirely with Blueprint visual scripting.",
    category: "Unreal Engine",
    videoUrl: "https://youtu.be/_iHGsvaXkYw",
    thumbnailUrl: "/projects/blueprinting/1.png",
    tools: ["Unreal Engine 5", "Blueprints", "Gameplay Framework"],
    year: "2024",
    featured: true,
    order: 2,
    images: [
      "/projects/blueprinting/1.png",
      "/projects/blueprinting/2.png",
      "/projects/blueprinting/3.png",
      "/projects/blueprinting/4.png"
    ]
  },
  
  {
    id: "pandora-world",
    title: "Pandora World",
    description: "An open-world environment with procedural terrain generation and dynamic weather systems.",
    category: "Unreal Engine",
    videoUrl: "https://vimeo.com/1082915708",
    thumbnailUrl: "/projects/pandora-world/1.png",
    tools: ["Unreal Engine 5", "World Creator", "Houdini", "Substance"],
    year: "2024",
    featured: true,
    order: 3,
    images: []
  },
  
  {
    id: "retargeting-and-sequencer",
    title: "Retargeting & Sequencer",
    description: "Advanced animation retargeting and cinematic sequence creation using Unreal's animation tools.",
    category: "Unreal Engine",
    videoUrl: "https://vimeo.com/1094189150",
    thumbnailUrl: "/projects/Retargeting-and-Sequencer/1.png",
    tools: ["Unreal Engine 5", "Control Rig", "Sequencer", "Animation Blueprint"],
    year: "2024",
    featured: true,
    order: 4,
    images: [
      "/projects/Retargeting-and-Sequencer/1.png",
      "/projects/Retargeting-and-Sequencer/2.png",
      "/projects/Retargeting-and-Sequencer/3.png",
      "/projects/Retargeting-and-Sequencer/4.png",
      "/projects/Retargeting-and-Sequencer/5.png"
    ]
  },
  
  {
    id: "screech-virtual-production",
    title: "Screech - Virtual Production",
    description: "A virtual production short film demonstrating real-time rendering and virtual camera techniques.",
    category: "Virtual Production",
    videoUrl: "https://youtu.be/8vH44axqvhI",
    thumbnailUrl: "/projects/screech-virtual-production/1.png",
    tools: ["Unreal Engine 5", "Virtual Camera", "Live Link", "Composure"],
    year: "2024",
    featured: true,
    order: 5,
    images: [
      "/projects/screech-virtual-production/1.png",
      "/projects/screech-virtual-production/2.png",
      "/projects/screech-virtual-production/3.png",
      "/projects/screech-virtual-production/4.png",
      "/projects/screech-virtual-production/5.png"
    ]
  },
  
  {
    id: "substrate-materials",
    title: "Substrate Materials",
    description: "Advanced material creation using Unreal Engine 5's new Substrate material system.",
    category: "Unreal Engine",
    videoUrl: "https://vimeo.com/1082915708",
    thumbnailUrl: "/projects/substrate-materials/1.PNG",
    tools: ["Unreal Engine 5", "Substrate", "Material Editor", "Substance"],
    year: "2024",
    featured: true,
    order: 6,
    images: [
      "/projects/substrate-materials/1.PNG",
      "/projects/substrate-materials/2.PNG",
      "/projects/substrate-materials/3.PNG",
      "/projects/substrate-materials/4.PNG",
      "/projects/substrate-materials/5.PNG"
    ]
  },

  // DEMO REELS
  // ==========
  {
    id: "main-demo-reel",
    title: "Demo Reel",
    description: "Comprehensive showcase of my latest work in virtual production, animation, and visual effects.",
    category: "Demo Reel",
    videoUrl: "https://player.vimeo.com/video/1108946824?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0",
    year: "2024",
    featured: true,
    order: 7,
    tools: ["Unreal Engine", "Maya", "After Effects"]
  },
  
  {
    id: "edu-video",
    title: "Educational Video - Heading",
    description: "Educational content demonstrating virtual production techniques and workflows.",
    category: "Demo Reel",
    videoUrl: "https://player.vimeo.com/video/1095492236?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0",
    year: "2024",
    order: 8,
    tools: ["Unreal Engine", "Virtual Production"]
  },
  
  {
    id: "vp-semester-demo",
    title: "Virtual Production Semester Demo Reel",
    description: "Compilation of work from Virtual Production semester showcasing various techniques and projects.",
    category: "Demo Reel",
    videoUrl: "https://player.vimeo.com/video/1094189150?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0",
    year: "2024",
    order: 9,
    tools: ["Unreal Engine", "Virtual Production", "LED Walls"]
  },
  
  {
    id: "dark-slope-documentation",
    title: "Dark Slope Video Documentation",
    description: "Behind-the-scenes documentation of the Dark Slope project production process.",
    category: "Demo Reel",
    videoUrl: "https://player.vimeo.com/video/1065723895?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0",
    year: "2024",
    order: 10,
    tools: ["Documentation", "Production"]
  },

  // ANIMATIONS
  // ==========
  {
    id: "animation-1",
    title: "Character Animation Study",
    description: "Character animation exploring emotional performance and technical execution.",
    category: "Animation",
    videoUrl: "https://youtu.be/762Lzi9MXHE",
    year: "2024",
    order: 11,
    tools: ["Maya", "Character Animation"]
  },
  
  {
    id: "animation-2",
    title: "Environment Animation",
    description: "Environmental storytelling through dynamic camera work and atmospheric effects.",
    category: "Animation",
    videoUrl: "https://youtu.be/_W-7NwT6Xfg",
    year: "2024",
    order: 12,
    tools: ["Maya", "Environment Design"]
  },
  
  {
    id: "animation-3",
    title: "Technical Animation Demo",
    description: "Demonstration of technical animation skills and rigging capabilities.",
    category: "Animation",
    videoUrl: "https://youtu.be/MFHxhONwKBs",
    year: "2024",
    order: 13,
    tools: ["Maya", "Rigging", "Technical Animation"]
  },
  
  {
    id: "animation-4",
    title: "Motion Graphics Study",
    description: "Exploration of motion graphics and kinetic typography techniques.",
    category: "Animation",
    videoUrl: "https://youtu.be/ntifEGsf-5c",
    year: "2024",
    order: 14,
    tools: ["After Effects", "Motion Graphics"]
  },
  
  {
    id: "animation-5",
    title: "3D Animation Sequence",
    description: "Complex 3D animation sequence showcasing storytelling and technical skills.",
    category: "Animation",
    videoUrl: "https://youtu.be/udUM08G8lIA",
    year: "2024",
    order: 15,
    tools: ["Maya", "3D Animation"]
  },
  
  {
    id: "animation-6",
    title: "Visual Effects Integration",
    description: "Integration of 3D animation with visual effects and compositing.",
    category: "Animation",
    videoUrl: "https://youtu.be/sRIPtA_Yr0M",
    year: "2024",
    order: 16,
    tools: ["Maya", "Nuke", "VFX"]
  },
  
  {
    id: "animation-7",
    title: "Stylized Animation",
    description: "Stylized animation exploring unique visual approaches and techniques.",
    category: "Animation",
    videoUrl: "https://youtu.be/7ABfo5kQYs0",
    year: "2024",
    order: 17,
    tools: ["Maya", "Stylized Animation"]
  },
  
  // {
  //   id: "animation-short-1",
  //   title: "Animation Short - Combat",
  //   description: "Short animation focusing on action sequences and dynamic movement.",
  //   category: "Animation",
  //   videoUrl: "https://youtube.com/shorts/kE5ItZvMnKM",
  //   year: "2024",
  //   order: 18,
  //   tools: ["Maya", "Action Animation"]
  // },
  
  // {
  //   id: "animation-short-2",
  //   title: "Animation Short - Character",
  //   description: "Character-focused short animation emphasizing personality and emotion.",
  //   category: "Animation",
  //   videoUrl: "https://youtube.com/shorts/UpIVRTlydMY",
  //   year: "2024",
  //   order: 19,
  //   tools: ["Maya", "Character Animation"]
  // },
  
  {
    id: "animation-vimeo",
    title: "Advanced Animation Techniques",
    description: "Advanced animation techniques and experimental approaches to movement.",
    category: "Animation",
    videoUrl: "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
    year: "2024",
    order: 20,
    tools: ["Maya", "Advanced Animation"]
  },

  // SHORT FILMS
  // ===========
  {
    id: "short-film-1",
    title: "Narrative Short Film",
    description: "Complete short film showcasing narrative storytelling and visual direction.",
    category: "Short Film",
    videoUrl: "https://www.youtube.com/embed/KG01kavjO9I?si=CvVD8PqbQXlspt5Z",
    year: "2024",
    order: 21,
    tools: ["Direction", "Cinematography", "Post-Production"]
  },
  
  {
    id: "short-film-2",
    title: "Experimental Film",
    description: "Experimental approach to filmmaking with innovative visual techniques.",
    category: "Short Film",
    videoUrl: "https://www.youtube.com/embed/oMhbEONjGR8?si=Nf5WYMev6YX8071T",
    year: "2024",
    order: 22,
    tools: ["Experimental", "Visual Effects"]
  },
  
  {
    id: "short-film-3",
    title: "Documentary Style",
    description: "Documentary-style short film exploring real-world subjects and stories.",
    category: "Short Film",
    videoUrl: "https://www.youtube.com/embed/gIBOr6Bxn3Q?si=JHYV8jzGl6dzL1FB",
    year: "2024",
    order: 23,
    tools: ["Documentary", "Interviews"]
  },
  
  {
    id: "short-film-4",
    title: "Drama Short",
    description: "Dramatic short film focusing on character development and emotional storytelling.",
    category: "Short Film",
    videoUrl: "https://www.youtube.com/embed/dsnyvg0WzWc?si=hOEaCRFc1EvAgPL0",
    year: "2024",
    order: 24,
    tools: ["Drama", "Character Development"]
  },
  
  {
    id: "short-film-5",
    title: "Action Short",
    description: "Action-packed short film with dynamic cinematography and choreography.",
    category: "Short Film",
    videoUrl: "https://www.youtube.com/embed/MhcQlvBW_7s?si=MNkKOniqU5iJzWR1",
    year: "2024",
    order: 25,
    tools: ["Action", "Choreography"]
  },
  
  {
    id: "short-film-6",
    title: "Artistic Vision",
    description: "Artistic short film exploring creative visual concepts and storytelling approaches.",
    category: "Short Film",
    videoUrl: "https://www.youtube.com/embed/l_9t1ivExho?si=P9iH7X3mQjdn2M_i",
    year: "2024",
    order: 26,
    tools: ["Artistic Direction", "Visual Storytelling"]
  },

];

// ===================================================================
// HELPER FUNCTIONS - NO NEED TO MODIFY
// ===================================================================

// Auto-generate ID from title if not provided
export const generateProjectId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  return allProjects.filter(project => project.category === category);
};

// Get featured projects
export const getFeaturedProjects = (): Project[] => {
  return allProjects
    .filter(project => project.featured)
    .sort((a, b) => (a.order || 999) - (b.order || 999));
};

// Get all unique categories
export const getAllCategories = (): string[] => {
  const categories = new Set(allProjects.map(project => project.category));
  return Array.from(categories).sort();
};

// Get projects with videos
export const getVideoProjects = (): Project[] => {
  return allProjects.filter(project => project.videoUrl);
};

// Search projects by title or description
export const searchProjects = (query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase();
  return allProjects.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.tools?.some(tool => tool.toLowerCase().includes(lowercaseQuery))
  );
};

// Filter interface for project filtering
export interface ProjectFilter {
  id: string;
  label: string;
  count: number;
}

// Get available filters with counts
export const getProjectFilters = (): ProjectFilter[] => {
  const filters: ProjectFilter[] = [
    {
      id: 'all',
      label: 'All Projects',
      count: allProjects.length,
    }
  ];

  // Add category-based filters
  const categoryFilters = getAllCategories().map(category => ({
    id: category.toLowerCase().replace(/\s+/g, '-'),
    label: category,
    count: getProjectsByCategory(category).length,
  }));

  return [...filters, ...categoryFilters];
};

// Filter projects by filter ID
export const filterProjects = (filterId: string): Project[] => {
  if (filterId === 'all') {
    return allProjects;
  }
  
  const filter = getProjectFilters().find(f => f.id === filterId);
  if (filter && filter.label !== 'All Projects') {
    return getProjectsByCategory(filter.label);
  }
  
  return allProjects;
};
