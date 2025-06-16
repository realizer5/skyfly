export default function Destinationdata({ className = "", imgs = [], heading = "heading", text = "text" }) {
    return (
        <div className={className}>
            <div className="text-start text-xl w-4/9">
                <h2 className="pb-4 text-3xl font-bold">{heading}</h2>
                <p>{text}</p>
            </div>
            <div className="relative w-1/2 flex justify-between -z-10">
                {imgs?.map((img, index) => (<img key={img} src={img} alt="" className={`w-[49%] h-90 object-cover rounded-md shadow-lg shadow-gray-500 ${index % 2 === 0 && "absolute -top-10 right-0"}`} />))}
            </div>
        </div>
    )
}
