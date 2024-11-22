import { Button } from "@mui/material";
import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Concurso, EditConcurso } from "../../Components/Concurso/Concurso";
import { AuthGoogleContext } from "../../context/authGoogle";

import neymar from "../../assets/982239d877ee1a0c116cc03db7ac3eb7.jpg"

import "./User.css";
import LoadConcursos from "./../../Components/Concurso/LoadConcurso";

function User() {
    // const Fuse = require('fuse.js')

    const { user, signOut } = useContext(AuthGoogleContext);

    const username = user.displayName || "User";
    const userImage = user.photoURL || "https://tinyurl.com/5kub7nce";

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true);
    };

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "95%",
        maxWidth: "800px",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 2,
    };

    return (
        <div id="userCont">
            <div id="usercard">
                <img id="userbg" src={neymar} />
{/*"https://i.ytimg.com/vi/SGQULVZ8lyk/maxresdefault.jpg?7857057827"*/}
                <div id="user-data">
                    <h2>{username}</h2>
                    <Link to="/user/edit" id="linkUserImg">
                        <img src={userImage} id="pfp" />
                    </Link>
                </div>
            </div>

            
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
