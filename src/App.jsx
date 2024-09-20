import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import bobesponja from "./assets/bobesponja.jpeg"
import "./App.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 720,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <header>
                <img src={bobesponja} alt="" />
                <span>amostradinhosite</span>
            </header>
            <div id="menu-container">
                <div id="menu">
                    <div className="item" id="sobre" onClick={handleOpen}>
                        sobre
                    </div>
                    <div className="item" id="cursos">
                        cursos
                    </div>
                    <div className="item" id="contatos">
                        contatos
                    </div>
                </div>
            </div>

            <span>Nome</span> <br></br>
            <input id="name"></input> <br></br>
            <span>Email</span> <br></br>
            <input id="email"></input> <br></br>
            <span>Mensagem</span> <br></br>
            <input id="mensagem"></input> <br></br>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                  <img src={bobesponja} alt=""/>
                </Box>
            </Modal>
        </>
    );
}

export default App;
