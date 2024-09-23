/* import { Analytics } from "@vercel/analytics/react"; */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contatos from "../Components/Contatos";
import Sobre from "../Components/Sobre";
import Cursos from "../Components/Cursos"
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";

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
