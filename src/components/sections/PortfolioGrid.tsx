import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/functions/cn";
import { portfolioWork } from "@/data/portfolio";
import { getEmbedUrl } from "@/utils/video";
import { fadeInUp, staggerContainer } from "@/types";

interface Filter {
  name: string;
  id: string;
}

const PortfolioGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  // Generate filters from portfolio data
  const filters: Filter[] = [
    { name: "ALL", id: "all" },
    ...portfolioWork.map((item) => ({
      name: item.category.toUpperCase().replace(/_/g, " "),
      id: item.category.toLowerCase(),
    })),
  ];

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

  // Get filtered videos
  const getFilteredVideos = () => {
    if (activeTab === "all") {
      return portfolioWork.flatMap((item) => item.urls);
    }

    const filteredCategory = portfolioWork.find(
      (item) => item.category.toLowerCase() === activeTab
    );
    return filteredCategory ? filteredCategory.urls : [];
  };

  const filteredVideos = getFilteredVideos();

  return (
    <div className="py-12">
      {/* Filter Section */}
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
                "cursor-pointer inline-block py-3 px-6 md:px-8 rounded-lg font-mono font-medium transition-all duration-300 ease-out",
                "text-nowrap min-w-fit tracking-wide text-sm relative hover:bg-stone-200/60"
              )}
              onClick={() => setActiveTab(filter.id)}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-pressed={activeTab === filter.id}
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

        {/* Fade gradients */}
        {showLeftFade && (
          <div
            className="pointer-events-none absolute top-0 bottom-0 left-0 w-12 md:w-16 bg-gradient-to-r from-stone-100 via-stone-100/80 to-transparent z-10 transition-opacity duration-300"
            aria-hidden="true"
          />
        )}
        {showRightFade && (
          <div
            className="pointer-events-none absolute top-0 bottom-0 right-0 w-12 md:w-16 bg-gradient-to-l from-stone-100 via-stone-100/80 to-transparent z-10 transition-opacity duration-300"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Video Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-12 gap-6 md:gap-8"
      >
        {filteredVideos.map((url: string, urlIndex: number) => (
          <motion.div
            key={`${activeTab}-${urlIndex}`}
            variants={fadeInUp}
            className="aspect-video my-4 col-span-12 sm:col-span-6 lg:col-span-4 group"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-300/30 transition-all duration-300 ease-out hover:border-stone-400/50 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1">
              <iframe
                allowFullScreen
                src={getEmbedUrl(url)}
                className="w-full h-full transition-transform duration-300"
                title={`Portfolio video ${urlIndex + 1}`}
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-stone-500">No videos found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
