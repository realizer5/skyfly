import { serviceimg } from "../assets";
import { Hero, Trip } from "../components";

export default function Service() {
    return (
        <>
            <Hero className="w-full h-[70vh]" heroImg={serviceimg} title={"Service"} />
            <Trip />
        </>
    )
}

