import "./Home.css";
import Cursos from "../Cursos/Cursos";
import AccountCircleOutlinedIcon  from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from '@mui/material';

function Home() {
    return (
        <div className="cont">
            {/* 
            <div id="bg">
                <div id="teste"></div>
            </div> 
            */}

            <div id="page">
                <Cursos />
            </div>
 
        </div>
    );
}

export default Home;
