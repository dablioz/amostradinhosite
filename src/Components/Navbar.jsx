import { Link } from "react-router-dom";
import { useState } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import bobesponja from "../assets/bobesponja.jpeg";
import eibape from "../assets/eibape.png";
import asdasd from "../assets/asdasd.png";

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

    const array = [bobesponja, eibape, asdasd];

    const random = Math.floor(Math.random() * array.length);

    return (
        <>
            <header>
                <img src={bobesponja} alt="" onClick={handleOpen} />
                <span>amostradinhosite</span>
            </header>

            <div id="menu-container">
                <div id="menu">
                    <Link to="/">
                        <div className="item" id="home">
                            Home
                        </div>
                    </Link>

                    <Link to="/sobre">
                        <div className="item" id="sobre">
                            Sobre
                        </div>
                    </Link>

                    <Link to="/cursos">
                        <div className="item" id="cursos">
                            cursos
                        </div>
                    </Link>

                    <Link to="/contatos">
                        <div className="item" id="contatos">
                            Contatos
                        </div>
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
        </>
    );
}

export default Navbar;
