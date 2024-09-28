/* import { Analytics } from "@vercel/analytics/react"; */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from "../Telas/Sobre/Sobre.jsx";
import Cursos from "../Telas/Cursos/Cursos.jsx";
import Home from "../Telas/Home/Home.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cursos" element={<Cursos />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};
