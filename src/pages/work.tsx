import Container from "@/components/Container"
import HeadWithMetas from "@/components/HeadWithMetas";
import Layout from "@/components/Layout"
import Typography from "@/components/Typography";
import { cn } from "@/functions/cn";
import { useState } from "react";


const data = {
    shortFilms: [
        "https://www.youtube.com/embed/KG01kavjO9I?si=CvVD8PqbQXlspt5Z",
        "https://www.youtube.com/embed/oMhbEONjGR8?si=Nf5WYMev6YX8071T",
        "https://www.youtube.com/embed/gIBOr6Bxn3Q?si=JHYV8jzGl6dzL1FB",
        "https://www.youtube.com/embed/dsnyvg0WzWc?si=hOEaCRFc1EvAgPL0",
        "https://www.youtube.com/embed/MhcQlvBW_7s?si=MNkKOniqU5iJzWR1",
        "https://www.youtube.com/embed/l_9t1ivExho?si=P9iH7X3mQjdn2M_i"
    ],
    animation: ["https://player.vimeo.com/video/997955764?dnt=1&title=0&byline=0&portrait=0"]
}


const filters = ["ALL", "SHORT FILMS", "3D ANIMATION"];

const Work = () => {

    const [activeTab, setActiveTab] = useState("ALL");



    return <Layout>
        <HeadWithMetas
            title="Neelesh Reddy | Unreal Engine Generalist"
            description="Neelesh Reddy is an Unreal Engine generalist with a passion for creating immersive experiences."
        />
        <Container className="min-h-[80vh]">
            <Typography variant="h3" wrapper="h1" className="mt-12 mb-4">My creations</Typography>
            <div className="flex flex-row gap-4 mb-6 md:mb-12">
                {filters.map((filter, index) => {
                    return  <div
                    key={index}
                    className={cn(
                        activeTab === filter ? "bg-blue-600 text-neutral-100" : "text-blue-600", '',
                        'border-2 border-blue-600 cursor-pointer inline-block mt-6 py-3 px-3 md:px-8 rounded-full shadow-md hover:bg-blue-700 hover:text-neutral-100 transition-colors'
                    )}
                    onClick={() => setActiveTab(filter)}
                >
                    {filter}
                </div>
                })}
                
            
            </div>

            <div className="grid grid-cols-12  md:gap-6">
                {(activeTab === "ALL" || activeTab === "SHORT FILMS") && data.shortFilms.map((url, index) => {
                    return <div key={index} className="aspect-video my-4 col-span-12 sm:col-span-6 lg:col-span-4">
                        <iframe allowFullScreen src={url} className="w-full h-full rounded-lg shadow-sm"></iframe>
                    </div>
                })}
                {(activeTab === "ALL" || activeTab === "3D ANIMATION") && data.animation.map((url, index) => {
                    return <div key={index} className="aspect-video my-4 col-span-12 sm:col-span-6 lg:col-span-4">
                        <iframe allowFullScreen src={url} className="w-full h-full rounded-lg shadow-sm"></iframe>
                    </div>
                })}
            </div>
        </Container>
    </Layout>

}

export default Work;