"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Projects",
        path: "/projects"
    },
    {
        name: "Contact",
        path: "/contact"
    },
]


const Nav = () => {

    const pathname = usePathname()

    const variants = { 
        default: {width: 0}, 
        active: {width: "calc(100% - 0.75rem)"} 
    }

    return (
        <nav className="flex gap-8">
            {   
                links.map((link, index) => 
                    (
                        <Link 
                            key={index} 
                            href={link.path} 
                            className={`${link.path === pathname && "text-accent"} font-medium hover:text-accent transition-all`}
                        >
                            {link.name}
                            <motion.div 
                                variants={variants}
                                animate={link.path === pathname ? "acitve" : "default"}
                                className="border-b-2 border-accent"
                            />
                        </Link>
                    )
                )
            }
        </nav>
    )
}

export default Nav