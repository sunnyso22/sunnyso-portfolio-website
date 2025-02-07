// components
import Introduction from "@/components/Introduction";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
    return (
        //v01
        // <main className="flex flex-col min-h-screen bg-black">
        //     <NavBar />
        //     <div className="container mt-36 mx-auto px-12 py-4">
        //         <HeroSection />
        //         <AchievementSection />
        //         <AboutSection />
        //         <ProjectSection />
        //         <EmailSection />
        //     </div>
        //     <Footer/>
        // </main>
        
        //v02
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* introduction */}
                    <Introduction />
                    {/* photo */}
                    <Photo />
                </div>
            </div>
            {/* <Stats /> */}
        </section>
    )
}