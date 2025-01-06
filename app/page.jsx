"use client"

import HeroSection from "./components-v01/HeroSection";
import NavBar from "./components-v01/NavBar";
import AboutSection from "./components-v01/AboutSection";
import ProjectSection from "./components-v01/ProjectSection";
import EmailSection from "./components-v01/EmailSection";
import Footer from "./components-v01/Footer";
import AchievementSection from "./components-v01/AchievementSection";

import { Button } from "@/components/ui/button";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { TypeAnimation } from 'react-type-animation'

// compoonents
import Socials from "@/components/Socials";
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
        
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* text */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <h1 className="h1 mb-6">
                            Hello, I'm 
                            <br/>
                            <TypeAnimation
                                sequence={[
                                    "Sunny So",
                                    1000, 
                                    "Web Developer",
                                    1000,
                                    "Solution Analyst",
                                    1000,
                                    "Software Engineer",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-accent"
                            />
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            A full stack web developer with a passion for creating interactive and responsive web applications. Experienced working with JavaScript, React, Node.js, Tailwindcss.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="flex items-center gap-2"
                            >
                                <span>Download CV</span>
                                <ArrowDownTrayIcon className="w-5" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Socials 
                                    containerStyles="flex gap-6" 
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    {/* photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            {/* <Stats /> */}
        </section>
    );
}