import { Button, Modal } from "@mui/material"
import * as React from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthGoogleContext } from "../../context/authGoogle"

import neymar from "../../assets/982239d877ee1a0c116cc03db7ac3eb7.jpg"

import Box from "@mui/material/Box"
import EditUser from "./EditUser"
import "./User.css"

import { Tooltip } from "@mui/material"

function User() {
    // const Fuse = require('fuse.js')

    const { user, signOut } = useContext(AuthGoogleContext)

    const username = user.displayName || "User"
    const userImage = user.photoURL || "https://tinyurl.com/5kub7nce"

    const [open, setOpen] = React.useState(false)
    
    const [openTip, setOpenTip] = React.useState(true)

    const handleTip = () => 
        openTip ? setOpenTip(false) : setOpenTip(true)
    
    const handleOpen = () => 
        open ? setOpen(false) : setOpen(true)
    
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: "300px",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    }

    return (
        <div id="userCont">
            <div id="usercard">
                <img id="userbg" src={neymar} />
                {/*"https://i.ytimg.com/vi/SGQULVZ8lyk/maxresdefault.jpg?7857057827"*/}
                <div id="user-data">
                    <Tooltip open={openTip} onClose={handleTip} onOpen={handleTip} title="< Edit User" placement="right-end">
                        <img src={userImage} id="pfp" onClick={handleOpen} />
                    </Tooltip>
                    <h2>{username}</h2>
                </div>
            </div>

            <div id="buttons">
                <Link to="/">
                    <Button id="sair" onClick={signOut} variant="outlined" color="error">
                        Sair
                    </Button>
                </Link>
            </div>

            <Modal disablePortal disableEnforceFocus disableAutoFocus open={open} onClose={handleOpen}>
                <Box sx={style}>
                    <EditUser />
                </Box>
            </Modal>
        </div>
    )
}
export default User
