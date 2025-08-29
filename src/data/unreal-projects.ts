export interface UnrealProject {
  id: string;
  title: string;
  description: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  tools: string[];
  images: string[];
}

export const unrealProjects: UnrealProject[] = [
  {
    id: "beach-date",
    title: "Beach Date",
    description: "A cinematic short film showcasing advanced lighting and atmospheric effects in Unreal Engine.",
    category: "Cinematic",
    videoUrl: "https://youtu.be/nMDf272PdB4",
    thumbnailUrl: "/projects/beach-date/1.png",
    tools: ["Unreal Engine 5", "Lumen", "Nanite", "Blueprints"],
    images: [
      "/projects/beach-date/1.png",
      "/projects/beach-date/2.png",
      "/projects/beach-date/3.png",
      "/projects/beach-date/4.png",
      "/projects/beach-date/5.png"
    ]
  },
  {
    id: "blueprinting",
    title: "Advanced Blueprinting",
    description: "Complex gameplay systems built entirely with Blueprint visual scripting.",
    category: "Gameplay",
    videoUrl: "https://youtu.be/_iHGsvaXkYw",
    thumbnailUrl: "/projects/blueprinting/1.png",
    tools: ["Unreal Engine 5", "Blueprints", "Gameplay Framework"],
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
    category: "Environment",
    videoUrl: "https://vimeo.com/1082915708",
    thumbnailUrl: "/projects/pandora-world/1.png",
    tools: ["Unreal Engine 5", "World Creator", "Houdini", "Substance"],
    images: [
    ]
  },
  {
    id: "retargeting-and-sequencer",
    title: "Retargeting & Sequencer",
    description: "Advanced animation retargeting and cinematic sequence creation using Unreal's animation tools.",
    category: "Animation",
    videoUrl: "https://vimeo.com/1094189150",
    thumbnailUrl: "/projects/Retargeting-and-Sequencer/1.png",
    tools: ["Unreal Engine 5", "Control Rig", "Sequencer", "Animation Blueprint"],
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
    category: "Materials",
    videoUrl: "https://vimeo.com/1095492236",
    thumbnailUrl: "/projects/substrate-materials/1.PNG",
    tools: ["Unreal Engine 5", "Substrate", "Material Editor", "Substance"],
    images: [
      "/projects/substrate-materials/1.PNG",
      "/projects/substrate-materials/2.PNG",
      "/projects/substrate-materials/3.PNG",
      "/projects/substrate-materials/4.PNG",
      "/projects/substrate-materials/5.PNG"
    ]
  }
];
