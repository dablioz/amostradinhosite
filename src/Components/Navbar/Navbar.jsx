import * as React from "react";
import { Link } from "react-router-dom";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemButton } from "@mui/material";
import { useContext } from "react";
import logo from "../../assets/guia_concursos.png";
import { AuthGoogleContext } from "../../context/authGoogle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import "./Navbar.css";
function Navbar() {
    const { user, signed } = useContext(AuthGoogleContext);
    function useri(type) {
        /*  */
        if (type) {
            return signed ? <img id="usrIcon" src={user.photoURL || "https://tinyurl.com/5kub7nce"} /> : <AccountCircleOutlinedIcon fontSize="large" />;
        } else {
            return signed ? <img id="pfp" src={user.photoURL || "https://tinyurl.com/5kub7nce"} /> : <Button variant="contained">Entrar</Button>;
        }
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
                        {/*                         
                        <div>
                            <Link to="/Sobre">
                                <span className="item">questoes</span>
                            </Link>
                            <a href="">
                                <span className="item">concursos</span>
                            </a>mmm

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
                        */}
                        <div id="right">
                            <IconButton onClick={toggleDrawer(true)}>{useri(true)}</IconButton>

                            {/* 
                            <IconButton fontSize="large" id="hamburguer_menu">
                                <MenuIcon fontSize="large" />
                            </IconButton>
                            */}
                        </div>
                    </div>
                </div>
                <Drawer open={open} onClose={toggleDrawer(false)} anchor="right" ModalProps={{ keepMounted: true }}>
                    <List onClick={toggleDrawer(false)}>
                        <ListItem id="pfpsec">
                                <Link to="/user">{useri(false)}</Link>
                        </ListItem>
                        {[["questoes"], "concursos", "guias", "oragos", "bancas"].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FormatListBulletedIcon />
                                    </ListItemIcon>
                                    <Link to={`/${text}`}>
                                        <span className="item">{text}</span>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

                {/* 
                isso aqui era um menu
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
