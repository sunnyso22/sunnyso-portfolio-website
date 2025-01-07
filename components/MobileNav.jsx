"use client"

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import { Bars3Icon } from '@heroicons/react/24/solid'

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

const MobileNav = () => {

    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger>
                <Bars3Icon className="w-10 text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle className="hidden">Menu</SheetTitle>
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold italic">
                            SUNNY
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {
                        links.map((link, index) => 
                            (
                                <Link 
                                    href={link.path} 
                                    key={index} 
                                    className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                                >
                                    {link.name}
                                </Link>
                            )
                        )
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav