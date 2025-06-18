export default function Destinationdata({ className = "", imgs = [], heading = "heading", text = "text" }) {
    return (
        <div className={className}>
            <div className="text-start lg:w-4/9 w-full">
                <h2 className="pb-4 text-2xl lg:text-3xl font-bold">{heading}</h2>
                <p className="text-base">{text}</p>
            </div>
            <div className="relative w-full my-7 lg:my-0 lg:w-1/2 flex justify-between -z-10">
                {imgs?.map((img, index) => (<img key={img} src={img} alt="" className={`w-[49%] lg:h-90 h-62 object-cover rounded-lg shadow-lg shadow-gray-500 ${index % 2 === 0 && "absolute -top-10 right-0"}`} />))}
            </div>
        </div>
    )
}
