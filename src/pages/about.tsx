import React from "react";
import Layout from "@/components/Layout";
import HeadWithMetas from "@/components/HeadWithMetas";
import SkillsOverview from "@/components/sections/SkillsOverview";
import {
  AboutHero,
  BioSection,
  ExperienceSection,
  EducationSection,
} from "@/components/sections/AboutSections";
import { siteMetadata } from "@/data/portfolio";

export default function About() {
  return (
    <Layout>
      <HeadWithMetas
        title={`About - ${siteMetadata.title}`}
        description="Learn more about Neelesh Reddy, his experience in Unreal Engine, 3D artistry, and VFX professional background."
        url={`${siteMetadata.siteUrl}/about`}
      />

      <AboutHero />
      <BioSection />
      <SkillsOverview />
      <ExperienceSection />
      <EducationSection />
    </Layout>
  );
}
