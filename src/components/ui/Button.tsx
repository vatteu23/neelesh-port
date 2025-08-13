import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/functions/cn";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  mono?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      className,
      href,
      external = false,
      mono = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "relative inline-flex items-center justify-center font-semibold",
      "transition-all duration-200 transform focus:outline-none",
      "focus:ring-2 focus:ring-stone-400 focus:ring-offset-2",
      "rounded-lg text-center min-w-fit",
      mono && "font-mono tracking-wide",
      {
        "px-3 py-2 text-sm": size === "sm",
        "px-6 py-3 text-sm md:text-base": size === "md",
        "px-8 py-4 text-base md:text-lg": size === "lg",
      },
      {
        "bg-stone-800 hover:bg-stone-700 text-white border-2 border-stone-800 hover:border-stone-700":
          variant === "primary",
        "bg-stone-200 hover:bg-stone-300 text-stone-800 border-2 border-stone-200 hover:border-stone-300":
          variant === "secondary",
        "bg-transparent hover:bg-stone-100 text-stone-600 hover:text-stone-800 border-2 border-stone-300 hover:border-stone-400":
          variant === "outline",
        "bg-transparent hover:bg-stone-100 text-stone-600 hover:text-stone-800":
          variant === "ghost",
      },
      className
    );

    const motionProps = {
      whileHover: { y: -2, scale: 1.02 },
      whileTap: { y: 0, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 17 },
      ...props,
    };

    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...motionProps}
        >
          {children}
          {/* Active indicator dot */}
          <motion.div
            className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100"
            initial={false}
            style={{ x: "-50%" }}
            transition={{ duration: 0.2 }}
          />
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClasses}
        {...motionProps}
      >
        {children}
        {/* Active indicator dot */}
        <motion.div
          className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-current rounded-full opacity-0 group-hover:opacity-100"
          initial={false}
          style={{ x: "-50%" }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
