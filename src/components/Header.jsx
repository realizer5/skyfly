import { BriefcaseBusiness, Contact, Home, Info, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

export default function Header() {
    const [menu, setMenu] = useState(false);
    const menuItems = [
        { name: "Home", url: "/", icon: <Home /> },
        { name: "About", url: "/about", icon: <Info /> },
        { name: "Service", url: "/service", icon: <BriefcaseBusiness /> },
        { name: "Contact", url: "/contact", icon: <Contact /> },
    ]
    return (
        <header className="flex justify-center">
            <nav className="bg-white flex justify-between items-center px-6 shadow-md shadow-gray-500 w-[95%] h-20 rounded-2xl fixed z-50 top-5">
                <h1 className="text-black text-4xl font-bold cursor-pointer">SKYFLY</h1>
                <button className="cursor-pointer md:hidden"
                    onClick={() => setMenu(!menu)}>
                    {menu ? <X /> : <Menu />}
                </button>
                <ul className="flex gap-2.5 items-center">
                    {menuItems.map(item => (
                        <li key={item.name}>
                            <NavLink to={item.url} className={`flex text-black text-xl font-semibold py-3 px-4 whitespace-nowrap gap-2.5 items-center duration-200 hover:bg-[#01959a] rounded-md`}>
                                {item.icon}
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <button className="py-2 px-4 text-base font-semibold cursor-pointer duration-200 hover:bg-[#151516] hover:text-white rounded-md bg-gray-200">Sign Up</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

