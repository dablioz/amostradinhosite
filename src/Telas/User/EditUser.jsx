import { AuthGoogleContext } from "../../context/authGoogle";
import { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./EditUser.css";

function EditUser() {
    const { user, xgPfp, xgUser } = useContext(AuthGoogleContext);

    const [pfp, setPfp] = useState();
    const [username, setUsername] = useState();

    const save = () => {
        if (pfp != "") {
            xgPfp(pfp);
        }
        if (username != "") {
            xgUser(username);
        }
    };

    const handleIMG = (e) => {
        var selectedFile = e.target.files[0];
        setPfp(e.target.files[0]);

        var reader = new FileReader();        
        reader.readAsDataURL(selectedFile);
        
        reader.onload = (e) => {
            document.getElementById('pfp').src = e.target.result;
        };
    };

    return (
        <div id="EditUser" className="cont">
            <div id="EditUserCont">
                <input id="pfpFile" type="file" accept=".png, .jpg, .gif" onChange={handleIMG} />

                <label htmlFor="pfpFile" id="pfplabel">
                    <img src={user.photoURL || "https://tinyurl.com/5kub7nce"} id="pfp" />
                </label>

                <div id="editUserFieldCont">
                    <TextField
                        focused
                        id="editUserField"
                        variant="outlined"
                        color="secondary"
                        label="Novo nome de usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                save();
                            }
                        }}
                    />
                </div>

                <Button id="save" onClick={save} variant="contained" color="secondary">
                    Salvar
                </Button>
            </div>
        </div>
    );
}

export default EditUser;
