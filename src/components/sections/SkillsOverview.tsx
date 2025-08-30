import React from "react";
import { motion, Variants } from "framer-motion";
import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import Typography from "@/components/Typography";
import { skills } from "@/data/portfolio";

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

const SkillsOverview: React.FC = () => {
  return (
    <Container className="mb-24">
      <Card variant="bordered" padding="lg">
        <section className="text-stone-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Typography
              variant="small"
              mono
              className="mono-section-header mb-4"
            >
              // Skills Overview
            </Typography>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                variants={fadeInUp}
                className="group relative"
              >
              
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 pl-8 pr-6 py-6">
                  {/* Bold Number */}
                  <div className="flex-shrink-0">
                    <Typography
                      variant="h2"
                      className="font-black text-4xl md:text-5xl text-stone-200 group-hover:text-stone-900 transition-all duration-300 ease-in-out leading-none"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <Typography
                      variant="h3"
                      className="font-bold text-stone-600 leading-tight group-hover:text-stone-900 transition-colors"
                    >
                      {skill.title}
                    </Typography>
                    <Typography
                      variant="p"
                      color="secondary"
                      className="leading-relaxed text-stone-600 text-lg"
                    >
                      {skill.description}
                    </Typography>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </Card>
    </Container>
  );
};

export default SkillsOverview;
