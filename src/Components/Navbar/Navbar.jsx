import { Link } from "react-router-dom";
import { useState } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

import logo from "../../assets/logo_prev.png";
import bobesponja from "../../assets/bobesponja.jpeg";
import lucas from "../../assets/lucas.jpeg";
import duolingo from "../../assets/duolingo.jpeg";
import caique from "../../assets/caique.jpeg";
import bizarro from "../../assets/bizarro.jpeg";

import "./Navbar.css";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100vw - 120px)",
    maxWidth: "600px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const array = [bobesponja, lucas, duolingo, caique, bizarro];

    const random = Math.floor(Math.random() * array.length);

    return (
        <>
            <header>
                <div id="marca-container">
                    <div id="marca">
                        <Link to="/" id="fdp">
                            <img id="logo" src={logo} alt="logo" />
                        </Link>
                        <span onClick={handleOpen}>GuiaConcursos</span>

                        <Link to="/sobre">
                            <IconButton className="item">
                                <InfoOutlinedIcon id="sobre" sx={{fontSize: "30px"}}/>
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img id="jumpscare" src={array[random]} alt="" />
                </Box>
            </Modal>
        </>
    );
}

export default Navbar;
