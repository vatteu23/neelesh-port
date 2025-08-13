import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Typography from "@/components/Typography";
import { cn } from "@/functions/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  background?: "none" | "light" | "dark";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  container?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  title,
  subtitle,
  id,
  background = "none",
  padding = "lg",
  container = true,
}) => {
  const sectionClasses = cn(
    "relative",
    {
      "bg-transparent": background === "none",
      "bg-stone-50/50": background === "light",
      "bg-stone-800 text-white": background === "dark",
    },
    {
      "py-0": padding === "none",
      "py-8": padding === "sm",
      "py-12": padding === "md",
      "py-16 md:py-20": padding === "lg",
      "py-20 md:py-24": padding === "xl",
    },
    className
  );

  const content = (
    <>
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {subtitle && (
            <Typography
              variant="small"
              mono
              className="mono-section-header mb-4"
              color={background === "dark" ? "light" : "secondary"}
            >
              {subtitle}
            </Typography>
          )}
          {title && (
            <Typography
              variant="h2"
              className="font-light tracking-tight"
              color={background === "dark" ? "light" : "primary"}
            >
              {title}
            </Typography>
          )}
        </motion.div>
      )}
      {children}
    </>
  );

  return (
    <section id={id} className={sectionClasses}>
      {container ? <Container>{content}</Container> : content}
    </section>
  );
};

export default Section;
