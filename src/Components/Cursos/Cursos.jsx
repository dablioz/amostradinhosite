import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar ,FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import Curso from "./../Curso/Curso";
import "./Cursos.css";
function Cursos() {
    const i = [
        { text: "caixa 2024" },
        { text: "caixa 2024" },
        { text: "caixa 2024" },
        { text: "caixa 2024" },
    ];
    const x = i.map(({ text }, i) => {
        return (
            <SwiperSlide key={i}>
                <Curso text={text} />
            </SwiperSlide>
        );
    });

    return (
        <div className="container">
            <h2>Concursos Federais</h2>

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

            <h2>Concursos Municipais</h2>
        </div>
    );
}
export default Cursos;
