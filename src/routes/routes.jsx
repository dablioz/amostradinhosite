/* import { Analytics } from "@vercel/analytics/react"; */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from "../Telas/Sobre/Sobre.jsx";
import Cursos from "../Telas/Cursos/Cursos.jsx";
import Home from "../Telas/Home/Home.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Login from "../Telas/Login/Login.jsx";
import User from "../Telas/User/User.jsx"
import { PrivateRoutes, AuthRoute } from "./index.jsx";
import EditUser from "../Telas/User/EditUser.jsx";
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

                <Route path="/sobre" element={<Sobre />} />

                <Route path="/auth" element={<AuthRoute />}>
                    <Route path="/auth" element={<Login />} />
                </Route>

                <Route path="/user" element={<PrivateRoutes />}>
                    <Route path="/user" element={<User />} />
                    <Route path="/user/edit" element={<EditUser />} />
                </Route>

                <Route path="/login" element={<Login />} />


            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
