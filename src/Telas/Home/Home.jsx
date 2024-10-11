import "./Home.css";
import Cursos from "../Cursos/Cursos";
function Home() {
    return (
        <div className="cont">
            {/* 
            <div id="bg">
                <div id="teste"></div>
            </div> 
            */}
            
            <div id="page">
                <Cursos/>
            </div>
        </div>
    );
}

export default Home;
