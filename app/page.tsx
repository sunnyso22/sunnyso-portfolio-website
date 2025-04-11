// components
import Introduction from "@/components/Introduction";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* introduction */}
                    <Introduction />
                    {/* photo */}
                    <Photo />
                </div>
            </div>
            {/* <Stats /> */}
        </section>
    );
}
