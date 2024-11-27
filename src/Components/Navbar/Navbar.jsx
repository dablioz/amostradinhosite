import * as React from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import { Button, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemButton } from "@mui/material"
import { useContext } from "react"
import logo from "../../assets/guia_concursos.png"
import { AuthGoogleContext } from "../../context/authGoogle"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import MenuIcon from "@mui/icons-material/Menu"
import { Icon } from "@mui/material"
import "./Navbar.css"
function Navbar() {
    const { user, signed, signOut } = useContext(AuthGoogleContext)
    const navigate = useNavigate()

    function useri(type) {
        /*  */
        if (type) {
            return signed ? (
                <img
                    onClick={() => navigate("/user")}
                    id="usrIcon"
                    src={user.photoURL || "https://tinyurl.com/5kub7nce"}
                />
            ) : (
                <AccountCircleOutlinedIcon onClick={() => navigate("/user")} fontSize="large" />
            )
        } else {
            return signed ? (
                <ListItem id="pfpsec">
                    <Link to="/user">
                        <img
                            onClick={() => navigate("/user")}
                            id="pfp"
                            src={user.photoURL || "https://tinyurl.com/5kub7nce"}
                        />
                    </Link>
                </ListItem>
            ) : (
                ""
            )
        }
    }

    function teste() {
        let navigate = useNavigate()
        return signed ? (
            <Button variant="contained" color="error" id="sair" onClick={signOut}>
                Sair
            </Button>
        ) : (
            <Button variant="contained" onClick={() => navigate("/auth")}>
                Entrar
            </Button>
        )
    }

    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }
    return (
        <>
            <header>
                <div id="marca-container">
                    <div id="marca">
                        <div id="right">{useri(true)}</div>
                        <Link to="/" id="fdp">
                            <img id="logo" src={logo} alt="logo" />
                        </Link>
                        <MenuIcon id="hamburguer" sx={{ fontSize: "40px" }} onClick={toggleDrawer(true)} />

                        {/* {
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
                        } */}
                    </div>
                </div>
                <Drawer
                    id="drawer"
                    anchor="right"
                    open={open}
                    onClose={toggleDrawer(false)}
                    ModalProps={{ keepMounted: true }}>
                    <List onClick={toggleDrawer(false)}>
                        {useri(false)}
                        {["Questoes", "Concursos", "Guias", "Orgãos", "Bancas"].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <Link to={`/${text}`}>
                                    <ListItemIcon>
                                        <FormatListBulletedIcon />
                                    </ListItemIcon>
                                    
                                        <span className="item">{text}</span>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <ListItem onClick={toggleDrawer(false)}>
                        {teste()}
                    </ListItem>
                </Drawer>
            </header>
        </>
    )
}

export default Navbar
