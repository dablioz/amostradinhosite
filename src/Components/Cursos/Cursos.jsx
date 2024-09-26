import { Button } from "@mui/material";
import "./Cursos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

function Cursos() {
    return (
        <>
            <h2>Cursos</h2>

            <Swiper
                id="myswyper"
                spaceBetween={10}
                breakpoints={{
                    400: {
                        slidesPerView: 2,
                    },
                    800: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                scrollbar={{
                    draggable: true,
                    hide: true,
                }}
                freeMode={true}
                modules={[FreeMode, Scrollbar]}
            >

                {/* tu vai tirar isso aqui daqui né */}
                <SwiperSlide>
                    <div id="caixa">
                        <div>
                            <h3>Caixa 2024</h3>
                        </div>
                        <div id="bottom">
                            <Button variant="outlined" className="info">
                                Saiba mais
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="caixa">
                        <div>
                            <h3>Caixa 2024</h3>
                        </div>
                        <div id="bottom">
                            <Button variant="outlined" className="info">
                                Saiba mais
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="caixa">
                        <div>
                            <h3>Caixa 2024</h3>
                        </div>
                        <div id="bottom">
                            <Button variant="outlined" className="info">
                                Saiba mais
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="caixa">
                        <div>
                            <h3>Caixa 2024</h3>
                        </div>
                        <div id="bottom">
                            <Button variant="outlined" className="info">
                                Saiba mais
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="caixa">
                        <div>
                            <h3>Caixa 2024</h3>
                        </div>
                        <div id="bottom">
                            <Button variant="outlined" className="info">
                                Saiba mais
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Cursos;
