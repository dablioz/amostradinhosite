import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import Curso from "../../Components/Curso/Curso";
import caixa from "../../assets/caixa.jpg";
import mpam from "../../assets/MPAM.jpg"
import cmm from "../../assets/CMM.jpeg"

import "./Cursos.css";

function Cursos() {
    const i = [
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

    return (
        <div className="container">
            <h2>Concursos</h2>

            <Swiper
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
                }} */
                scrollbar={{
                    draggable: true,
                    hide: true,
                }}
                freeMode={true}
                modules={[FreeMode, Scrollbar]}
            >
                {x}
            </Swiper>
        </div>
    );
}
export default Cursos;
