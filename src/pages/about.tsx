// pages/about.js
import HeadWithMetas from "@/components/HeadWithMetas";
import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <Layout>
      <HeadWithMetas
        title="Neelesh Reddy | Unreal Engine Generalist"
        description="Neelesh Reddy is an Unreal Engine generalist with a passion for creating immersive experiences."
      />
      <Container className="min-h-[80vh]">
        <div className="py-12">
          {/* Main Content Section */}
          <section className="flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0 md:space-x-20 mb-24">
            {/* Profile Image */}
            <div className="w-full md:w-1/3">
              <img
                src="/images/profile.jpeg"
                alt="Neelesh Reddy"
                className="rounded-2xl border-2 border-stone-300/30 transition-transform transform hover:scale-105 w-full"
              />
            </div>

            {/* Bio Section */}
            <div className="w-full md:w-2/3 space-y-6">
              <Typography
                variant="small"
                mono
                className="mono-section-header mb-4"
              >
                // A Little About Me
              </Typography>
              <Typography
                variant="p"
                color="secondary"
                className="leading-relaxed text-lg"
              >
                I am a qualified and professional unreal artist with nearly two
                years of experience around the art of unreal, Maya and 2 years
                of experience in over all 3D field, strong creative and
                analytical skills, team player with an eye for detail.
              </Typography>

              <Link
                href="https://www.linkedin.com/in/neelesh-reddy-botta-3405291a6/"
                target="_blank"
                className="inline-flex items-center justify-center mt-8 bg-stone-800 hover:bg-stone-700 text-white py-4 px-8 rounded-full font-semibold transition-all duration-200 transform hover:-translate-y-1 font-mono"
              >
                Connect_with_me
              </Link>
            </div>
          </section>

          {/* Highlight Section */}
          <section className="mb-24 p-12 rounded-2xl border-2 border-stone-300 text-stone-800">
            <div className="text-center mb-12">
              <Typography
                variant="small"
                mono
                className="mono-section-header mb-4"
              >
                // Key Highlights
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="mb-4">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge text-stone-600 mb-3"
                  >
                    01
                  </Typography>
                  <Typography variant="h4" className="font-semibold mt-3">
                    Unreal Engine & Maya Proficiency
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="secondary"
                  className="leading-relaxed"
                >
                  Nearly 2 years of experience creating high-quality 3D assets
                  and animations.
                </Typography>
              </div>
              <div className="text-center space-y-4">
                <div className="mb-4">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge text-stone-600 mb-3"
                  >
                    02
                  </Typography>
                  <Typography variant="h4" className="font-semibold mt-3">
                    VFX Professional Experience
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="secondary"
                  className="leading-relaxed"
                >
                  Worked at{" "}
                  <Typography
                    variant="span"
                    mono
                    className="font-medium text-stone-700"
                  >
                    Matrix VFX
                  </Typography>{" "}
                  and{" "}
                  <Typography
                    variant="span"
                    mono
                    className="font-medium text-stone-700"
                  >
                    Spectra VFX
                  </Typography>
                  , delivering cutting-edge visuals.
                </Typography>
              </div>
              <div className="text-center space-y-4">
                <div className="mb-4">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge text-stone-600 mb-3"
                  >
                    03
                  </Typography>
                  <Typography variant="h4" className="font-semibold mt-3">
                    Expert in 3D & Visual Effects
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="secondary"
                  className="leading-relaxed"
                >
                  Strong skills in 3D modeling, texturing, lighting, rendering,
                  layouting and compositing.
                </Typography>
              </div>
            </div>
          </section>

          <section className="mb-24 flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-20 text-stone-800">
            {/* Header */}
            <div className="w-full md:w-1/6">
              <Typography
                variant="h3"
                mono
                className="sticky top-24 font-bold tracking-widest text-stone-500"
              >
                EXPERIENCE
              </Typography>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 space-y-12">
              <div className="space-y-4 border-l-2 border-stone-200 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-stone-400 rounded-full"></div>
                <Typography
                  variant="h4"
                  mono
                  className="font-bold text-stone-800"
                >
                  Matrix_VFX
                </Typography>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 space-y-2 sm:space-y-0">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge bg-stone-800 text-stone-700 border-stone-800"
                  >
                    3D_GENERALIST
                  </Typography>
                  <Typography
                    variant="small"
                    mono
                    color="secondary"
                    className="tracking-wider opacity-75"
                  >
                    SEPT_2022 → NOV_2023
                  </Typography>
                </div>
                <ul className="list-disc space-y-3 pl-6 mt-4">
                  <li className="text-stone-600 leading-relaxed">
                    Used{" "}
                    <Typography
                      variant="span"
                      mono
                      className="font-medium text-stone-700"
                    >
                      Unreal Engine
                    </Typography>{" "}
                    to its best to create beautiful layout, import tracked
                    camera inside it to render with passes.
                  </li>
                  <li className="text-stone-600 leading-relaxed">
                    Created high-quality 3D models, textures, lighting,
                    animation, rendering from{" "}
                    <Typography
                      variant="span"
                      mono
                      className="font-medium text-stone-700"
                    >
                      Maya
                    </Typography>
                    .
                  </li>
                  <li className="text-stone-600 leading-relaxed">
                    Collaborated with composting artist to work out blend
                    between 3D to 2D.
                  </li>
                </ul>
              </div>
              <div className="space-y-4 border-l-2 border-stone-200 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-stone-400 rounded-full"></div>
                <Typography
                  variant="h4"
                  mono
                  className="font-bold text-stone-800"
                >
                  Spectra_VFX
                </Typography>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 space-y-2 sm:space-y-0">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge bg-stone-800 text-stone-700 border-stone-800"
                  >
                    UNREAL_ENGINE_GENERALIST
                  </Typography>
                  <Typography
                    variant="small"
                    mono
                    color="secondary"
                    className="tracking-wider opacity-75"
                  >
                    NOV_2023 → MAY_2024
                  </Typography>
                </div>
                <ul className="list-disc space-y-3 pl-6 mt-4">
                  <li className="text-stone-600 leading-relaxed">
                    Used{" "}
                    <Typography
                      variant="span"
                      mono
                      className="font-medium text-stone-700"
                    >
                      Unreal Engine
                    </Typography>{" "}
                    to create stunning visuals
                  </li>
                  <li className="text-stone-600 leading-relaxed">
                    Used{" "}
                    <Typography
                      variant="span"
                      mono
                      className="font-medium text-stone-700"
                    >
                      PCG
                    </Typography>{" "}
                    to reduce the foliage weight.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-24 flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-20 text-stone-800">
            {/* Header */}
            <div className="w-full md:w-1/6">
              <Typography
                variant="h3"
                mono
                className="sticky top-24 font-bold tracking-widest text-stone-500"
              >
                EDUCATION
              </Typography>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 space-y-12">
              <div className="space-y-4 border-l-2 border-stone-200 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-stone-400 rounded-full"></div>
                <Typography variant="h4" className="font-semibold">
                  DIPLOMA IN COMPOSTING
                </Typography>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 space-y-2 sm:space-y-0">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge text-stone-700"
                  >
                    MAYA_ACADEMY_OF_ADVANCED_CINEMATICS
                  </Typography>
                  <Typography
                    variant="small"
                    mono
                    color="secondary"
                    className="tracking-wider opacity-75"
                  >
                    2018
                  </Typography>
                </div>
              </div>
              <div className="space-y-4 border-l-2 border-stone-200 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-stone-400 rounded-full"></div>
                <Typography variant="h4" className="font-semibold">
                  BACHELOR OF FINE ARTS
                </Typography>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 space-y-2 sm:space-y-0">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge text-stone-700"
                  >
                    3D_ANIMATION
                  </Typography>
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge text-stone-700"
                  >
                    KL_UNIVERSITY
                  </Typography>
                  <Typography
                    variant="small"
                    mono
                    color="secondary"
                    className="tracking-wider opacity-75"
                  >
                    2019 → 2023
                  </Typography>
                </div>
              </div>

              <div className="space-y-4 border-l-2 border-stone-200 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-stone-400 rounded-full"></div>
                <Typography variant="h4" className="font-semibold">
                  ONTARIO COLLEGE GRADUATE CERTIFICATE
                </Typography>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 space-y-2 sm:space-y-0">
                  <Typography
                    variant="small"
                    mono
                    className="mono-badge text-stone-700"
                  >
                    SENECA_POLYTECHNIC
                  </Typography>
                  <Typography
                    variant="small"
                    mono
                    color="secondary"
                    className="tracking-wider opacity-75"
                  >
                    2024
                  </Typography>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  );
}
