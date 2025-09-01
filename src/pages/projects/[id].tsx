import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Layout from "@/components/Layout";
import HeadWithMetas from "@/components/HeadWithMetas";
import Container from "@/components/Container";
import Section from "@/components/ui/Section";
import Typography from "@/components/Typography";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { allProjects, Project } from "@/data/projects";
import { siteMetadata } from "@/data/portfolio";
import { getEmbedUrl, getVideoPlatform } from "@/utils/video";
import { ArrowLeft, ExternalLink, Play, Calendar, Tag, Users, Code, Video } from "lucide-react";

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProjectDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Find the project by ID from unified projects
  const project = allProjects.find(p => p.id === id);

  if (!project) {
    return (
      <Layout>
        <HeadWithMetas
          title={`Project Not Found - ${siteMetadata.title}`}
          description="The requested project could not be found."
          url={`${siteMetadata.siteUrl}/projects/not-found`}
        />
        <Container className="min-h-[80vh]">
          <Section
            subtitle="// Project Not Found"
            title="Project Not Found"
            padding="lg"
            container={false}
          >
            <div className="text-center">
              <Typography variant="p" className="text-stone-600 mb-8 max-w-2xl mx-auto">
                The project you're looking for doesn't exist.
              </Typography>
              <Button
                onClick={() => router.push("/projects")}
                variant="primary"
                className="inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Button>
            </div>
          </Section>
        </Container>
      </Layout>
    );
  }

  const isExternalVideo = project.videoUrl ? getVideoPlatform(project.videoUrl) !== "other" : false;

  return (
    <Layout>
      <HeadWithMetas
        title={`${project.title} - ${siteMetadata.title}`}
        description={project.description}
        url={`${siteMetadata.siteUrl}/projects/${project.id}`}
      />

      <Container className="min-h-[80vh] pt-12 md:pt-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Button
            onClick={() => router.push("/projects")}
            variant="ghost"
            className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-800 px-0 font-mono"
          >
           //
            Back to Projects
          </Button>
        </motion.div>

        <Typography
              variant="h2"
              wrapper="h1"
              className="mb-3"
           
            >
                 {project.title}
            </Typography>
            <Typography 
              variant="small"
              mono
              className="mono-section-header block mb-12"
           
            >
                 {project.category}
                 
            </Typography>

            {/* Video Section - Only show if project has video */}
            {project.videoUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-24 mx-auto"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-100 border-2 border-stone-300 shadow-lg">
                  {isExternalVideo ? (
                    <iframe
                      src={getEmbedUrl(project.videoUrl)}
                      className="w-full h-full"
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      className="w-full h-full object-cover"
                      src={project.videoUrl}
                      poster={project.thumbnailUrl}
                      controls
                      playsInline
                    />
                  )}
                </div>
              </motion.div>
            )}

            {/* Project Details Section - Redesigned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="flex items-center bg-gradient-to-br relative overflow-hidden py-8 rounded-2xl">
                <Container className="flex flex-col lg:flex-row gap-8 h-full w-full">
                  
                  {/* Main Details Card */}
                  <div className="lg:w-2/3 w-full bg-gradient-to-br from-stone-50 to-stone-300 relative z-10 rounded-3xl flex py-12 p-6 md:p-12 flex-col gap-y-8">
                    
                    {/* Header */}
                    <div className="border-b border-stone-400/30 pb-6">
                      <Typography
                        variant="small"
                        mono
                        className="mono-section-header block mb-4 text-stone-600"
                      >
                        // PROJECT DETAILS
                      </Typography>
                      
                      {/* Project Meta */}
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-4 py-2 bg-stone-900 text-white rounded-full text-sm font-mono">
                          {project.category}
                        </span>
                        {project.year && (
                          <span className="px-4 py-2 bg-white/60 backdrop-blur-sm text-stone-700 rounded-full text-sm font-mono border border-stone-300">
                            {project.year}
                          </span>
                        )}
                        {project.role && (
                          <span className="px-4 py-2 bg-white/60 backdrop-blur-sm text-stone-700 rounded-full text-sm font-mono border border-stone-300">
                            {project.role}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <Typography 
                        variant="p" 
                        className="text-stone-700 text-lg leading-relaxed mb-8 font-normal"
                      >
                        {project.description}
                      </Typography>
                    </div>

                    {/* Tools & Technologies */}
                    {project.tools && project.tools.length > 0 && (
                      <div>
                        <Typography 
                          variant="h6" 
                          className="mb-4 text-stone-800 font-semibold"
                        >
                          Tools & Technologies
                        </Typography>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="px-3 py-2 bg-white/70 backdrop-blur-sm text-stone-700 rounded-full text-sm font-mono border border-stone-300/50 hover:bg-white/90 transition-all duration-200"
                            >
                              {tool}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Side Stats Card */}
                  <div className="lg:w-1/3 w-full">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-stone-300/50 h-fit"
                    >
                      <Typography
                        variant="small"
                        mono
                        className="mono-section-header block mb-6 text-stone-600"
                      >
                        // PROJECT INFO
                      </Typography>
                      
                      <div className="space-y-6">
                        {/* Category */}
                        <div>
                          <Typography variant="small" className="text-stone-500 font-mono mb-1">
                            Category
                          </Typography>
                          <Typography variant="body" className="text-stone-800 font-medium">
                            {project.category}
                          </Typography>
                        </div>

                        {/* Year */}
                        {project.year && (
                          <div>
                            <Typography variant="small" className="text-stone-500 font-mono mb-1">
                              Year
                            </Typography>
                            <Typography variant="body" className="text-stone-800 font-medium">
                              {project.year}
                            </Typography>
                          </div>
                        )}

                        {/* Role */}
                        {project.role && (
                          <div>
                            <Typography variant="small" className="text-stone-500 font-mono mb-1">
                              Role
                            </Typography>
                            <Typography variant="body" className="text-stone-800 font-medium">
                              {project.role}
                            </Typography>
                          </div>
                        )}

                        {/* Client */}
                        {project.client && (
                          <div>
                            <Typography variant="small" className="text-stone-500 font-mono mb-1">
                              Client
                            </Typography>
                            <Typography variant="body" className="text-stone-800 font-medium">
                              {project.client}
                            </Typography>
                          </div>
                        )}

                        {/* Tools Count */}
                        {project.tools && project.tools.length > 0 && (
                          <div>
                            <Typography variant="small" className="text-stone-500 font-mono mb-1">
                              Technologies
                            </Typography>
                            <Typography variant="body" className="text-stone-800 font-medium">
                              {project.tools.length} Tool{project.tools.length !== 1 ? 's' : ''} Used
                            </Typography>
                          </div>
                        )}

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="pt-4 border-t border-stone-300/50">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <Typography variant="small" className="text-stone-600 font-mono">
                                Featured Project
                              </Typography>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                </Container>
              </div>
            </motion.div>
        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <Section
            subtitle="// Project Images"
           
            padding="lg"
            container={false}
          >
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images?.map((image, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="cursor-pointer group"
                    onClick={() => setSelectedImage(index)}
                  >
                    <Card
                      variant="bordered"
                      padding="none"
                      className="overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                    >
                      <div className="aspect-video bg-stone-100 relative overflow-hidden">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            // Fallback for failed image loads
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/800x450/1f2937/ffffff?text=${project.title}+${index + 1}`;
                          }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                        
                        {/* Play overlay for images */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                        
                        {/* Image number badge */}
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-mono text-stone-800">
                          {index + 1}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* Gallery info */}
              <motion.div variants={fadeInUp} className="text-center mt-8">
                <Typography variant="small" className="text-stone-500">
                  Click on any image to view it in full size
                </Typography>
              </motion.div>
            </motion.div>
          </Section>
        )}

      </Container>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.images?.[selectedImage] || ''}
                alt={`${project.title} - Image ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  // Fallback for failed image loads in modal
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/800x450/1f2937/ffffff?text=${project.title}+${selectedImage + 1}`;
                }}
              />
              
              {/* Modal controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                <button
                  onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                  disabled={selectedImage === 0}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                  {selectedImage + 1} of {project.images?.length || 0}
                </span>
                
                <button
                  onClick={() => setSelectedImage(Math.min((project.images?.length || 1) - 1, selectedImage + 1))}
                  disabled={selectedImage === (project.images?.length || 1) - 1}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
              
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ProjectDetails;
