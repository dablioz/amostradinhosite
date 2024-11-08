/* import { Analytics } from "@vercel/analytics/react"; */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from "../Telas/Sobre/Sobre.jsx";
import Cursos from "../Telas/Cursos/Cursos.jsx";
import Home from "../Telas/Home/Home.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Login from "../Telas/Login/Login.jsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questoes" />
                <Route path="/concursos" element={<Cursos />} />
                <Route path="/guias" />
                <Route path="/orgaos" />
                <Route path="/bancas" />
                <Route path="/login" element={<Login />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
