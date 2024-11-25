import { Radio } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Questionpage.css"; // Arquivo CSS para estilização

import { getFirestore } from "firebase/firestore";
import { app } from "../../service/firebaseconfig.jsx";
const db = getFirestore(app);
const questoesRef = collection(db, "questoes");

const QuestionPage = () => {
    const [selectedValue, setSelectedValue] = useState("a");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const [item, setItem] = useState("");

    const { id } = useParams();

    useEffect(() => {
        async function initial() {
            const querySnapshot = await getDocs(query(collection(db, "questoes"), where("id", "==", Number(id))));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                setItem(doc.data());
            });
        }
        initial();
    }, []);

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
                        <div id="option-cont">
                            <Radio id="radioa" checked={selectedValue === "a"} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ "aria-label": "A" }} />
                            <label htmlFor="radioa"> {item.questao_a} </label>
                        </div>

                        <div>
                            <Radio id="radiob" checked={selectedValue === "b"} onChange={handleChange} value="b" name="radio-buttons" inputProps={{ "aria-label": "B" }} />
                            <label htmlFor="radiob"> {item.questao_b} </label>
                        </div>

                        <div>
                            <Radio id="radioc" checked={selectedValue === "c"} onChange={handleChange} value="c" name="radio-buttons" inputProps={{ "aria-label": "C" }} />
                            <label htmlFor="radioc"> {item.questao_c} </label>
                        </div>

                        <div>
                            <Radio id="radiod" checked={selectedValue === "d"} onChange={handleChange} value="d" name="radio-buttons" inputProps={{ "aria-label": "D" }} />
                            <label htmlFor="radiod"> {item.questao_d} </label>
                        </div>
                    </div>
                    <button
                        className="resolve"
                        onClick={() => {
                            if (selectedValue == item.answer) {
                                alert("Voce Acertou");
                            } else {
                                alert("Voce errou");
                            }
                        }}
                    >
                        RESOLVER QUESTÃO
                    </button>
                </div>
            </main>
        </div>
    );
};

export default QuestionPage;
