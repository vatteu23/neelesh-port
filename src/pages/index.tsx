import React from "react";
import Layout from "@/components/Layout";
import HeadWithMetas from "@/components/HeadWithMetas";
import Hero from "@/components/sections/Hero";
import VideoShowcase from "@/components/sections/VideoShowcase";
import SkillsOverview from "@/components/sections/SkillsOverview";
import { siteMetadata } from "@/data/portfolio";

export default function Home() {
  return (
    <Layout>
      <HeadWithMetas
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />

      <Hero />
      <VideoShowcase videoUrl="https://player.vimeo.com/video/1108946824?api=1&autoplay=0&loop=0&dnt=1&muted=0&controls=1&title=0&byline=0&portrait=0&badge=0" />
      <SkillsOverview />
    </Layout>
  );
}
