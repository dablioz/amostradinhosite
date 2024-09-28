import { Button } from "@mui/material";

function Curso(props) {
    return (
        <div id="container">
            
            <div>
                <h3>{props.text}</h3>
            </div>
            <div id="bottom">
                <Button variant="outlined" className="info">
                    Saiba mais
                </Button>
            </div> 
        </div>
    );
}

export default Curso;
