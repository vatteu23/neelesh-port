import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import Typography from "@/components/Typography";
import { skills } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/types";

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
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                variants={fadeInUp}
                className="text-center space-y-4"
              >
                <div className="mb-4">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge text-stone-600 mb-3"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography
                    variant="h4"
                    className="font-semibold text-stone-800 mt-3"
                  >
                    {skill.title}
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="secondary"
                  className="leading-relaxed"
                >
                  {skill.description}
                </Typography>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </Card>
    </Container>
  );
};

export default SkillsOverview;
