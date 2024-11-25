import { Radio } from "@mui/material"
import { collection, getDocs, query, where } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import "./Questionpage.css" // Arquivo CSS para estilização

import { getFirestore } from "firebase/firestore"
import { app } from "../../service/firebaseconfig.jsx"
const db = getFirestore(app)
const questoesRef = collection(db, "questoes")

const QuestionPage = () => {
    const { id } = useParams()
    
    const [item, setItem] = useState(null)
    const q = query(questoesRef, where("id", "==", id))

    useEffect(() => {
        async function initial() {
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setItem(doc.data())
                console.log(doc.data())
            })
        }
        initial()
    }, [])

    return (
        <div>
            <main>
                <div className="question-card">
                    <h1>
                        {item.concurso + " - " + item.ano}
                        {/* #3126156 Tec Literal - Analista de Tecnologia da Informação (DATAPREV) / 2024 - "Inéditas
                        Literais" */}
                    </h1>
                    <p>
                        <strong>Matéria:</strong> {item.materia} {/* Auditoria Governamental e Controle */}{" "}
                        {/* <strong>Assunto:</strong> Outros
                        Normativos da CGU */}
                    </p>
                    <p className="statement">
                        {item.enunciado}
                        {/* Julgue o item a seguir de acordo com a Instrução Normativa nº 5 de 2021, que dispõe sobre o
                        Plano Anual de Auditoria Interna, sobre o Relatório Anual de Atividades de Auditoria Interna e
                        sobre o parecer sobre a prestação de contas das entidades das unidades de auditoria interna
                        governamental sujeitas à supervisão técnica do Sistema de Controle Interno do Poder Executivo
                        Federal. */}
                    </p>
                    {/* <p>
                        O PAINT aprovado deve ser encaminhado à respectiva unidade de supervisão técnica até o último
                        dia útil do mês de fevereiro do ano a que se refere.
                    </p> */}
                    <div className="options">
                        <div>
                            <Radio
                                checked={selectedValue === "a"}
                                onChange={handleChange}
                                value="a"
                                name="radio-buttons"
                                inputProps={{ "aria-label": "A" }}
                            />
                            <span> {item.questao_a} </span>
                        </div>

                        <div>
                            <Radio
                                checked={selectedValue === "b"}
                                onChange={handleChange}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ "aria-label": "B" }}
                            />
                            <span> {item.questao_b} </span>
                        </div>

                        <div>
                            <Radio
                                checked={selectedValue === "c"}
                                onChange={handleChange}
                                value="c"
                                name="radio-buttons"
                                inputProps={{ "aria-label": "C" }}
                            />
                            <span> {item.questao_c} </span>
                        </div>

                        <div>
                            <Radio
                                checked={selectedValue === "d"}
                                onChange={handleChange}
                                value="d"
                                name="radio-buttons"
                                inputProps={{ "aria-label": "D" }}
                            />
                            <span> {item.questao_d} </span>
                        </div>
                    </div>
                    <button className="resolve">RESOLVER QUESTÃO</button>
                </div>
            </main>
        </div>
    )
}

export default QuestionPage
