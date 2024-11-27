"use client"
import dynamic from "next/dynamic"
import React from 'react'
import AnimatedNumber from "react-animated-numbers"


const AnimatedNumbers = dynamic(() => {
        return import("react-animated-numbers")
    },
    {ssr: false}
)

const achievementList = [
    {
        metric: "Projects",
        value: "100",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100,000"
    },
    {
        metric: "Awards",
        value: "5",
    },
    {
        metric: "Years",
        value: "3",
    },

]


const AchievementSection = () => {
    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="sm:border-[#33353F] sm:border sm:flex-row rounded-md py-8 px-16 flex flex-col items-center justify-between">
            {
                achievementList.map((achievement, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center justify-center mx-4"
                    >
                        <h2 className="text-white text-4xl font-bold flex flex-row">
                            {achievement.prefix}
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={parseInt(achievement.value)}
                                locale="en-US"
                                className="text-white text-4xl font-bold"
                                configs={((_, index) => {
                                    return {
                                        mass: 1,
                                        friction: 100,
                                        tensions: 140 * (index + 1),
                                    }
                                })}
                            />
                            {achievement.postfix}
                        </h2>
                        <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                    </div>   
                ))
            }
            </div>
        </div>
    )
}

export default AchievementSection