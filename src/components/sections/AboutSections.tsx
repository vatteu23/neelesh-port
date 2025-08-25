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

// Bio Section Component
export const BioSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0 md:space-x-20">
            {/* Profile Image */}
            <motion.div variants={fadeInUp} className="w-full md:w-1/3">
              <div className="relative group">
                <Image
                  src="/images/profile.jpeg"
                  alt={`${personalInfo.name} - Profile Picture`}
                  width={400}
                  height={400}
                  className="rounded-2xl border-2 border-stone-300/30 transition-transform transform group-hover:scale-105 w-full shadow-lg"
                  priority
                />
              </div>
            </motion.div>

            {/* Enhanced Bio Content */}
            <motion.div
              variants={fadeInUp}
              className="w-full md:w-2/3 space-y-8"
            >
              <div className="space-y-4">
                <Typography
                  variant="small"
                  mono
                  className="mono-section-header mb-2"
                >
                  // A Little About Me
                </Typography>
                <div className="w-20 h-1 bg-gradient-to-r from-stone-400 to-stone-600 rounded-full"></div>
              </div>

              <div className="space-y-6">
                <Typography
                  variant="p"
                  color="secondary"
                  className="leading-relaxed text-lg text-stone-600"
                >
                  {personalInfo.bio}
                </Typography>

                {/* Key highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
                  <div className="text-center p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <Typography
                      variant="h4"
                      className="font-black text-stone-800"
                    >
                      2+
                    </Typography>
                    <Typography variant="small" className="text-stone-600">
                      Years Experience
                    </Typography>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <Typography
                      variant="h4"
                      className="font-black text-stone-800"
                    >
                      6+
                    </Typography>
                    <Typography variant="small" className="text-stone-600">
                      Major Films
                    </Typography>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <Typography
                      variant="h4"
                      className="font-black text-stone-800"
                    >
                      3
                    </Typography>
                    <Typography variant="small" className="text-stone-600">
                      VP Short Films
                    </Typography>
                  </div>
                </div>
              </div>

              <Button
                href={personalInfo.linkedIn}
                external
                variant="primary"
                size="lg"
                mono
                className="mt-8 rounded-full"
              >
                Connect_with_me
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
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
                <Typography variant="h4" className="font-semibold">
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
