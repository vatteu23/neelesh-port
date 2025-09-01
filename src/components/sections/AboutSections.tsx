import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Typography from "@/components/Typography";
import { personalInfo, experience, education } from "@/data/portfolio";

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

// About Hero Section Component
export const AboutHero: React.FC = () => {
  return (
    <div className="flex items-center  bg-gradient-to-br relative overflow-hidden py-8 rounded-2xl">
      <Container className="flex md:flex-row flex-col gap-6 h-full w-full">
        {/* Left Section - Personal Story & Journey */}
        <div className="md:w-2/3 w-full bg-gradient-to-br border border-stone-200 from-stone-50 to-stone-300 min-h-[40vh] relative z-10 rounded-3xl flex py-12 p-4 md:p-12 flex-col gap-y-12 justify-between">
          <div>
            <Typography
              variant="h1"
              wrapper="h1"
              className="mb-6 font-bold tracking-tight"
              color="primary"
            >
              My{" "}
              <span className="bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent">
                Journey
              </span>
            </Typography>
            <Typography
              variant="p"
              color="secondary"
              className="leading-relaxed text-lg text-stone-600 mb-6"
            >
              From traditional VFX at Matrix VFX on major Indian films to cutting-edge Virtual Production at Humber & Seneca. A Silver Medal graduate with a passion for real-time storytelling.
            </Typography>
            <Typography
              variant="small"
              mono
              className="text-stone-500 tracking-widest uppercase text-sm md:text-base"
            >
              [ BFA SILVER MEDAL • 3D ANIMATION • VIRTUAL PRODUCTION • UNREAL ENGINE ]
            </Typography>
          </div>
          
          <div className="flex flex-row flex-wrap gap-4">
            <Button
              variant="outline"
              size="sm"
              mono
              href={personalInfo.linkedIn}
              external
              className="w-full sm:w-auto"
            >
              Connect with me
            </Button>
            <Button
              variant="primary"
              size="sm"
              color="primary"
              mono
              href="/projects"
              className="w-full sm:w-auto"
            >
              View my work
            </Button>
          </div>
        </div>

        {/* Right Section - Interactive Career Highlights */}
        <div className="md:w-1/3 w-full flex flex-col min-h-[50vh] group">
          <div className="flex gap-4 flex-1 transition-all duration-500 group-hover:flex-[0.6]">
            <div className="w-1/2  border border-stone-200 bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl transition-all duration-300 flex flex-col justify-center p-4">
              <Typography variant="small" className="text-stone-600 font-medium mb-2 text-sm">
                Major Films
              </Typography>
              <Typography variant="h2" className="text-stone-800 font-semibold text-3xl">
                6+
              </Typography>
              <Typography variant="small" className="text-stone-500 text-xs mt-1">
                Skanda, Kushi, Bhagavanth Kesari
              </Typography>
            </div>
            <div className="w-1/2  border border-stone-300 bg-gradient-to-br from-stone-200 to-stone-300 rounded-2xl transition-all duration-300 flex flex-col justify-center p-4">
              <Typography variant="small" className="text-stone-600 font-medium mb-2 text-sm">
                VP Projects
              </Typography>
              <Typography variant="h2" className="text-stone-800 font-semibold text-3xl">
                3
              </Typography>
              <Typography variant="small" className="text-stone-500 text-xs mt-1">
                Screech, No Signal, SAPPED
              </Typography>
            </div>
          </div>
          <div className="mt-4  border border-stone-400 bg-gradient-to-br from-stone-100 to-stone-400 rounded-2xl transition-all duration-300 flex flex-col justify-center p-4 flex-1">
            <Typography variant="small" className="text-stone-600 font-medium mb-2 text-sm">
              Education
            </Typography>
            <Typography variant="h2" className="text-stone-800 font-semibold text-3xl">
              4
            </Typography>
            <Typography variant="small" className="text-stone-500 text-xs mt-1">
              Degrees & Certificates
            </Typography>
          </div>
          
          {/* CTA pill that appears below the pills on hover */}
          <div className="border border-stone-400 bg-gradient-to-br mt-4 md:mt-0 group-hover:mt-4 from-stone-300 to-stone-500 rounded-2xl p-4 md:p-0 group-hover:p-4 h-[100px] md:h-0 opacity-100 md:opacity-0 group-hover:h-[100px] cursor-pointer group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden" onClick={() => window.location.href = '/projects'}>
            <div className="flex items-center justify-between h-full">
              <div>
                <Typography variant="small" className="text-stone-100 font-medium mb-1 text-sm">
                  Explore
                </Typography>
                <Typography variant="h3" className="text-white font-semibold text-2xl">
                  My projects
                </Typography>
              </div>
              <Typography variant="small" className="text-stone-200 text-lg">
                →
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};


// Experience Section Component
export const ExperienceSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-20 text-stone-800">
          {/* Header */}
          <div className="w-full md:w-1/6">
            <Typography
              variant="h3"
              mono
              className="sticky top-24 font-bold tracking-widest text-stone-500"
            >
              EXPERIENCE
            </Typography>
          </div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full md:w-2/3 space-y-12"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeInUp}
                className="space-y-4 border-l-2 border-stone-200 pl-6 relative"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-stone-400 rounded-full" />
                <Typography
                  variant="h4"
                  mono
                  className="font-bold text-stone-800"
                >
                  {exp.company}
                </Typography>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 space-y-2 sm:space-y-0">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge bg-stone-800 text-stone-700 border-stone-800"
                  >
                    {exp.position}
                  </Typography>
                  <Typography
                    variant="small"
                    mono
                    color="secondary"
                    className="tracking-wider opacity-75"
                  >
                    {exp.period}
                  </Typography>
                </div>
                <ul className="list-disc space-y-3 pl-6 mt-4">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-stone-600 leading-relaxed">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

// Education Section Component
export const EducationSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-20 text-stone-800">
          {/* Header */}
          <div className="w-full md:w-1/6">
            <Typography
              variant="h3"
              mono
              className="sticky top-24 font-bold tracking-widest text-stone-500"
            >
              EDUCATION
            </Typography>
          </div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full md:w-2/3 space-y-12"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={fadeInUp}
                className="space-y-4 border-l-2 border-stone-200 pl-6 relative"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-stone-400 rounded-full" />
                <Typography variant="h4" className="font-semibold break-words">
                  {edu.degree}
                </Typography>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 space-y-2 sm:space-y-0">
                  {edu.specialization && (
                    <Typography
                      variant="small"
                      mono
                      className="mono-badge text-stone-700"
                    >
                      {edu.specialization}
                    </Typography>
                  )}
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge text-stone-700"
                  >
                    {edu.institution}
                  </Typography>
                  <Typography
                    variant="small"
                    mono
                    color="secondary"
                    className="tracking-wider opacity-75"
                  >
                    {edu.period}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

// Grid-style Bio Section (photo, copy, and highlight boxes)
export const BioGridSection: React.FC = () => {
  return (
      <Container className="py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Photo */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200">
            <Image
              src="/images/profile.webp"
              alt={`${personalInfo.name} - Profile Picture`}
              width={1000}
              height={1000}
              className="w-full h-full object-cover aspect-square md:aspect-auto"
              priority
            />
          </div>

          {/* Bio copy */}
          <div className="md:col-span-2 rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-100 to-stone-200 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <Typography variant="h3" className="mb-3 font-bold tracking-tight">
                About Me
              </Typography>
              <Typography variant="p" color="secondary" className="leading-relaxed">
                {personalInfo.bio}
              </Typography>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="md" mono href="/projects" className="sm:w-auto">
                View my work
              </Button>
              <Button
                variant="outline"
                size="md"
                mono
                href={personalInfo.linkedIn}
                external
                className="sm:w-auto"
              >
                Connect on LinkedIn
              </Button>
            </div>
          </div>

        </div>
      </Container>
    
  );
};
