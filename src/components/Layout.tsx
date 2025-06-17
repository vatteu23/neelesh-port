import React from "react";
import { Inter } from "next/font/google";
import Container from "./Container";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
};

const navigationItems = [
  { href: "/", label: "/home" },
  { href: "/about", label: "/about" },
  { href: "/work", label: "/work" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname === href;
  };

  return (
    <div className={`bg-stone-100 min-h-screen ${inter.className}`}>
      <header>
        {/* Header content goes here */}

        <div className="top-0 sticky z-50 bg-white/90 backdrop-blur-md border-b border-stone-300/30">
          <Container className=" w-full flex justify-between px-6 py-4">
            <Link
              href="/"
              className="text-stone-800 font-semibold text-2xl pr-2 hover:opacity-80 transition-opacity"
            >
              <motion.img
                src="/images/logo.svg"
                alt="Neelesh Reddy"
                className="w-12 h-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </Link>
            <nav className="flex items-center gap-x-1">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href} className="relative">
                  <motion.div
                    className={`font-mono font-medium text-sm px-4 py-2 rounded-lg transition-all transform tracking-wide relative ${
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
            </nav>
          </Container>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        {/* Footer content goes here */}
        <section className="py-20 text-center bg-stone-200/30 border-t border-stone-300/50">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-xs font-mono tracking-widest uppercase text-stone-500 mb-4">
              // Let's Connect
            </p>
            <p className="text-lg text-stone-600 mb-6 font-medium">
              Want to work together or chat about animation? Feel free to reach
              out!
            </p>
            <Link
              href="https://www.linkedin.com/in/neelesh-reddy-botta-3405291a6/"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 bg-stone-800 text-white font-mono font-semibold rounded-full hover:bg-stone-700 transition-all duration-200 transform hover:-translate-y-0.5 tracking-wide text-sm"
            >
              Connect_with_me
            </Link>
            <p className="text-xs font-mono text-stone-400 mt-8 tracking-wider">
              &copy; 2024 Neelesh_Reddy • Built_with_passion
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Layout;
