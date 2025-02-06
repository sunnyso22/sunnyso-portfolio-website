import localFont from "next/font/local";
import "./globals.css";
import { JetBrains_Mono, Caveat } from "next/font/google"

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat"
})

export const metadata = {
  title: "Sunny So",
  description: "Sunny So Protfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body
        className={`${caveat.variable}`}
      > */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {/* <StairTransition /> */}
        {/* <PageTransition> */}
        {children}
        {/* </PageTransition> */}
      </body>
    </html>
  );
}
