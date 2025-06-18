import { des1, des21, yadagiri } from "../assets"
import { Tripdata } from "./"

export default function Trip() {
    return (
        <div className="my-16 mx-8 lg:mx-24 text-zinc-800">
            <h1 className="text-5xl font-bold pb-2">Recent Trips</h1>
            <p>You can discover unique destinations using google maps</p>
            <div className="mt-12 flex justify-between lg:flex-row flex-col">
                <Tripdata img={des21}
                    heading="Trip to Araku Valley"
                    text="Araku Valley is a comparatively unexplored hill station mostly visited by locals as a weekend getaway and is situated some 120 kilometers away from Vishakhapatnam. If you're a tourist looking for exclusivity and tranquillity, Vistadome train leaves Vishakhapatnam at 6:50 AM, making way through 58 tunnels and passing over 84 bridges making way through the breathtaking landscape to reach Araku in approximately 5 hours, go, catch that!"
                />
                <Tripdata img={des1}
                    heading="Trip to Bhadrachalam"
                    text="Bhadrachalam can be a refreshing place to visit with a share of
        instances from the Ramayana, a glorious palace, a vibrant river and
        mystical terrain and surroundings. One of the major attractions of
        Bhadrachalam is the Sita Ramachandraswamy temple."
                />
                <Tripdata
                    img={yadagiri}
                    heading="Trip to Yadari"
                    text="Sri Lakshminarasimha Swamy Temple or Yadagirigutta is a popular Hindu Temple of Narasimha Swamy,
        an incarnation Lord Vishnu It is situated on a hillock in the Nalgonda district, Telangana,
        Yadagirigutta is at a distance of 6 KM from Riagir Railway station and at a distance of 13 KM from
        Bhongir Town and 60 kilometers from the city of Hyderabad. "
                />
            </div>
        </div>
    )
}

