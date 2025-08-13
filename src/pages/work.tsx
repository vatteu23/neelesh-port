import React from "react";
import Layout from "@/components/Layout";
import HeadWithMetas from "@/components/HeadWithMetas";
import Container from "@/components/Container";
import Section from "@/components/ui/Section";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import { siteMetadata } from "@/data/portfolio";

const Work: React.FC = () => {
  return (
    <Layout>
      <HeadWithMetas
        title={`Work - ${siteMetadata.title}`}
        description="Explore Neelesh Reddy's portfolio of 3D work, animations, VFX projects and Unreal Engine creations."
        url={`${siteMetadata.siteUrl}/work`}
      />

      <Container className="min-h-[80vh]">
        <Section
          subtitle="// Portfolio Showcase"
          padding="lg"
          container={false}
        >
          <PortfolioGrid />
        </Section>
      </Container>
    </Layout>
  );
};

export default Work;
