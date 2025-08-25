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
    "rounded-2xl transition-colors duration-200 ease-in-out",
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
    hover && "hover:border-stone-400/50 hover:shadow-lg",
    className
  );

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
};

export default Card;
