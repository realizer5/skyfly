import { Hero, Destination, Trip } from "../components/"
import { heroImg } from "../assets/";

export default function Home() {
    return (
        <>
            <Hero
                className={"h-screen"}
                heroImg={heroImg}
                title={"Your Travel Your Story"}
                text={"Choose Your Favourite Destination"}
                btnText={"Travel Plan"}
                url={"/"}
            />
            <Destination />
            <Trip />
        </>
    )
}

