import { AboutUs, Hero } from "../components";
import { aboutimg } from "../assets";

export default function About() {
    return (
        <>
            <Hero className="w-full h-[70vh]" heroImg={aboutimg} title={"About"} />
            <AboutUs />
        </>
    )
}

