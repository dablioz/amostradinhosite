import { Link } from "react-router-dom";

import { Button, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

import logo from "../../assets/guia_concursos.png";

import "./Navbar.css";

function Navbar() {
    return (
        <>
            <header>
                <div id="marca-container">
                    <div id="marca">

                        {/** tu vai fazer um haburguer pra esse menu */ }
                        <Link to="/" id="fdp">
                            <img id="logo" src={logo} alt="logo" />
                        </Link>

                        <Link to="/Sobre">
                            <span className="item">questoes</span>
                        </Link>
                        <a href="">
                            <span className="item">concursos</span>
                        </a>

                        <a href="">
                            <span className="item">guias</span>
                        </a>

                        <a href="">
                            <span className="item">orgaos</span>
                        </a>

                        <a href="">
                            <span className="item">bancas</span>
                        </a>

                        <Link to="/login">
                            <IconButton>
                                <AccountCircleOutlinedIcon fontSize="large" />
                            </IconButton>
                        </Link>
                    </div>
                </div>
                {/* isso aqui era um menu
                <div id="menu-container">
                    <div id="menu">
                        <Link to="/">
                            <Button size="large" className="item">
                                <span id="hometxt">Home</span>
                                <HomeIcon id="home" />
                            </Button>
                        </Link>

                        <Link to="/cursos">
                            <Button size="large" className="item">
                                <span id="cursostxt">Concursos</span>
                                <CollectionsBookmarkIcon id="cursos" />
                            </Button>
                        </Link>

                        <Link to="/sobre">
                            <Button size="large" className="item">
                                <span id="sobretxt">Sobre</span>
                                <InfoIcon id="sobre" />
                            </Button>
                        </Link>
                    </div>
                </div>
                */}
            </header>
        </>
    );
}

export default Navbar;
