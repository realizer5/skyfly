import { BriefcaseBusiness, Contact, Home, Info, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";

export default function Header() {
    const [menu, setMenu] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        setMenu(false);
    }, [navigate])
    const menuItems = [
        { name: "Home", url: "/", icon: <Home /> },
        { name: "About", url: "/about", icon: <Info /> },
        { name: "Service", url: "/service", icon: <BriefcaseBusiness /> },
        { name: "Contact", url: "/contact", icon: <Contact /> },
    ]
    return (
        <header className="flex justify-center">
            <nav className="bg-white flex justify-between items-center px-6 shadow-lg shadow-gray-500 w-[95%] h-20 rounded-2xl fixed z-50 top-5">
                <h1 className="text-black text-4xl font-bold cursor-pointer">SKYFLY</h1>
                <button className="cursor-pointer lg:hidden"
                    onClick={() => setMenu(!menu)}>
                    {menu ? <X /> : <Menu />}
                </button>
                <ul className={`flex gap-2.5 lg:items-center lg:flex-row lg:z-50 lg:static lg:w-auto lg:p-0 lg:transition-none
                    flex-col justify-start bg-white w-full h-auto absolute top-0 items-stretch pt-20 pb-7 m-0 transition-all ease-in-out duration-300 rounded-xl -z-1 ${menu ? "left-0" : "-left-[120%]"}`}>
                    {menuItems.map(item => (
                        <li key={item.name}>
                            <NavLink to={item.url} className={`w-full justify-center flex text-black text-xl font-semibold py-8 lg:py-3 lg:px-4 whitespace-nowrap gap-2.5 items-center transition-colors duration-200 hover:bg-[#01959a] hover:text-white rounded-lg`}>
                                {item.icon}
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <button className="text-xl lg:w-auto w-4/5 p-6 text-white bg-[#01959a] tracking-widest lg:tracking-normal lg:text-black lg:py-2 lg:px-4 lg:text-base font-semibold cursor-pointer transition-colors duration-200 lg:hover:bg-[#151516] hover:text-white rounded-lg lg:bg-gray-200">Sign Up</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

