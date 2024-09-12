import React from 'react';
import { Ubuntu_Mono } from "next/font/google";
import Container from './Container';
import Link from 'next/link';

const inter = Ubuntu_Mono({ weight: ["400","700"], subsets: ["latin"] });


type LayoutProps = {
    children: React.ReactNode;

}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={`bg-neutral-100 min-h-screen ${inter.className}`}>
            <header>
                {/* Header content goes here */}


                <div className='top-0 sticky'>
                    <Container className=' w-full flex justify-between px-6 pt-3'>
                        <Link href='/' className='text-neutral-800 font-bold text-2xl pr-2'>NR</Link>
                        <div className='flex items-center gap-x-4'>
                        <Link href='/' className='text-neutral-800 font-bold text-base p-2 '>Home</Link>
                        <Link href='/about' className='text-neutral-800 font-bold text-base p-2 '>About</Link>
                        <Link href='/work' className='text-neutral-800 font-bold text-base p-2'>Work</Link>
                        </div>
                    </Container>
                </div>

            </header>
            <main>
                {children}
            </main>
            <footer>
                {/* Footer content goes here */}
                <section className="py-16 text-center">
                        <p className="text-gray-600">
                            Want to work together or chat about animation? Feel free to reach out!
                        </p>
                        <Link
                            href="https://www.linkedin.com/in/neelesh-reddy-botta-3405291a6/"
                            target='_blank'
                            className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                        >
                            Get In Touch
                        </Link>
                    </section>
            </footer>
        </div>
    );
};

export default Layout;