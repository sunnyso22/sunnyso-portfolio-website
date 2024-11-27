import React from 'react'
import { motion } from "framer-motion"

const TabButton = ({ selectTab, active, children}) => {

    const variants = {
        default: {width: 0},
        active: {width: "calc(100% - 0.75rem)"}
    }

    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]"

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                variants={variants}
                animate={active ? "active" : "default"}
                className="h-1 bg-primary-500 mt-1 mr-3"
            />
        </button>
    )
}

export default TabButton