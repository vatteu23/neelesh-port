import Container from "@/components/Container";
import HeadWithMetas from "@/components/HeadWithMetas";
import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';

export default function Home() {



  return (
    <Layout>

      <HeadWithMetas
        title="Neelesh Reddy | Unreal Engine Generalist"
        description="Neelesh Reddy is an Unreal Engine generalist with a passion for creating immersive experiences."
      />
    

      <div className="!mt-4 m-4 md:m-12 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600  animate-gradient-x md:p-6 rounded-xl">
      <div className="max-w-4xl w-full space-y-8 mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
           <Typography variant="h3" wrapper="h1" className="mb-3" color="light">Hi, I&apos;m Neelesh Reddy &#128075;</Typography>
              <Typography variant="h4" fontWeight="light" color="light" className="mb-12">
                An Unreal engine generalist
              </Typography>
             
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 px-2 md:px-0"
        >
          <div className="relative pb-[56.25%] rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://fast.wistia.net/embed/iframe/aggng42mqe?videoFoam=true&playerColor=262626"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </motion.div>

      
      </div>
      </div>

     <Container>
      <div className=" bg-gradient-to-r rounded-lg from-blue-500 p-2 via-teal-400 to-indigo-600  animate-gradient-x">
     <section className="bg-white p-8 rounded-lg  text-neutral-800">
                        <h2 className="text-3xl font-light mb-6 text-center">Skills spotlight</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">

                                <h4 className="text-2xl font-bold">Unreal Engine & Maya Proficiency</h4>
                                <p>Nearly 2 years of experience creating high-quality 3D assets and animations.</p>
                            </div>
                            <div className="text-center">

                                <h4 className="text-2xl font-bold">VFX Professional Experience</h4>
                                <p>Worked at Matrix VFX and Spectra VFX, delivering cutting-edge visuals.</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-2xl font-bold">Expert in 3D & Visual Effects</h4>
                                <p>Strong skills in 3D modeling, texturing, lighting, rendering, layouting and compositing.</p>
                            </div>
                        </div>
                    </section>
                    </div>
     </Container>
      {/* </div> */}
    </Layout>
  );
}


const IframeWrapper = styled.div`
position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }

`
