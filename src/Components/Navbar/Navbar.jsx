import { Link } from "react-router-dom";
import { useState } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

import logo from "../../assets/logo_prev.png";
import bobesponja from "../../assets/bobesponja.jpeg";
import eibape from "../../assets/eibape.png";
import neimar from "../../assets/neimar.png";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100vw - 80px)",
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

    const array = [bobesponja, eibape, neimar];

    const random = Math.floor(Math.random() * array.length);

    return (
        <div id="container">
            <header>
                <img src={logo} alt="" onClick={handleOpen} />
                <span>amostradinhosite</span>
            </header>
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
                            <span id="cursostxt">Cursos</span>
                            <CollectionsBookmarkIcon id="cursos" />
                        </Button>
                    </Link>

                    <Link to="/contatos">
                        <Button variant="text" size="large" className="item">
                            <span id="contatostxt">Contatos</span>
                            <PeopleAltIcon id="contatos" />
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
        </div>
    );
}

export default Navbar;
