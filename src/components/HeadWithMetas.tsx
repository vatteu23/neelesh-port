import React from "react";
import Head from "next/head";

interface HeadWithMetasProps {
  title: string;
  description: string;
  url?: string;
  image?: {
    file?: { url: string };
    url?: string;
  };
  scripts?: any[];
  noIndex?: boolean;
  children?: React.ReactNode;
  canonical?: string;
}

const HeadWithMetas: React.FC<HeadWithMetasProps> = ({
  title,
  description,
  url,
  image,
  noIndex,
  children,
  canonical,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image?.url && <meta property="og:image" content={image.url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {url && <meta name="twitter:url" content={url} />}
      {image?.url && <meta name="twitter:image" content={image.url} />}

      {canonical && <link rel="canonical" href={canonical} />}

      {children}
    </Head>
  );
};

export default HeadWithMetas;
