import * as React from "react";
import { Link } from "react-router-dom";

import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import logo from "../../assets/guia_concursos.png";
import { AuthGoogleContext } from "../../context/authGoogle";
import "./Navbar.css";
function Navbar() {
    const { user, signed } = useContext(AuthGoogleContext);
    function useri() {
        /*  */
        return signed ? <img id="usrIcon" src={user.photoURL || "https://tinyurl.com/5kub7nce"} /> : <AccountCircleOutlinedIcon fontSize="large" />;
    }
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <>
            <header>
                <div id="marca-container">
                    <div id="marca">
                        {/** tu vai fazer um haburguer pra esse menu */}
                        <Link to="/" id="fdp">
                            <img id="logo" src={logo} alt="logo" />
                        </Link>

                        <div>
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
                        </div>
                        <div id="right">
                            <IconButton onClick={toggleDrawer(true)}>{useri()}</IconButton>
                            {/* <Link to="/user">
                            </Link> */}
                            <IconButton fontSize="large" id="hamburguer_menu">
                                <MenuIcon fontSize="large" />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <Drawer open={open} onClose={toggleDrawer(false)} anchor="right" ModalProps={{ keepMounted: true }}>
                    <List>
                        <img src={user.photoURL || "https://tinyurl.com/5kub7nce"} id="pfp" />
                        <ListItem>
                            <ListItemText>sarrada no ar</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>sarrada no ar</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>sarrada no ar</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>sarrada no ar</ListItemText>
                        </ListItem>
                    </List>
                </Drawer>

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
