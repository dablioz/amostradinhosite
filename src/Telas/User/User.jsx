import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthGoogleContext } from "../../context/authGoogle";
import {TextField} from "@mui/material";
import {Concurso, EditConcurso } from "../../Components/Concurso/Concurso";

import "./User.css";

function User() {
    // const Fuse = require('fuse.js')

    const { user, signOut } = useContext(AuthGoogleContext);

    const username = user.displayName || "User";
    const userImage = user.photoURL || "https://tinyurl.com/5kub7nce";

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "90%",
		maxWidth: "800px",
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 1,
	};


    return (
        <div id="userCont">
            <div id="usercard">
                <img id="userbg" src="https://i.ytimg.com/vi/SGQULVZ8lyk/maxresdefault.jpg?7857057827" />

                <div id="user-data">
                    <h2>{username}</h2>
                    <Link to="/user/edit" id="linkUserImg">
                        <img src={userImage} id="pfp" />
                    </Link>
                </div>
            </div>

            <Concurso image={"https://tinyurl.com/ubyd83bp"} titulo={"xalalá"} edital={"28 / 02 / 24"} banca={"Instituto Quadrix"} fiminsc={"08/04/2024"} regiao={"Estadual"} />

            <div id="buttons">
                <Button variant="contained" onClick={handleOpen}>
                    Adicionar
                </Button>
            </div>

            <Modal
                keepMounted
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} >
					<EditConcurso />
					{/* <TextField variant="standard" label="Image URL"/> */}
					<Button variant="contained">Enviar</Button>
                </Box>
            </Modal>

            <div id="buttons">
                <Link to="/">
                    <Button id="sair" onClick={signOut} variant="outlined" color="error">
                        Sair
                    </Button>
                </Link>
            </div>
        </div>
    );
}
export default User;
