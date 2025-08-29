import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Section from "@/components/ui/Section";
import Typography from "@/components/Typography";
import Card from "@/components/ui/Card";
import { cn } from "@/functions/cn";
import { unrealProjects, UnrealProject } from "@/data/unreal-projects";
import { siteMetadata } from "@/data/portfolio";
import { useRouter } from "next/router";
import { getEmbedUrl, getVideoPlatform, getVideoThumbnail } from "@/utils/video";

const Projects: React.FC = () => {
  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const handleProjectClick = (project: UnrealProject) => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <Layout>
      <Container className="min-h-screen py-8">
        <Section padding="lg">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Typography variant="h1" className="mb-4 text-stone-800">
              // PROJECTS
            </Typography>
            <Typography variant="p" className="text-stone-600 max-w-2xl mx-auto">
              A collection of Unreal Engine projects showcasing various aspects of game development, 
              from advanced materials and lighting to interactive gameplay systems.
            </Typography>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {unrealProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isHovered={hoveredProject === project.id}
                  onHover={() => setHoveredProject(project.id)}
                  onLeave={() => setHoveredProject(null)}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </Section>
      </Container>
    </Layout>
  );
};

interface ProjectCardProps {
  project: UnrealProject;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isHovered,
  onHover,
  onLeave,
  onClick,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isExternalVideo = getVideoPlatform(project.videoUrl) !== "other";

  // Play video on hover (only for local videos)
  React.useEffect(() => {
    if (videoRef.current && !isExternalVideo) {
      if (isHovered) {
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions gracefully
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, isExternalVideo]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="cursor-pointer group overflow-hidden rounded-2xl bg-white border-2 border-stone-300 hover:border-stone-400/50 hover:shadow-lg transition-all duration-200 ease-in-out mb-8"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Video Container */}
      <div className="relative aspect-video overflow-hidden">
        {isExternalVideo ? (
          // External video (YouTube/Vimeo) - show iframe player on hover
          <div className="relative w-full h-full">
            {/* Thumbnail (shown when not hovering) */}
            <img
              src={getVideoThumbnail(project.videoUrl) || project.thumbnailUrl}
              alt={project.title}
              className={cn(
                "w-full h-full object-cover transition-opacity duration-300",
                isHovered ? "opacity-0" : "opacity-100"
              )}
            />
            
            {/* Video Player (shown when hovering) */}
            <div className={cn(
              "absolute inset-0 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}>
              {getVideoPlatform(project.videoUrl) === "youtube" ? (
                <iframe
                  src={`${getEmbedUrl(project.videoUrl)}?autoplay=1&mute=1&loop=1&playlist=${project.videoUrl.split("/").pop()?.split("?")[0] || ""}&start=0&end=20&controls=0&modestbranding=1&rel=0`}
                  className="w-full h-full"
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <iframe
                  src={`${getEmbedUrl(project.videoUrl)}&autoplay=1&muted=1&loop=1&controls=0`}
                  className="w-full h-full"
                  title={project.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )}
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
              "absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-stone-800 transition-opacity duration-300",
              isHovered ? "opacity-0" : "opacity-100"
            )}>
              PLAY PREVIEW
            </div>
          </div>
        ) : (
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
        )}
      </div>

      {/* Title Section */}
      <div className="p-6">
        <Typography variant="h5" fontWeight="semibold" className="mb-3 text-stone-800 leading-tight">
          {project.title}
        </Typography>
        <Typography variant="small" className="text-stone-600 font-mono tracking-wider">
          // {project.category.toUpperCase().replace(/\s+/g, "_")}
        </Typography>
      </div>
    </motion.div>
  );
};

export default Projects;
