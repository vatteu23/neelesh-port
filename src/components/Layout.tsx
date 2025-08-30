import React from "react";
import { IBM_Plex_Sans } from "next/font/google";
import Navigation from "./Navigation";
import Footer from "./Footer";

const inter = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`bg-stone-100 min-h-screen ${inter.className}`}>
      <Navigation />
      <main role="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
