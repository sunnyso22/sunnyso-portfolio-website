import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-black">
            <NavBar />
            <div className="container mt-36 mx-auto px-12 py-4">
                <HeroSection />
                {/* <AchievementSection /> */}
                <AboutSection />
                <ProjectSection />
                <EmailSection />
            </div>
            <Footer/>
        </main>
    );
}