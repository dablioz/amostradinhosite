{/*import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";*/}
import * as React from "react"
import { Concurso, EditConcurso } from "../../Components/Concurso/Concurso";
import LoadConcursos from "../../Components/Concurso/LoadConcurso";
import {Button} from "@mui/material"
{/*import Curso from "../../Components/Curso/Curso";
import caixa from "../../assets/caixa.jpg";
import mpam from "../../assets/MPAM.jpg"
import cmm from "../../assets/CMM.jpeg"*/}

import "./Cursos.css";

function Cursos() {
    {/*const i = [
        { text: "caixa 2024", image: caixa, link: "https://caixa.cesgranrio.org.br/home" },
        { text: "MPAM", image: mpam, link: "https://www.mpam.mp.br/"},
        { text: "CMM", image: cmm, link: "https://www.cmm.am.gov.br/"},
    ];

    const x = i.map(({ text, image, link }, i) => {
        return (
            <SwiperSlide key={i}>
                <Curso text={text} image={image} link={link}/>
            </SwiperSlide>
        );
    });
*/}

const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true);
    };

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "95%",
        maxWidth: "800px",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 2,
    };
    
    return (
        <div id="cursos">
            <h2>Concursos</h2>
            <LoadConcursos />

            {/* <Concurso
                items={{
                    image: "https://tinyurl.com/ubyd83bp",
                    title: "xalalá",
                    edital: "28 / 02 / 24",
                    banca: "Instituto Quadrix",
                    fiminsc: "08/04/2024",
                    regiao: "Estadual",
                    files: ["aiaiai", "uiuiui"],
                }}
            /> */}

            <div id="buttons">
                <Button variant="contained" onClick={handleOpen}>
                    Adicionar
                </Button>
            </div>

            <EditConcurso open={open} handleOpen={handleOpen} style={style} />
            {/*<Swiper
                className="myswyper"
                slidesPerView={"auto"}
                spaceBetween={10}
                /* breakpoints={{
                    300: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    900: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                }} *}
                scrollbar={{
                    draggable: true
                }}
                freeMode={true}
                modules={[FreeMode, Scrollbar]}
            >
                {x}
            </Swiper>*/}
        </div>
    );
}
export default Cursos;
