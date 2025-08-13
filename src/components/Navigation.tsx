import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Container from "./Container";
import Button from "./ui/Button";
import { navigationItems } from "@/data/portfolio";

const Navigation: React.FC = () => {
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname === href;
  };

  return (
    <header className="top-0 sticky z-50 bg-white/90 backdrop-blur-md border-b border-stone-300/30">
      <Container className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-stone-800 font-semibold text-2xl pr-2 hover:opacity-80 transition-opacity"
          aria-label="Home - Neelesh Reddy"
        >
          <motion.img
            src="/images/logo.svg"
            alt="Neelesh Reddy Logo"
            className="w-10 h-10 sm:w-12 sm:h-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
        </Link>

        {/* Navigation */}
        <nav
          className="flex items-center gap-x-1 sm:gap-x-2"
          role="navigation"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              <motion.div
                className={`font-mono font-medium text-xs sm:text-sm px-2 sm:px-4 py-2 rounded-lg transition-all transform tracking-wide relative ${
                  isActive(item.href)
                    ? "text-stone-800 bg-stone-200/60"
                    : "text-stone-600 hover:text-stone-800 hover:bg-stone-100"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-stone-800 rounded-full"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    style={{ x: "-50%" }}
                  />
                )}
              </motion.div>
            </Link>
          ))}

          {/* Resume CTA */}
          <Button
            href="/resume.pdf"
            external
            variant="primary"
            size="sm"
            mono
            className="ml-1 sm:ml-2 text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-2.5"
          >
            Resume
          </Button>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
