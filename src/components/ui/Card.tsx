import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/functions/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "elevated";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  hover = false,
  padding = "md",
}) => {
  const baseClasses = cn(
    "rounded-2xl transition-all duration-300",
    {
      "bg-white border border-stone-300/30": variant === "default",
      "bg-white border-2 border-stone-300": variant === "bordered",
      "bg-white shadow-lg border border-stone-200/50": variant === "elevated",
    },
    {
      "p-0": padding === "none",
      "p-4": padding === "sm",
      "p-6 md:p-8": padding === "md",
      "p-8 md:p-12": padding === "lg",
    },
    hover &&
      "hover:border-stone-400/50 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1",
    className
  );

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
};

export default Card;
