import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import Button from "./ui/Button";
import { navigationItems } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname === href;
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 35 },
    },
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

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-x-1 sm:gap-x-2"
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

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="p-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-stone-100 active:scale-95 transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with subtle blur */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[998] bg-white/40 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden
            />

            {/* Sliding drawer */}
            <motion.aside
              key="mobile-menu"
              className="fixed inset-0 w-screen h-dvh z-[999] overflow-y-auto bg-gradient-to-br from-stone-100 to-stone-400"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <div className="min-h-dvh w-full relative flex items-center justify-center px-6 pt-[max(env(safe-area-inset-top),1rem)] pb-[max(env(safe-area-inset-bottom),1rem)]">
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-stone-100 active:scale-95 transition"
                >
                  <X size={24} />
                </button>

                {/* Menu items */}
                <motion.ul
                  className="w-full max-w-md flex flex-col items-center gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {navigationItems.map((item) => (
                    <motion.li key={item.href} variants={itemVariants} className="w-full">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block w-full text-center py-2 text-3xl sm:text-4xl font-semibold tracking-wide ${
                          isActive(item.href) ? "text-stone-900" : "text-stone-700 hover:text-stone-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}

                  {/* Resume button inside mobile menu */}
                  <motion.li variants={itemVariants} className="w-full pt-2">
                    <Button
                      href="/resume.pdf"
                      external
                      variant="primary"
                      size="lg"
                      mono
                      className="w-full justify-center py-3 text-base"
                    >
                      Resume
                    </Button>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
