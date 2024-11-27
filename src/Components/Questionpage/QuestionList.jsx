import { Box, Button, Modal, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import { addDoc } from "firebase/firestore";
import * as React from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import "./QuestionList.css";

import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../service/firebaseconfig.jsx";
import { toast } from "react-toastify";

const db = getFirestore(app);
const questoesRef = collection(db, "questoes");

export function QuestionList() {
    const navigate = useNavigate();
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true);
    };

    function teste() {
        const { user } = React.useContext(AuthGoogleContext);
        if (user != null && (user.uid == "OcuKRfU9KkQG69JSbuBzp54XUmw1" || user.uid == "DcKltQnN29W4jMjAJMxwMOjCJ7i1" || user.uid == "L1sSI4bH5iMWHaMJ4xjs3bNRjzi1")) {
            return (
                <div id="buttons">
                    <Button variant="contained" onClick={handleOpen}>
                        Adicionar
                    </Button>
                </div>
            );
        }
    }

    const [questoes, setQuestoes] = React.useState([]);
    const questoesArray = [];
    React.useEffect(() => {
        async function aimeu() {
            const querySnapshot = await getDocs(questoesRef);

            querySnapshot.forEach((doc) => {
                // console.log(doc.data())
                questoesArray.push(doc.data());

                setQuestoes([...questoesArray]);
            });
        }
        aimeu();
    }, []);

    const addQuest = async () => {
        await addDoc(questoesRef, {
            concurso: concursofield.value,
            ano: anofield.value,
            materia: materiafield.value,
            enunciado: enunfield.value,
            questao_a: afield.value,
            questao_b: bfield.value,
            questao_c: cfield.value,
            questao_d: dfield.value,
            answer: selectedValue,
            id: Math.floor(Math.random() * 200),
        });

        toast.success("Questao registrada!");
    };

    const [selectedValue, setSelectedValue] = React.useState("a");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="cont">
            <h1>Questoes De Concursos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Concurso</th>
                        <th>Materia</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    {questoes.map((questao) => (
                        <tr
                            key={questao.id}
                            onClick={() => {
                                navigate(`/questoes/${questao.id}`);
                            }}
                        >
                            <td>{questao.id}</td>
                            <td>{questao.concurso}</td>
                            <td>{questao.materia}</td>
                            <td>{questao.ano}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {teste()}

            <Modal disablePortal disableEnforceFocus disableAutoFocus open={open} onClose={handleOpen}>
                <Box sx={style}>
                    <div id="addQuest">
                        <div id="top">
                            <TextField id="concursofield" label="Concurso" />

                            <TextField id="anofield" label="Ano" type="number" />
                        </div>
                        <br />
                        <div id="enun-cont">
                            <TextField id="enunfield" label="Enunciado" multiline />
                        </div>
                        <br />
                        <div>
                            <div className="alternatives">
                                <Radio checked={selectedValue === "a"} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ "aria-label": "A" }} />
                                <TextField id="afield" variant="filled" multiline label="questao a" />
                            </div>

                            <br />
                            <div className="alternatives">
                                <Radio checked={selectedValue === "b"} onChange={handleChange} value="b" name="radio-buttons" inputProps={{ "aria-label": "B" }} />
                                <TextField id="bfield" variant="filled" multiline label="questao b" />
                            </div>
                            <br />
                            <div className="alternatives">
                                <Radio checked={selectedValue === "c"} onChange={handleChange} value="c" name="radio-buttons" inputProps={{ "aria-label": "C" }} />
                                <TextField id="cfield" variant="filled" multiline label="questao c" />
                            </div>
                            <br />
                            <div className="alternatives">
                                <Radio checked={selectedValue === "d"} onChange={handleChange} value="d" name="radio-buttons" inputProps={{ "aria-label": "D" }} />
                                <TextField id="dfield" variant="filled" multiline label="questao d" />
                            </div>
                        </div>

                        <div id="buttons">
                            <TextField id="materiafield" size="small" label="matéria" />
                            <Button onClick={() => addQuest()} type="submit" variant="contained">
                                Enviar
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
