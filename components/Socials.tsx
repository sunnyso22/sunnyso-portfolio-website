import Link from "next/link";
import Image from "next/image";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/sunnyso22" },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/sunny-so-273549211/",
    },
];

type SocialsProps = {
    containerStyles: string;
    iconStyles: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Socials;
