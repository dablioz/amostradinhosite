import DescriptionIcon from '@mui/icons-material/Description';
import "./Documento.css"

export default function Documento(props) {
    return (
        <div id='Documento-cont'>
            <a href={props.link.link} target='_blank'>
                <p>{props.link.title}</p>
                <DescriptionIcon />
            </a>
        </div>
    );
}