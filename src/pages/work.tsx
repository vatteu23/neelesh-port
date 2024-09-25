import Container from "@/components/Container";
import HeadWithMetas from "@/components/HeadWithMetas";
import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import { cn } from "@/functions/cn";
import { useState } from "react";

interface DataItem {
  [key: string]: string[];
}

const data: DataItem[] = [
    {
      "demo_reel": [
        "https://www.youtube.com/embed/KG01kavjO9I?si=CvVD8PqbQXlspt5Z",
        "https://www.youtube.com/embed/oMhbEONjGR8?si=Nf5WYMev6YX8071T",
        "https://www.youtube.com/embed/gIBOr6Bxn3Q?si=JHYV8jzGl6dzL1FB",
        "https://www.youtube.com/embed/dsnyvg0WzWc?si=hOEaCRFc1EvAgPL0",
        "https://www.youtube.com/embed/MhcQlvBW_7s?si=MNkKOniqU5iJzWR1",
        "https://www.youtube.com/embed/l_9t1ivExho?si=P9iH7X3mQjdn2M_i",
      ],
    },
    { "animation": ["https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0"] },
    { "short_films": ["https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0"] },
    { "modeling": ["https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0"] },
    { "texturing": ["https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0"] },
    { "unreal_engine": ["https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0"] },
  ];

interface Filter {
  name: string;
  id: string;
}

const filters: Filter[] = [
  { name: "ALL", id: "all" },
  { name: "DEMO REEL", id: "demo_reel" },
  { name: "MODELING", id: "modeling" },
  { name: "TEXTURING & LIGHTING", id: "texturing" },
  { name: "3D ANIMATION", id: "animation" },
  { name: "UNREAL ENGINE", id: "unreal_engine" },
  { name: "SHORT FILMS", id: "short_films" },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Layout>
      <HeadWithMetas
        title="Neelesh Reddy | Unreal Engine Generalist"
        description="Neelesh Reddy is an Unreal Engine generalist with a passion for creating immersive experiences."
      />
      <Container className="min-h-[80vh]">
        <Typography variant="h3" wrapper="h1" className="mt-12 mb-4">
          My creations
        </Typography>
        <div className="relative">
          <div className="flex flex-row overflow-x-scroll gap-2 md:gap-4 mb-2 lg:mb-12 whitespace-nowrap pb-3">
            {filters.map((filter, index) => (
              <div
                key={index}
                className={cn(
                  activeTab === filter.id ? "bg-blue-600 text-neutral-100" : "text-blue-600",
                  "border-2 border-blue-600 cursor-pointer inline-block py-1 px-3 md:px-8 rounded-full shadow-md hover:bg-blue-700 hover:text-neutral-100 transition-colors",
                  "text-nowrap"
                )}
                onClick={() => setActiveTab(filter.id)}
              >
                {filter.name}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-2 bottom-0 lg:hidden right-0 w-8 bg-gradient-to-l from-neutral-600/10"></div>
        </div>
        <div className="grid grid-cols-12 md:gap-6">
          {data.map((item, itemIndex) =>
            Object.entries(item).map(([key, urls]) =>
              (activeTab === "all" || activeTab === key) &&
              urls.map((url, urlIndex) => (
                <div key={`${itemIndex}-${urlIndex}`} className="aspect-video my-4 col-span-12 sm:col-span-6 lg:col-span-4">
                  <iframe allowFullScreen src={url} className="w-full h-full rounded-lg shadow-sm"></iframe>
                </div>
              ))
            )
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default Work;