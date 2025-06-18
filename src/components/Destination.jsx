import { Destinationdata } from ".";
import { des1, des2, des21, des22 } from "../assets/";

export default function Destination() {
    return (
        <>
            <div className="my-16 lg:mx-32 mx-8">
                <h1 className="text-5xl font-bold pb-2">Popular Destinations</h1>
                <p>Tours give you the opportunity to see a lot within a time frame</p>
                <Destinationdata className="flex items-center justify-between lg:mt-16 mt-10 flex-col-reverse lg:flex-row"
                    heading="Bhadrachalam, Telangana"
                    text="Bhadrachalam can be a refreshing place to visit with share of instances from the Ramayana, a glorious place, a vibrant river and mystical terrain and surroundings. One of the major attraction of Bhadrachalam is the Sita Ramchandraswamy temple."
                    imgs={[des1, des2]}
                />
                <Destinationdata className="flex items-center justify-between lg:mt-16 mt-10 lg:flex-row-reverse flex-col-reverse"
                    heading="Araku Valley, AndhraPradesh"
                    text="Araku Valley is a comparetively unexplored hill station visited by locals as a weekend getaway and is situated some 120 kilometers away from Vishakhapatnam. If you're a tourist looking for exclusivity and tranquility, Vistadome train leaves Vishakhapatnam at 6.50 AM, making way through 58 tunnels and passing over 84 bridges making way through the breathtaking landscape to reach Araku in approximately in 5 hours, go, catch that!"
                    imgs={[des21, des22]}
                />
            </div>
        </>
    )
}
