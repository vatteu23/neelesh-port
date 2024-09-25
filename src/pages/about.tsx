// pages/about.js
import HeadWithMetas from '@/components/HeadWithMetas';
import Layout from '@/components/Layout';
import Typography from '@/components/Typography';
import Link from 'next/link';
import React from 'react';

export default function About() {
    return (
        <Layout>

            <HeadWithMetas
                title="Neelesh Reddy | Unreal Engine Generalist"
                description="Neelesh Reddy is an Unreal Engine generalist with a passion for creating immersive experiences."
            />
            <div className="min-h-screen   text-white p-8">
                <div className="container mx-auto py-6 px-6 md:px-10">
                 
                    {/* Main Content Section */}
                    <section className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-16">
                        {/* Profile Image */}
                        <div className="w-full md:w-1/3">
                            <img
                                src="/images/profile.jpeg" // Replace with your image path
                                alt="Neelesh Reddy"
                                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            />
                        </div>

                        {/* Bio Section */}
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-4">A Little About Me</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                I am a qualified and professional unreal artist with nearly two years of experience around the art of unreal, Maya
                                and 2 years of experience in over all 3D field, strong creative and analytical skills, team player with an eye for detail.
                            </p>


                            <Link
                                href="https://www.linkedin.com/in/neelesh-reddy-botta-3405291a6/"
                                target='_blank'
                                className="inline-block mt-6 bg-blue-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition-colors"
                            >
                                Let's Connect
                            </Link>
                        </div>
                    </section>

                    {/* Highlight Section */}
                    <section className="mt-24 p-8 rounded-lg shadow-lg bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600  animate-gradient-x text-white">
                        <h2 className="text-3xl font-light mb-6 text-center">Key Highlights</h2>
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


                    <section className="mt-24 flex flex-col md:flex-row  justify-between space-y-12 md:space-y-0 md:space-x-16 text-neutral-800">
                        {/* Profile Image */}
                        <div className="w-full md:w-1/6">
                            <Typography variant='h4' className='sticky top-0'>
                                EXPERIENCE
                            </Typography>
                        </div>

                        {/* Bio Section */}
                        <div className="w-full md:w-2/3">
                            <div className='mb-6'>
                                <h2 className="text-2xl font-semibold text-gray-900">Matrix VFX</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    3D GENERALIST | SEPT 2022 - NOV 2023
                                </p>
                                <ul className="list-disc  mb-6 pl-4 mt-2">
                                    <li>  Used Unreal Engine to its best to create beautiful layout, import
                                        tracked camera inside it to render with passes.</li>
                                    <li>Created high-quality 3D models, textures, lighting, animation,
                                        rendering from Maya.</li>
                                    <li>Collaborated with composting artist to work out blend between
                                        3D to 2D.</li>
                                </ul>
                            </div>
                            <div className='mb-6'>
                                <h2 className="text-2xl font-semibold text-gray-900">SPECTRA VFX</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    UNREAL ENGINE GENERALIST | NOV 2023 - May 2024
                                </p>
                                <ul className="list-disc  mb-6 pl-4 mt-2">
                                    <li>Used Unreal Engine to create stunning visuals</li>
                                    <li>Used PCG to reduce the foliage weight.</li>
                                </ul>

                            </div>



                        </div>
                    </section>


                    <section className="mt-24 flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-16 text-neutral-800">
                        {/* Profile Image */}
                        <div className="w-full md:w-1/6">
                            <Typography variant='h4' className='sticky top-0'>
                                EDUCATION
                            </Typography>
                        </div>

                        {/* Bio Section */}
                        <div className="w-full md:w-2/3">
                            <div className='mb-6'>
                                <h2 className="text-2xl font-semibold text-gray-900">DIPLOMA IN COMPOSTING</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    MAYA ACADEMY OF ADVANCED CINEMATICS | 2018 - 2018
                                </p>
                            </div>
                            <div className='mb-6'>
                                <h2 className="text-2xl font-semibold text-gray-900">BACHELOR OF FINE ARTS</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Specialised in 3D Animation | KL University | 2019 - 2023
                                </p>
                            </div>

                            <div className='mb-6'>
                                <h2 className="text-2xl font-semibold text-gray-900">ONTARIO COLLEGE GRADUATE CERTIFICATE</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Seneca Polytechnic | 2024 - 2024
                                </p>
                            </div>

                        </div>
                    </section>
                    {/* Footer Section */}

                </div>
            </div>
        </Layout>
    );
}
