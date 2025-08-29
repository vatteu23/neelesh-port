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
    thumbnailUrl: "/images/beach-date-thumb.jpg",
    tools: ["Unreal Engine 5", "Lumen", "Nanite", "Blueprints"],
    images: [
      "/images/beach-date-1.jpg",
      "/images/beach-date-2.jpg",
      "/images/beach-date-3.jpg",
      "/images/beach-date-4.jpg"
    ]
  },
  {
    id: "blueprinting",
    title: "Advanced Blueprinting",
    description: "Complex gameplay systems built entirely with Blueprint visual scripting.",
    category: "Gameplay",
    videoUrl: "https://youtu.be/_iHGsvaXkYw",
    thumbnailUrl: "/images/blueprinting-thumb.jpg",
    tools: ["Unreal Engine 5", "Blueprints", "Gameplay Framework"],
    images: [
      "/images/blueprinting-1.jpg",
      "/images/blueprinting-2.jpg",
      "/images/blueprinting-3.jpg"
    ]
  },
  {
    id: "pandora-world",
    title: "Pandora World",
    description: "An open-world environment with procedural terrain generation and dynamic weather systems.",
    category: "Environment",
    videoUrl: "https://vimeo.com/1082915708",
    thumbnailUrl: "/images/pandora-world-thumb.jpg",
    tools: ["Unreal Engine 5", "World Creator", "Houdini", "Substance"],
    images: [
      "/images/pandora-world-1.jpg",
      "/images/pandora-world-2.jpg",
      "/images/pandora-world-3.jpg",
      "/images/pandora-world-4.jpg"
    ]
  },
  {
    id: "retargeting-and-sequencer",
    title: "Retargeting & Sequencer",
    description: "Advanced animation retargeting and cinematic sequence creation using Unreal's animation tools.",
    category: "Animation",
    videoUrl: "https://youtu.be/example3",
    thumbnailUrl: "/images/retargeting-thumb.jpg",
    tools: ["Unreal Engine 5", "Control Rig", "Sequencer", "Animation Blueprint"],
    images: [
      "/images/retargeting-1.jpg",
      "/images/retargeting-2.jpg",
      "/images/retargeting-3.jpg"
    ]
  },
  {
    id: "screech-virtual-production",
    title: "Screech - Virtual Production",
    description: "A virtual production short film demonstrating real-time rendering and virtual camera techniques.",
    category: "Virtual Production",
    videoUrl: "https://youtu.be/example4",
    thumbnailUrl: "/images/screech-thumb.jpg",
    tools: ["Unreal Engine 5", "Virtual Camera", "Live Link", "Composure"],
    images: [
      "/images/screech-1.jpg",
      "/images/screech-2.jpg",
      "/images/screech-3.jpg",
      "/images/screech-4.jpg"
    ]
  },
  {
    id: "substrate-materials",
    title: "Substrate Materials",
    description: "Advanced material creation using Unreal Engine 5's new Substrate material system.",
    category: "Materials",
    videoUrl: "https://youtu.be/example5",
    thumbnailUrl: "/images/substrate-thumb.jpg",
    tools: ["Unreal Engine 5", "Substrate", "Material Editor", "Substance"],
    images: [
      "/images/substrate-1.jpg",
      "/images/substrate-2.jpg",
      "/images/substrate-3.jpg"
    ]
  }
];
