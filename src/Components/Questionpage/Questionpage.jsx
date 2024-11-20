import React from "react";
import "./QuestionPage.css"; // Arquivo CSS para estilização

const QuestionPage = () => {
  return (
    <div>
      

      <main>
        <div className="question-card">
          <h1>
            #3126156 Tec Literal - Analista de Tecnologia da Informação
            (DATAPREV) / 2024 - "Inéditas Literais"
          </h1>
          <p>
            <strong>Matéria:</strong> Auditoria Governamental e Controle{" "}
            <strong>Assunto:</strong> Outros Normativos da CGU
          </p>
          <p className="statement">
            Julgue o item a seguir de acordo com a Instrução Normativa nº 5 de
            2021, que dispõe sobre o Plano Anual de Auditoria Interna, sobre o
            Relatório Anual de Atividades de Auditoria Interna e sobre o parecer
            sobre a prestação de contas das entidades das unidades de auditoria
            interna governamental sujeitas à supervisão técnica do Sistema de
            Controle Interno do Poder Executivo Federal.
          </p>
          <p>
            O PAINT aprovado deve ser encaminhado à respectiva unidade de
            supervisão técnica até o último dia útil do mês de fevereiro do ano
            a que se refere.
          </p>
          <div className="options">
            <button className="option">Certo</button>
            <button className="option">Errado</button>
          </div>
          <button className="resolve">RESOLVER QUESTÃO</button>
        </div>
      </main>

    
    </div>
  );
};

export default QuestionPage;
