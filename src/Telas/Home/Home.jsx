import "./Home.css";
import home_img from "../../assets/home_img.png";
import Cursos from "../Cursos/Cursos";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";

import { Link } from "react-router-dom";
function Home() {
    return (
        <div id="home-cont" className="cont">
            {/* 
            <div id="bg">
                <div id="teste"></div>
            </div> 
            */}

            <div id="ll">
                <div id="pesquisa">
                    <div id="search">
                        <SearchIcon id=" icon" />
                    </div>
                    <input type="text" />
                </div><br />
                
                <h1>Seu melhor amigo quando se pensa em concursos</h1> <br />
                
                <p>Sua aprovação começa aqui, registre-se e estude de graça</p><br />
                <Link to="/concursos">
                    <button><b>COMEÇAR AGORA</b></button>
                </Link>
                </div>
            <div id="rr">
                <img id="home_img" src={home_img} alt="" />
            </div> 
        </div>
    );
}

export default Home;
