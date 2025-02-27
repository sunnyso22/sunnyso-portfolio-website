import "./globals.css";
import { Lato } from "next/font/google";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const myFont = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata = {
    title: "Sunny So",
    description: "Sunny So Protfolio Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${myFont.className} antialiased`}>
                <Header />
                {/* <StairTransition /> */}
                {/* <PageTransition> */}
                {children}
                {/* </PageTransition> */}
            </body>
        </html>
    );
}
