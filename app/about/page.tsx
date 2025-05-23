"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiMysql,
    SiOracle,
    SiPhp,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const about = {
    title: "About me",
    description:
        "Hi, my name is SO Hiu Tung, you can simply call me Sunny. I am a web developer and solution specialist with over 3 years of experience, based in Hong Kong. As a quick learner, I am always eager to expand my knowledge and skill set. I thrive in collaborative environments and enjoy working with others to create innovative and impactful applications.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "SO Hiu Tung",
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ Years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Hong Kong",
        },
        {
            fieldName: "Languages",
            fieldValue: "Cantonese, Mandarin, English",
        },
    ],
};

const experience = {
    title: "My experience",
    description:
        "I joined Cathay Dining, a subsidiary of Cathay Pacific Airways, as an IT Trainee in July 2021. In August 2023, following the reorganization of Cathay's subsidiary IT departments, I was promoted to the position of Solution Specialist at Cathay Pacific Airways. ",
    items: [
        {
            company: "Cathay Pacific Airways",
            position: "Solution Specialist",
            duration: "Aug2023 - Jul2024",
        },
        {
            company: "Cathay Dining",
            position: "IT Trainee",
            duration: "Jul2021 - Jul2023",
        },
        {
            company:
                "Office of the Government Chief Information Officer (OGCIO)",
            position: "Intern",
            duration: "Jul2020 - Aug2020",
        },
    ],
};

const education = {
    title: "Education",
    description:
        "Obtained the bachelor degree of Information Technology from The Hong Kong Polytechnic University in 2021.",
    items: [
        {
            institution: "The Hong Kong Polytechnic University",
            degree: "BSc (Hons) Information Technology",
            duration: "2017-2021",
        },
        {
            institution: "EPF Engineering School",
            degree: "Exchange Student",
            duration: "2020Jan-2020Jun",
        },
    ],
};

const skills = {
    title: "My skills",
    description: "",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <SiPhp />,
            name: "PHP",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <BiLogoTypescript />,
            name: "TypeScript",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiMysql />,
            name: "MySQL",
        },
        {
            icon: <SiOracle />,
            name: "Oracle",
        },
        {
            icon: <FaGitAlt />,
            name: "Git",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="about"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About Me</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[80vh] w-full">
                        {/* about */}
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                        {about.info.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">
                                                    {item.fieldName}
                                                </span>
                                                <span className="text-lg">
                                                    {item.fieldValue}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">
                                                        {item.institution}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">
                                                        {item.company}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((item, index) => (
                                        <li key={index}>
                                            <TooltipProvider
                                                delayDuration={100}
                                            >
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {item.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{item.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default About;
