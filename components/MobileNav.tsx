"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "./ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();

    const variants = {
        default: { width: 0 },
        active: { width: "calc(100% - 0.75rem)" },
    };

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
                        <h1 className="text-4xl font-semibold italic">SUNNY</h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === pathname && "text-accent"
                            } font-medium hover:text-accent transition-all`}
                        >
                            {link.name}
                            <motion.div
                                variants={variants}
                                animate={
                                    link.path === pathname
                                        ? "acitve"
                                        : "default"
                                }
                                className="border-b-2 border-accent"
                            />
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
