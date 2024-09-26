/* import { Analytics } from "@vercel/analytics/react"; */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contatos from "../Components/Contatos/Contatos.jsx";
import Sobre from "../Components/Sobre/Sobre.jsx";
import Cursos from "../Components/Cursos/Cursos.jsx"
import Navbar from "../Components/Navbar/Navbar.jsx";
import Home from "../Components/Home/Home.jsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/cursos" element={<Cursos/>}/>
                <Route path="/contatos" element={<Contatos />} />
            </Routes>
        </BrowserRouter>
    );
};
