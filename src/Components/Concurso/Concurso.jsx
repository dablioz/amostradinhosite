import "./Concurso.css";
import AddIcon from "@mui/icons-material/Add"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Button, Collapse, IconButton, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { styled } from "@mui/material/styles"
import { collection, doc, FirestoreError, getFirestore, setDoc } from "firebase/firestore"
import * as React from "react"
import { app } from "../../service/firebaseconfig.jsx"
import Documento from "./Documento/Documento.jsx"
import { toast } from "react-toastify"
import RemoveIcon from "@mui/icons-material/Remove"
const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: "rotate(0deg)",
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: "rotate(180deg)",
            },
        },
    ],
}))

const db = getFirestore(app)
const concursosRef = collection(db, "concursos")

export function Concurso(props) {
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const loadfiles = props.items.files.map((files, i) => {
        return <Documento key={i} link={files} />
    })

    let filename = props.items.edital.split("/").pop()

    return (
        <div id="Concurso-cont" className="cont">
            <div id="Concurso">
                <img id="image" src={props.items.image} alt="" />
                <div id="content">
                    <h2 className="nomegrande"> {props.items.title} </h2>
                    <div id="infos">
                        <div className="aoi">
                            <div className="nomegrande" href={props.items.edital} target="_blank">
                                {"Edital: " + filename}
                            </div>
                        </div>

                        <div className="aoi">
                            <div id="fiminsc"> {"Inscrições até: " + props.items.fiminsc} </div>
                        </div>
                    </div>
                </div>

                <div id="end">
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                    </ExpandMore>
                </div>
            </div>

            <Collapse id="coll" in={expanded} timeout="auto" unmountOnExit>
                <div id="teste">{loadfiles}</div>

                <div id="balala">
                    <a href="">{props.items.banca}</a>
                    {"Regiao: "} {props.items.regiao}
                </div>
            </Collapse>
        </div>
    )
}

export function EditConcurso(props) {
    const [expanded, setExpanded] = React.useState(false)
    const [alala, setAlala] = React.useState("")
    const [desisto, setDesisto] = React.useState([])

    /* React.useEffect(() => {
        desisto.map((link, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <Documento link={link} />
                <IconButton onClick={() => remove(i)}>
                    <RemoveIcon />
                </IconButton>
            </div>
        ))
    }, [desisto]) */

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const handleIMG = (e) => {
        var reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])

        reader.onload = (e) => {
            setAlala(e.target.result)
        }
    }

    function sabedeus() {
        let url = document.getElementById("editlink")
    
        if (url.value != "") setDesisto([...desisto, url.value])
        url.focus()
        url.value = ""
    }

    function remove(index) {
        let arr = desisto
        arr.splice(index, 1)
        setDesisto([...arr])
    }

    const addConc = async () => {
        let edittitle = document.getElementById("edittitle").value
        let editedital = document.getElementById("editedital").value

        let editfiminsc = document.getElementById("editfiminsc").value

        let editregiao = document.getElementById("editregiao").value
        let editbanca = document.getElementById("editbanca").value

        /* console.log(edittitle)
        console.log(editedital)
        console.log(editfiminsc)
        console.log(editregiao)
        console.log(editbanca) */

        await setDoc(doc(concursosRef, edittitle), {
            title: edittitle,
            edital: editedital,
            fiminsc: editfiminsc,
            regiao: editregiao,
            banca: editbanca,
            files: [...desisto],
            image: alala,
        }).catch((error) => console.log(error))

        /* toast.success("Concurso registrado!") */
    }

    return (
        <Modal disablePortal disableEnforceFocus disableAutoFocus open={props.open} onClose={props.handleOpen}>
            <Box sx={props.style}>
                <div id="Concurso-cont">
                    <div id="Concurso">
                        <input id="pfpFile" type="file" accept=".png, .jpg, .gif" onChange={handleIMG} />

                        <label htmlFor="pfpFile" id="pfplabel">
                            <img src={alala} id="image" />
                        </label>
                        <div id="content">
                            <div style={{ display: "flex" }}>
                                <h2>{"Título: "}</h2>
                                <TextField id="edittitle" size="small" sx={{ maxWidth: "100%" }} />
                            </div>
                            <div id="infos">
                                <div className="pqp">
                                    <div>
                                        {"Edital: "}
                                        <TextField id="editedital" size="small" />
                                    </div>
                                    <div>
                                        {"Até: "}
                                        <TextField id="editfiminsc" size="small" />
                                    </div>
                                </div>
                            </div>
                            <div className="pqp">
                                <div>
                                    {"Banca: "}
                                    <TextField id="editbanca" size="small" />
                                </div>
                                <div>
                                    {"Regiao: "}
                                    <TextField id="editregiao" size="small" />
                                </div>
                            </div>
                        </div>

                        <div id="end">
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more">
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </div>
                    </div>

                    <Collapse id="coll" in={expanded} timeout="auto">
                        <div id="teste">
                            {desisto.map((link, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center" }}>
                                    <Documento link={link} />
                                    <IconButton onClick={() => remove(i)}>
                                        <RemoveIcon />
                                    </IconButton>
                                </div>
                            ))}
                        </div>
                        <div id="addfiles">
                            <TextField id="editlink" size="small" variant="standard" label="link" />
                            <IconButton size="" onClick={() => sabedeus()}>
                                <AddIcon />
                            </IconButton>
                        </div>
                    </Collapse>
                </div>

                {/* <TextField variant="standard" label="Image URL"/> */}
                <div id="buttons">
                    <Button variant="contained" onClick={addConc}>
                        Enviar
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}
