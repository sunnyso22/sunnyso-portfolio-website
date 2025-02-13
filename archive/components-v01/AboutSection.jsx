"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = 
[
    {
        title: "Skills",
        id: "Skills",
        content: (
            <ul className="list-disc pl-4">
                <li>React</li>
                <li>Tailwindcss</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className="list-disc pl-4">
                <li>SLCSS</li>
                <li>PolyU</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "Experience",
        content: (
            <ul className="list-disc pl-4">
                <li>Cathay Dining</li>
                <li>Cathay Pacific Airways</li>
            </ul>
        )
    },
]

const AboutSection = () => {

    const [tab, setTab] = useState("Skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className="text-white scroll-mt-16" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-me.jpg" alt="about me" width={500} height={500}/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experienced working with JavaScript, React, Node.js, Express. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("Skills")} 
                            active={tab === "Skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("Education")} 
                            active={tab === "Education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("Experience")} 
                            active={tab === "Experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection