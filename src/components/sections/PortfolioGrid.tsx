import React, { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/functions/cn";
import Card from "@/components/ui/Card";
import Typography from "@/components/Typography";
import {
  portfolioWork,
  PortfolioItem,
  WorkCategory,
  WorkSubcategory,
} from "@/data/portfolio";
import { getEmbedUrl } from "@/utils/video";

interface Filter {
  name: string;
  id: string;
  parentCategory?: string;
}

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const PortfolioGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  // Helper function to check if a category/subcategory has items with URLs
  const hasItemsWithUrls = (items: PortfolioItem[]): boolean => {
    return items.some((item) => item.url);
  };

  // Generate filters from portfolio data including subcategories (only for categories with URL items)
  const filters: Filter[] = [
    { name: "ALL", id: "all" },
    ...portfolioWork.flatMap((category) => {
      const categoryHasDirectItems = hasItemsWithUrls(category.items || []);

      // Check if any subcategories have items with URLs
      const subcategoriesWithUrls = (category.subcategories || []).filter(
        (subcategory) => hasItemsWithUrls(subcategory.items)
      );

      // Only include main category filter if it has direct items with URLs OR subcategories with URLs
      const shouldIncludeMainFilter =
        categoryHasDirectItems || subcategoriesWithUrls.length > 0;

      if (!shouldIncludeMainFilter) {
        return [];
      }

      const mainFilter = {
        name: category.category.toUpperCase().replace(/_/g, " "),
        id: category.category.toLowerCase(),
      };

      if (subcategoriesWithUrls.length > 0) {
        const subFilters = subcategoriesWithUrls.map((subcategory) => ({
          name: subcategory.name.toUpperCase().replace(/_/g, " "),
          id: `${category.category.toLowerCase()}_${subcategory.name.toLowerCase()}`,
          parentCategory: category.category.toLowerCase(),
        }));
        return [mainFilter, ...subFilters];
      }

      return [mainFilter];
    }),
  ];

  // Debug filters generation
  React.useEffect(() => {
    console.log("📊 Raw Portfolio Data:");
    console.log("- Portfolio work array length:", portfolioWork.length);
    console.log(
      "- Categories:",
      portfolioWork.map((cat) => ({
        category: cat.category,
        itemsCount: cat.items?.length || 0,
        subcategoriesCount: cat.subcategories?.length || 0,
      }))
    );

    const unrealCategory = portfolioWork.find((cat) =>
      cat.category.toLowerCase().includes("unreal")
    );
    console.log("- Unreal category found:", unrealCategory);

    console.log(
      "🎯 Generated Filters:",
      filters.map((f) => ({ name: f.name, id: f.id }))
    );

    const unrealFilters = filters.filter((f) => f.id.includes("unreal"));
    console.log("🎯 Unreal-related filters:", unrealFilters);
  }, []);

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

  // Enhanced portfolio item with category info
  interface EnhancedPortfolioItem extends PortfolioItem {
    categoryName: string;
    subcategoryName?: string;
    filterId: string;
  }

  // Get all items with category information
  const getAllEnhancedItems = (): EnhancedPortfolioItem[] => {
    return portfolioWork.flatMap((category) => {
      const mainItems = (category.items || []).map((item) => ({
        ...item,
        categoryName: category.category,
        filterId: category.category.toLowerCase(),
      }));

      const subItems = (category.subcategories || []).flatMap((subcategory) =>
        subcategory.items.map((item) => ({
          ...item,
          categoryName: category.category,
          subcategoryName: subcategory.name,
          filterId: `${category.category.toLowerCase()}_${subcategory.name.toLowerCase()}`,
        }))
      );

      return [...mainItems, ...subItems];
    });
  };

  // Get filtered portfolio items (only items with URLs)
  const getFilteredItems = (): EnhancedPortfolioItem[] => {
    const allItems = getAllEnhancedItems();

    // Only include items that have URLs
    const itemsWithUrls = allItems.filter((item) => item.url);

    if (activeTab === "all") {
      return itemsWithUrls;
    }

    // Check if this is a subcategory filter by looking at the filters array
    const currentFilter = filters.find((f) => f.id === activeTab);
    const isSubcategoryFilter = currentFilter?.parentCategory !== undefined;

    if (isSubcategoryFilter) {
      // For subcategory filters - exact match
      return itemsWithUrls.filter((item) => item.filterId === activeTab);
    }

    // For main category filters
    // Show items directly in this category OR items from its subcategories
    return itemsWithUrls.filter((item) => {
      const isDirectMatch = item.filterId === activeTab;
      const isSubcategoryMatch = item.filterId.startsWith(`${activeTab}_`);
      return isDirectMatch || isSubcategoryMatch;
    });
  };

  const filteredItems = getFilteredItems();

  // Comprehensive debug for development
  React.useEffect(() => {
    console.log("🔧 Portfolio Debug Info:");
    console.log("- Active tab:", activeTab);
    console.log("- Total filtered items:", filteredItems.length);

    if (activeTab === "unreal_engine_works") {
      console.log("🔍 UNREAL ENGINE WORKS DEBUG:");

      // Check all enhanced items
      const allItems = getAllEnhancedItems();
      console.log("- All enhanced items count:", allItems.length);

      // Find all Unreal-related items
      const unrealItems = allItems.filter(
        (item) =>
          item.categoryName.toLowerCase().includes("unreal") ||
          item.filterId.includes("unreal")
      );
      console.log("- Unreal-related items found:", unrealItems.length);
      console.log("- Unreal items details:", unrealItems);

      // Check filtering logic step by step
      const directMatches = allItems.filter(
        (item) => item.filterId === activeTab
      );
      const subcategoryMatches = allItems.filter((item) =>
        item.filterId.startsWith(`${activeTab}_`)
      );

      console.log(
        "- Direct matches (filterId === 'unreal_engine_works'):",
        directMatches.length
      );
      console.log(
        "- Subcategory matches (starts with 'unreal_engine_works_'):",
        subcategoryMatches.length
      );
      console.log("- Subcategory matches details:", subcategoryMatches);
    }
  }, [activeTab, filteredItems]);

  return (
    <div className="pt-8 pb-12">
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
                  ? "text-stone-800 bg-stone-200/60 border-2 border-stone-300"
                  : "text-stone-600 hover:text-stone-800 hover:bg-stone-100/80 border-2 border-stone-300/50",
                "cursor-pointer inline-block py-3 px-6 md:px-8 rounded-lg font-mono font-medium transition-colors duration-200 ease-in-out",
                "text-nowrap min-w-fit tracking-wider text-sm relative hover:border-stone-400/60"
              )}
              onClick={() => setActiveTab(filter.id)}
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
                    stiffness: 200,
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
            className="pointer-events-none absolute top-0 bottom-0 left-0 w-12 md:w-16 bg-gradient-to-r from-stone-100 via-stone-100/80 to-transparent z-10 transition-opacity duration-200 ease-in-out"
            aria-hidden="true"
          />
        )}
        {showRightFade && (
          <div
            className="pointer-events-none absolute top-0 bottom-0 right-0 w-12 md:w-16 bg-gradient-to-l from-stone-100 via-stone-100/80 to-transparent z-10 transition-opacity duration-200 ease-in-out"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Portfolio Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-12 gap-6 md:gap-8"
      >
        {filteredItems.map((item: EnhancedPortfolioItem, itemIndex: number) => {
          const handleCardClick = () => {
            if (item.url) {
              window.open(item.url, "_blank", "noopener,noreferrer");
            }
          };

          const categoryTag = item.subcategoryName
            ? `${item.categoryName.replace(
                /_/g,
                " "
              )} / ${item.subcategoryName.replace(/_/g, " ")}`
            : item.categoryName.replace(/_/g, " ");

          return (
            <motion.div
              key={`${activeTab}-${itemIndex}`}
              variants={fadeInUp}
              className="my-4 col-span-12 sm:col-span-6 lg:col-span-4"
            >
              <Card
                variant="bordered"
                hover={!!item.url}
                padding="none"
                className={cn(
                  "overflow-hidden h-full group bg-stone-200/30",
                  item.url && "cursor-pointer"
                )}
                {...(item.url && { onClick: handleCardClick })}
              >
                {/* Category Header */}
                <div className="px-4 py-3  border-b border-stone-300/30">
                  <div className="flex items-center justify-between">
                    <Typography
                      variant="small"
                      mono
                      className="text-stone-600 tracking-wider text-xs"
                    >
                      // {categoryTag.replace(/\s+/g, "_").toUpperCase()}
                    </Typography>
                  </div>
                </div>

                {/* Video Content */}
                {item.type === "video" && item.url && (
                  <div className="relative aspect-video bg-stone-100">
                    <iframe
                      allowFullScreen
                      src={getEmbedUrl(item.url)}
                      className="w-full h-full"
                      title={item.title || `Portfolio video ${itemIndex + 1}`}
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Project/Text Content Area */}
                {(item.type === "project" || item.type === "text") && (
                  <div className="min-h-[200px] bg-gradient-to-br from-stone-50 to-stone-100 p-6 flex flex-col justify-center">
                    <div className="text-center space-y-4">
                      {item.title && (
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          className="text-stone-800"
                        >
                          {item.title}
                        </Typography>
                      )}
                      {item.description && (
                        <Typography
                          variant="p"
                          className="text-stone-600 leading-relaxed"
                        >
                          {item.description}
                        </Typography>
                      )}
                    </div>
                  </div>
                )}

                {/* Content Footer */}
                <div className="p-4 ">
                  {item.type === "video" && item.title && (
                    <Typography
                      variant="h6"
                      fontWeight="semibold"
                      className="text-stone-800 mb-2 leading-snug"
                    >
                      {item.title}
                    </Typography>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.role && (
                      <Typography
                        variant="small"
                        mono
                        className="text-xs px-2 py-1 bg-stone-700 text-white rounded"
                      >
                        {item.role.replace(/\s+/g, "_")}
                      </Typography>
                    )}
                    <Typography
                      variant="small"
                      mono
                      className="text-xs px-2 py-1 bg-stone-200/80 text-stone-700 rounded"
                    >
                      {item.type.toUpperCase()}
                    </Typography>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-stone-500">No content found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
