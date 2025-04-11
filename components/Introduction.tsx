"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

// components
import Socials from "@/components/Socials";

const Introduction = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
            }}
            className="text-center xl:text-left order-2 xl:order-none"
        >
            <h1 className="h1 mb-6">
                Hello, I'm
                <br />
                <TypeAnimation
                    sequence={[
                        "Sunny So",
                        1000,
                        "Web Developer",
                        1000,
                        "Solution Specialist",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-accent"
                />
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
                A dedicated software engineer who thrives on understanding your
                needs and building tailored solutions. Experienced working with
                PHP, JavaScript, React, Tailwind CSS, MySQL, and Oracle PL/SQL.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
                {/* <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 hover:transition-all duration-500"
                >
                    <span>Download CV</span>
                    <ArrowDownTrayIcon className="w-5" />
                </Button> */}
                <div className="mb-8 xl:mb-0">
                    <Socials
                        containerStyles="flex gap-6"
                        iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-2xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Introduction;
