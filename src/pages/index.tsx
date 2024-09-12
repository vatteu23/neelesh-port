import Container from "@/components/Container";
import HeadWithMetas from "@/components/HeadWithMetas";
import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";


export default function Home() {



  return (
    <Layout>

      <HeadWithMetas
        title="Neelesh Reddy | Unreal Engine Generalist"
        description="Neelesh Reddy is an Unreal Engine generalist with a passion for creating immersive experiences."
      />
      {/* <div className="  flex items-center relative min-h-[85vh] mt-4 bg-neutral-200 m-12 rounded-xl"> */}
      <div className="!mt-4 m-4 md:m-12 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600  animate-gradient-x md:p-6 rounded-xl">
        <div className=" rounded-lg">
          <Container className="text-left relative min-h-[60vh] md:min-h-[85vh]">
            <div className="py-12 text-center">
              <Typography variant="h3" wrapper="h1" className="mb-6" color="light">Hi, I&apos;m Neelesh Reddy &#128075;</Typography>
              <Typography variant="h4" fontWeight="light" color="light">
                An Unreal engine generalist
              </Typography>
              <div className="aspect-video max-h-[600px] mx-auto mt-12">
                <iframe allowFullScreen src={'https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0'} className="w-full h-full"></iframe>
              </div>

            </div>
          </Container>
        </div>
      </div>
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
