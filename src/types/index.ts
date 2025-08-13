// Global TypeScript interfaces and types

export interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  noIndex?: boolean;
}

export interface MotionVariants {
  initial?: any;
  animate?: any;
  exit?: any;
  whileHover?: any;
  whileTap?: any;
  transition?: any;
}

export interface ResponsiveValue<T> {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LinkProps {
  href: string;
  external?: boolean;
  download?: boolean;
}

// Animation presets
export const fadeInUp: MotionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const staggerContainer: MotionVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleOnHover: MotionVariants = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};
