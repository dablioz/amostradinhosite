import { Button } from "@mui/material";
import "./Curso.css";

export function Curso(props) {
    return (
        <div
            id="card"
            style={{
                backgroundImage: `radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${props.image})`,
            }}
        >
            <div>
                <h3>{props.text}</h3>
            </div>
            <div id="bottom" >
                <a href={props.link} target="_blank">
                    <Button
                        variant="outlined"
                        className="info"
                    >
                        Saiba mais
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default Curso;