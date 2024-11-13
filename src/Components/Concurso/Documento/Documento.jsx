import DescriptionIcon from '@mui/icons-material/Description';
import "./Documento.css"

export default function Documento(props) {
    return (
        <div id='Documento-cont'>
            <a href="">
                <p>{props.title}</p>
                <DescriptionIcon />
            </a>
        </div>
    );
}