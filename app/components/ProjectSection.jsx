"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from "./ProjectTag"
import { animate, motion, useInView } from "framer-motion"

const projectsData = 
[
    {
        id: 1,
        title: "React Protfolio Website",
        description: "React Protfolio Website description",
        image: "/images/projects/testing.jpg",
        tag: ["All", "React"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Project Tailwindcss",
        description: "Project Tailwindcss description",
        image: "/images/projects/",
        tag: ["All", "Tailwindcss"],
        gitUrl: "/",
        previewUrl: "/",
    },
]

const ProjectSection = () => {

    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1}
    }

    return (
        <section className="scroll-mt-28" id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag 
                    onClick={handleTagChange} 
                    tag="All" 
                    isSelected={tag === "All"} 
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    tag="React" 
                    isSelected={tag === "React"} 
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    tag="Tailwindcss" 
                    isSelected={tag === "Tailwindcss"} 
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index} 
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{duration: 0.3, delay: index * 0.4}}
                    >
                        <ProjectCard 
                            key={project.id}         
                            title={project.title} 
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection