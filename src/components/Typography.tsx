import { cn } from "@/functions/cn";
import React, { ReactNode } from "react";

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span";
  className?: string;
  children: ReactNode;
  fontWeight?:
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold";
  wrapper?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span";
  color?: "dark" | "light" | "primary" | "secondary" | "accent" | "muted";
  offDarkMode?: boolean;
  mono?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  fontWeight,
  wrapper,
  color,
  offDarkMode,
  mono,
}) => {
  const Tag = wrapper || variant;

  let defaultClasses = offDarkMode
    ? ""
    : "text-stone-800 transition-all duration-300 ease-in-out ";

  if (mono) {
    defaultClasses += "font-mono ";
  }

  switch (variant) {
    case "h1":
      defaultClasses +=
        "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight";
      break;
    case "h2":
      defaultClasses +=
        "text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight";
      break;
    case "h3":
      defaultClasses +=
        "text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight";
      break;
    case "h4":
      defaultClasses += "text-xl md:text-2xl font-semibold leading-snug";
      break;
    case "h5":
      defaultClasses += "text-lg md:text-xl font-semibold leading-snug";
      break;
    case "h6":
      defaultClasses += "text-base md:text-lg font-semibold leading-snug";
      break;
    case "p":
      defaultClasses += "text-base md:text-lg leading-relaxed";
      break;
    case "span":
      defaultClasses += "text-base leading-normal";
      break;
    case "small":
      defaultClasses += "text-sm text-stone-600";
      break;
    default:
      break;
  }

  switch (fontWeight) {
    case "extralight":
      defaultClasses += " font-extralight";
      break;
    case "light":
      defaultClasses += " font-light";
      break;
    case "normal":
      defaultClasses += " font-normal";
      break;
    case "medium":
      defaultClasses += " font-medium";
      break;
    case "semibold":
      defaultClasses += " font-semibold";
      break;
    case "bold":
      defaultClasses += " font-bold";
      break;
    case "extrabold":
      defaultClasses += " font-extrabold";
      break;
    default:
      break;
  }

  switch (color) {
    case "dark":
      defaultClasses += " text-stone-800";
      break;
    case "light":
      defaultClasses += " !text-white";
      break;
    case "primary":
      defaultClasses += " !text-stone-800";
      break;
    case "secondary":
      defaultClasses += " !text-stone-600";
      break;
    case "accent":
      defaultClasses += " !text-stone-500";
      break;
    case "muted":
      defaultClasses += " !text-stone-500/70";
      break;
    default:
      break;
  }

  const mergedClasses = cn(defaultClasses, className);
  return <Tag className={mergedClasses}>{children}</Tag>;
};

export default Typography;
