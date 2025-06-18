export default function Tripdata({ img, heading, text }) {
    return (
        <div className="text-start shadow-lg shadow-gray-500 w-full mb-6 lg:mb-0 lg:w-[32%] rounded-lg cursor-pointer py-4 px-3">
            <div className="h-50 overflow-hidden rounded-lg">
                <img src={img} alt="" className="w-full h-full transition-all duration-500 ease-in-out rounded-lg hover:scale-125" />
            </div>
            <h4 className="text-xl pt-4 pb-1 font-bold">{heading}</h4>
            <p>{text}</p>
        </div>
    )
}
