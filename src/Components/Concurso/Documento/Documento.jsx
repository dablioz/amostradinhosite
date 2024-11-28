import DescriptionIcon from '@mui/icons-material/Description';
import "./Documento.css"

export default function Documento(props) {

    let filename = props.link.split("/").pop();
    
    return (
        <div id='Documento-cont'>
            <a href={props.link} target='_blank'>
                <p className='nomegrande'><b>{filename}</b></p>
                <DescriptionIcon />
            </a>
        </div>
    );
}  