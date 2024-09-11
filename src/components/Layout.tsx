import React from 'react';
import { Ubuntu_Mono } from "next/font/google";
import Container from './Container';

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
                        <a href='/' className='text-neutral-800 font-bold text-2xl pr-2'>NR</a>
                        <div className='flex items-center gap-x-4'>
                            <a href='/' className='text-neutral-800 font-bold text-base p-2 '>Home</a>
                            <a href='/about' className='text-neutral-800 font-bold text-base p-2 '>About</a>
                            <a href='/work' className='text-neutral-800 font-bold text-base p-2'>Work</a>
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
                        <a
                            href="https://www.linkedin.com/in/neelesh-reddy-botta-3405291a6/"
                            target='_blank'
                            className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                        >
                            Get In Touch
                        </a>
                    </section>
            </footer>
        </div>
    );
};

export default Layout;