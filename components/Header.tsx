import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold italic">SUNNY</h1>
                </Link>

                {/* desktop nav & hire me button */}
                <div className="hidden lg:flex xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="lg:hidden xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
