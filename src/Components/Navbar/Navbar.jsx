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
                <img id="usrIcon" src={user.photoURL || "https://tinyurl.com/5kub7nce"} />
            ) : (
                <AccountCircleOutlinedIcon fontSize="large" />
            )
        } else {
            return signed ? (
                <ListItem id="pfpsec">
                    <Link to="/user">
                        <img id="pfp" src={user.photoURL || "https://tinyurl.com/5kub7nce"} />
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
            <ListItem>
                <ListItemButton id="sair" onClick={signOut}>
                    Sair
                </ListItemButton>
            </ListItem>
        ) : (
            <ListItem>
                <Button variant="contained" onClick={() => navigate("/auth")}>
                    Entrar
                </Button>
            </ListItem>
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
                        {/** tu vai fazer um haburguer pra esse menu */}
                        <Link to="/" id="fdp">
                            <img id="logo" src={logo} alt="logo" />
                        </Link>

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

                        <div id="right">
                            <div onClick={() => navigate("/user")}>{useri(true)}</div>

                            <MenuIcon id="hamburguer" sx={{ fontSize: "40px" }} onClick={toggleDrawer(true)} />
                        </div>
                    </div>
                </div>
                <Drawer
                    id="drawer"
                    open={open}
                    onClose={toggleDrawer(false)}
                    anchor="right"
                    ModalProps={{ keepMounted: true }}>
                    <List onClick={toggleDrawer(false)}>
                        {useri(false)}
                        {["Questoes", "Concursos", "Guias", "Orgãos", "Bancas"].map((text, index) => (
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
                    <div style={{ placeSelf: "flex-end" }} onClick={toggleDrawer(false)}>
                        {teste()}
                    </div>
                </Drawer>
            </header>
        </>
    )
}

export default Navbar
