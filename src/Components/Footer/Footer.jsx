import "./Footer.css";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import bobesponja from "../../assets/bobesponja.jpeg";
import lucas from "../../assets/lucas.jpeg";
import duolingo from "../../assets/duolingo.jpeg";
import caique from "../../assets/caique.jpeg";
import bizarro from "../../assets/bizarro.jpeg";
import moises from "../../assets/moises.jpg";
import oculo from "../../assets/oculo.jpg";
import parachoque from "../../assets/parachoque.jpg";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function Footer() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const array = [bobesponja, lucas, duolingo, caique, bizarro, moises, oculo, parachoque];

    const random = Math.floor(Math.random() * array.length);
    return (
        <footer id="pezinho">
            <span onClick={handleOpen}>
                {"Made with ❤️ by:  wzley77 | "}
            </span>
            <div id="links">
                <a target="_blank" href="https://www.instagram.com/wzley77/">
                    <InstagramIcon />
                </a>
                <a target="_blank" href="https://github.com/dablioz/">
                    <GitHubIcon />
                </a>

                <a target="_blank" href=" https://www.linkedin.com/in/wzley/">
                    <LinkedInIcon />
                </a>
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
        </footer>
    );
}

export default Footer;
