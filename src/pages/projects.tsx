import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Section from "@/components/ui/Section";
import Typography from "@/components/Typography";
import Card from "@/components/ui/Card";
import { cn } from "@/functions/cn";
import { allProjects, Project, getProjectFilters, ProjectFilter, filterProjects } from "@/data/projects";
import { siteMetadata } from "@/data/portfolio";
import { useRouter } from "next/router";
import { getEmbedUrl, getVideoPlatform, getVideoThumbnail } from "@/utils/video";
import HeadWithMetas from "@/components/HeadWithMetas";

const Projects: React.FC = () => {
  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleProjectClick = (project: Project) => {
    router.push(`/projects/${project.id}`);
  };

  // Get available filters
  const filters = getProjectFilters();

  // Filter projects based on active filter
  const filteredProjects = filterProjects(activeFilter);

  return (
    <Layout>
       <HeadWithMetas
        title={`Projects - ${siteMetadata.title}`}
        description="Explore Neelesh Reddy's portfolio of 3D work, animations, VFX projects and Unreal Engine creations."
        url={`${siteMetadata.siteUrl}/projects`}
      />
      <Container className="min-h-screen py-8">
        <Section padding="lg">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            
            <Typography
              variant="small"
              mono
              className="mono-section-header block mb-8"
           
            >
              // PROJECTS
            </Typography>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-mono transition-all duration-200",
                    "border border-stone-300 hover:border-stone-400",
                    activeFilter === filter.id
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-white text-stone-700 hover:bg-stone-50"
                  )}
                >
                  {filter.label}
                  <span className="ml-2 text-xs opacity-75">
                    ({filter.count})
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Typography variant="small" className="text-stone-500 font-mono">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </Typography>
            </motion.div>
          
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isHovered={hoveredProject === project.id}
                    onHover={() => setHoveredProject(project.id)}
                    onLeave={() => setHoveredProject(null)}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center py-16"
            >
              <Typography variant="h3" className="mb-4 text-stone-500">
                No projects found
              </Typography>
              <Typography variant="p" className="text-stone-400 mb-6">
                Try selecting a different filter to see more projects.
              </Typography>
              <button
                onClick={() => setActiveFilter("all")}
                className="px-4 py-2 bg-stone-900 text-white rounded-full text-sm font-mono hover:bg-stone-800 transition-colors"
              >
                Show All Projects
              </button>
            </motion.div>
          )}
        </Section>
      </Container>
    </Layout>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
  onClick,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isExternalVideo = project.videoUrl ? getVideoPlatform(project.videoUrl) !== "other" : false;

  // Play video on hover (only for local videos)
  React.useEffect(() => {
    if (videoRef.current && project.videoUrl && !isExternalVideo) {
      if (isHovered) {
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions gracefully
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, isExternalVideo, project.videoUrl]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="cursor-pointer group overflow-hidden rounded-2xl   hover:shadow-lg transition-all duration-300 ease-in-out border-2 border-stone-300"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Video Container */}
      <div className="relative aspect-video overflow-hidden">
        {project.videoUrl && isExternalVideo ? (
          // External video (YouTube/Vimeo) - show iframe player on hover
          <div className="relative w-full h-full group">
            {/* Thumbnail (shown when not hovering) */}
            <img
              src={getVideoThumbnail(project.videoUrl) || project.thumbnailUrl || `https://via.placeholder.com/480x360/f5f5f4/a8a29e?text=${encodeURIComponent(project.title)}`}
              alt={project.title}
              className={cn(
                "w-full h-full object-cover transition-opacity duration-300",
                isHovered ? "opacity-0" : "opacity-100"
              )}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                const isVimeo = project.videoUrl?.includes('vimeo');
                const fallbackText = isVimeo ? 'Vimeo Video' : encodeURIComponent(project.title);
                target.src = `https://via.placeholder.com/480x360/1f2937/ffffff?text=${fallbackText}`;
              }}
            />
            
            {/* Video Player (shown when hovering) */}
            <div className={cn(
              "absolute inset-0 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}>
              {isHovered && project.videoUrl && getVideoPlatform(project.videoUrl) === "youtube" ? (
                <iframe
                  src={`${getEmbedUrl(project.videoUrl)}?autoplay=1&mute=1&loop=1&playlist=${project.videoUrl.split("/").pop()?.split("?")[0] || ""}&start=0&end=20&controls=0&modestbranding=1&rel=0`}
                  className="w-full h-full"
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : isHovered && project.videoUrl ? (
                <iframe
                  src={`${getEmbedUrl(project.videoUrl)}&autoplay=1&muted=1&loop=1&controls=0`}
                  className="w-full h-full"
                  title={project.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : null}
            </div>
            
            {/* Play button overlay (shown when not hovering) */}
            <div className={cn(
              "absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300",
              isHovered ? "opacity-0" : "opacity-100"
            )}>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
              </div>
            </div>
            
            {/* Hover indicator */}
            <div className={cn(
              "absolute top-4 right-4 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-stone-800 transition-opacity duration-300",
              isHovered ? "opacity-0" : "opacity-100"
            )}>
              PLAY PREVIEW
            </div>
          </div>
        ) : project.videoUrl && !isExternalVideo ? (
          // Local video
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={project.videoUrl}
            poster={project.thumbnailUrl}
            muted
            loop
            playsInline
          />
        ) : (
          // No video - show static image/placeholder
          <div className="relative w-full h-full bg-gradient-to-br from-stone-100 to-stone-200">
            <img
              src={project.thumbnailUrl || `https://via.placeholder.com/800x450/f5f5f4/a8a29e?text=${encodeURIComponent(project.title)}`}
              alt={project.title}
              className={cn(
                "w-full h-full object-cover transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://via.placeholder.com/480x360/1f2937/ffffff?text=${encodeURIComponent(project.title)}`;
              }}
            />
            
            {/* Static indicator for non-video items */}
            <div className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-stone-800">
              {project.category.toUpperCase()}
            </div>
          </div>
        )}
      </div>

      {/* Title Section */}
      <div className="p-6">
        <Typography variant="h6" fontWeight="normal" className="mb-3 text-stone-800 leading-tight">
          {project.title}
        </Typography>
        <Typography variant="small" className="text-stone-800 text-xs font-mono py-2 px-3 rounded-full border-2 border-stone-00 group-hover:bg-stone-800 group-hover:text-white transition-all duration-300 ease-in-out">
           {project.category.toUpperCase().replace(/\s+/g, "_")}
        </Typography>
        
        {/* Tools */}
        {/* <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.slice(0, 2).map((tool, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 2 && (
            <span className="px-2 py-1 bg-stone-200 text-stone-600 text-xs rounded">
              +{project.tools.length - 2} more
            </span>
          )}
        </div> */}
      </div>
    </motion.div>
  );
};

export default Projects;
