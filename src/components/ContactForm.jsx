export default function ContactForm() {
    return (
        <div className="my-16 mx-24 text-zinc-800">
            <h1>Send A Message To Us!</h1>
            <form className="pt-12 flex flex-col w-1/2 m-auto">
                <input type="text" name="" value="" placeholder="Name" className="h-12 px-4 mb-8 rounded-md border border-zinc-800" />
                <input type="email" name="" value="" placeholder="Email" className="h-12 px-4 mb-8 rounded-md border border-zinc-800" />
                <input type="text" name="" value="" placeholder="Subject" className="h-12 px-4 mb-8 rounded-md border border-zinc-800" />
                <textarea rows="4" cols="" placeholder="Message" className="p-4 mb-8 rounded-md border border-zinc-800"></textarea>
                <button className="py-2 px-4 text-base font-semibold cursor-pointer duration-200 hover:bg-[#151516] hover:text-white rounded-md bg-gray-200">Send Message</button>
            </form>
        </div>
    )
}

