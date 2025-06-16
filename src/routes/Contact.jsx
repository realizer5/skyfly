import { Hero, ContactForm } from "../components"
import { contactimg } from "../assets";

export default function Contact() {
    return (
        <>
            <Hero className="w-full h-[70vh]" heroImg={contactimg} title={"Contact"} />
            <ContactForm />
        </>
    )
}

