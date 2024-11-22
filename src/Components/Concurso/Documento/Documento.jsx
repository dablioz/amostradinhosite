import DescriptionIcon from '@mui/icons-material/Description';
import "./Documento.css"

export default function Documento(props) {

    let filename = props.link.split("/").pop();
    
    return (
        <div id='Documento-cont'>
            <div href={props.link} target='_blank'>
                <p className='nomegrande'>{filename}</p>
                <DescriptionIcon />
            </div>
        </div>
    );
}  