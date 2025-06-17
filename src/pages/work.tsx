import Container from "@/components/Container";
import HeadWithMetas from "@/components/HeadWithMetas";
import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import { cn } from "@/functions/cn";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const checkScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const hasOverflow = scrollWidth > clientWidth;

    if (!hasOverflow) {
      setShowLeftFade(false);
      setShowRightFade(false);
      return;
    }

    setShowLeftFade(scrollLeft > 0);
    setShowRightFade(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    checkScrollState();
    const handleResize = () => checkScrollState();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    checkScrollState();
  }, [activeTab]);
  // Function to convert YouTube links to embed format
  const getYouTubeEmbedUrl = (url: string): string => {
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

  const getEmbedUrl = (url: string): string => {
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
        <div className="py-12">
          <div className="text-center mb-12">
            <Typography
              variant="small"
              mono
              className="mono-section-header mb-4"
            >
              // Portfolio Showcase
            </Typography>
          </div>

          <div className="relative mb-16">
            <div
              ref={scrollContainerRef}
              className="flex flex-row overflow-x-scroll gap-3 md:gap-4 mb-2 lg:mb-12 whitespace-nowrap py-2 pb-6 scrollbar-hide"
              onScroll={checkScrollState}
            >
              {filters.map((filter, index) => (
                <motion.button
                  key={index}
                  className={cn(
                    activeTab === filter.id
                      ? "text-stone-800 bg-stone-200/60 border-2 border-stone-200/60"
                      : "text-stone-600 hover:text-stone-800 hover:bg-stone-100 border-2 border-stone-300",
                    "cursor-pointer inline-block py-3 px-6 md:px-8 rounded-lg font-mono font-medium transition-all duration-300 ease-out ",
                    "text-nowrap min-w-fit tracking-wide text-sm relative hover:bg-stone-200/60"
                  )}
                  onClick={() => setActiveTab(filter.id)}
                  whileTap={{ y: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {filter.name.replace(/\s+/g, "_")}
                  {activeTab === filter.id && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-stone-800 rounded-full"
                      layoutId="activeFilterIndicator"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      style={{ x: "-50%" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            {/* Left fade gradient - only when scrolled right */}
            {showLeftFade && (
              <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-12 md:w-16 bg-gradient-to-r from-stone-100 via-stone-100/80 to-transparent z-10 transition-opacity duration-300"></div>
            )}
            {/* Right fade gradient - only when more content to scroll */}
            {showRightFade && (
              <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-12 md:w-16 bg-gradient-to-l from-stone-100 via-stone-100/80 to-transparent z-10 transition-opacity duration-300"></div>
            )}
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {Array.from(
              data.reduce((acc, item) => {
                const [key, urls] = Object.entries(item)[0];
                if (activeTab === "all" || activeTab === key.toLowerCase()) {
                  urls.forEach((url) => acc.add(url)); // Add unique URLs to the set
                }
                return acc;
              }, new Set<string>())
            ).map((url: string, urlIndex: number) => (
              <div
                key={urlIndex}
                className="aspect-video my-4 col-span-12 sm:col-span-6 lg:col-span-4 group"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-300/30 transition-all duration-300 ease-out hover:border-stone-400/50 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1">
                  <iframe
                    allowFullScreen
                    src={getEmbedUrl(url)}
                    className="w-full h-full transition-transform duration-300"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Work;
