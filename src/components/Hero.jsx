
export default function Hero({ heroImg, title, text, url, btnText, className }) {
    return (
        <div className={`w-full relative flex justify-center items-center ${className}`}>
            <img src={heroImg} alt="river and mountains"
                className="w-full h-full object-cover"
            />
            <div className="absolute w-full">
                <h1 className="text-5xl font-bold text-white bg-clip-text fill-transparent py-3 px-5 md:py-0 md:px-0">{title}</h1>
                {btnText ? <>
                    <p className="text-lg md:text-xl text-white pb-8 md:pt-2 pt-0">{text}</p>
                    <a href={url} className="bg-white py-4 px-8 rounded-md text-lg font-bold tracking-widest duration-200 hover:bg-gray-200 active:bg-gray-400">{btnText}</a>
                </> : ""}
            </div>
        </div>
    )
}
