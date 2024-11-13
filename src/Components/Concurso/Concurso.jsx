import "./Concurso.css"


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Collapse } from "@mui/material";
import Documento from "./Documento/Documento.jsx";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));


export default function Concurso(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
        
    };

    return (
        <div className="cont">
            <div id="Concurso-cont">
                <img id="image" src={props.image} alt="" />
                <div id="content">
                    <h2> {props.titulo} </h2>
                    <div id="Concurso">
                        <div id="left">
                            <p>{"Edital: "} <a>{props.edital}</a></p>
                            <p>{"Banca: "} <a href="">{props.banca}</a> </p>
                        </div>
                        <div id="right">
                            <p>{"Inscrições até: "} <a href="">{props.fiminsc}</a> </p>
                            <p>{"Regiao: "} <a href="">{props.regiao}</a> </p>
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
                <div id="teste">
                    <Documento title={"caralho"} />
                    <Documento title={"caralho"} />
                    <Documento title={"caralho"} />
                    <Documento title={"caralho"} />
                </div>
            </Collapse >
        </div >
    );
}