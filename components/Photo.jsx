"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <motion.div 
                initial={{opacity: 0}} 
                animate={{
                    opacity: 1, 
                    transition: {delay: 0.5, duration: 0.5, ease: "easeIn"}
                }}
                className="w-full h-full relative"
            >
                {/* image */}
                
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute">
                    <Image
                        src="/images/sunnyso.png"
                        priority
                        fill
                        alt=""
                        className="object-contain"
                    />
                </div>

                {/* circle */}
                <motion.svg
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
                >
                    <motion.circle 
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ddff"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo