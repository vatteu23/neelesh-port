import React from "react";
import Link from "next/link";
import Button from "./ui/Button";
import { personalInfo } from "@/data/portfolio";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 text-center bg-stone-200/30 border-t border-stone-300/50">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-xs font-mono tracking-widest uppercase text-stone-500 mb-4">
          // Let's Connect
        </p>
        <p className="text-lg text-stone-600 mb-6 font-medium">
        Chat anything about Virtual Production or Unreal engine
        </p>

        <Button
          href={personalInfo.linkedIn}
          external
          variant="primary"
          size="lg"
          mono
          className="rounded-full"
        >
          Connect with me
        </Button>

        <p className="text-xs font-mono text-stone-400 mt-8 tracking-wider">
          &copy; {currentYear} {personalInfo.name.replace(" ", "_")} •
          Built with passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
