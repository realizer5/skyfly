import { Route, Routes } from "react-router-dom";
import { Home, About, Service, Contact } from "./routes";
import { Header, Footer } from "./components";

function App() {

    return (
        <div className="text-center **:font-['Popins',sans-serif]">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
