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
    Short_Films: [
      "https://www.youtube.com/embed/KG01kavjO9I?si=CvVD8PqbQXlspt5Z",
      "https://www.youtube.com/embed/oMhbEONjGR8?si=Nf5WYMev6YX8071T",
      "https://www.youtube.com/embed/gIBOr6Bxn3Q?si=JHYV8jzGl6dzL1FB",
      "https://www.youtube.com/embed/dsnyvg0WzWc?si=hOEaCRFc1EvAgPL0",
      "https://www.youtube.com/embed/MhcQlvBW_7s?si=MNkKOniqU5iJzWR1",
      "https://www.youtube.com/embed/l_9t1ivExho?si=P9iH7X3mQjdn2M_i",
    ],
  },
  {
    animation: [
      "https://youtu.be/762Lzi9MXHE",
      "https://youtu.be/_W-7NwT6Xfg",
      "https://youtu.be/MFHxhONwKBs",
      "https://youtu.be/ntifEGsf-5c",
      "https://youtu.be/udUM08G8lIA",
      "https://youtu.be/sRIPtA_Yr0M",
      "https://youtu.be/sRIPtA_Yr0M",
      "https://youtu.be/7ABfo5kQYs0",
      "https://youtube.com/shorts/kE5ItZvMnKM",
      "https://youtube.com/shorts/UpIVRTlydMY",
      "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
    ],
  },
  {
    Demo_Reel: [
      "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
    ],
  },
  {
    modeling: [
      "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
    ],
  },
  {
    texturing: [
      "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
    ],
  },
  {
    unreal_engine: [
      "https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0",
    ],
  },
  { Dynamics: ["https://youtu.be/QMt5sEOaA_I"] },
];
interface Filter {
  name: string;
  id: string;
}

const filters: Filter[] = [
  { name: "ALL", id: "all" },
  ...Object.keys(data.reduce((acc, item) => ({ ...acc, ...item }), {})).map(
    (key) => ({
      name: key.toUpperCase().replace(/_/g, " "),
      id: key.toLowerCase(),
    })
  ),
];

const Work = () => {
  const [activeTab, setActiveTab] = useState("all");
  // Function to convert YouTube links to embed format
  const getYouTubeEmbedUrl = (url) => {
    let videoId;

    if (url.includes("youtube.com/embed")) {
      return url;
    } else if (url.includes("youtube.com/shorts")) {
      videoId = url.split("shorts/")[1].split("?")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch")) {
      const urlParams = new URLSearchParams(url.split("?")[1]);
      videoId = urlParams.get("v");
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  const getEmbedUrl = (url) => {
    if (!url) return "";

    // Return Vimeo URLs as-is since they're already in embed format
    if (url.includes("player.vimeo.com")) {
      return url;
    }

    // Convert YouTube URLs to embed format
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return getYouTubeEmbedUrl(url);
    }

    return url;
  };
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
                  activeTab === filter.id
                    ? "bg-blue-600 text-neutral-100"
                    : "text-blue-600",
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
          {Array.from(
            data.reduce((acc, item) => {
              const [key, urls] = Object.entries(item)[0];
              if (activeTab === "all" || activeTab === key.toLowerCase()) {
                urls.forEach((url) => acc.add(url)); // Add unique URLs to the set
              }
              return acc;
            }, new Set())
          ).map((url, urlIndex) => (
            <div
              key={urlIndex}
              className="aspect-video my-4 col-span-12 sm:col-span-6 lg:col-span-4"
            >
              <iframe
                allowFullScreen
                src={getEmbedUrl(url)}
                className="w-full h-full rounded-lg shadow-sm"
              ></iframe>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Work;
