import React from "react";
import LeftArrow from "../../icons/leftarrow2.png";
import RightArrow from "../../icons/rightarrow2.png";
import Akg from "../../images/akg.png";
import Boss from "../../images/boss.png";
import Roland from "../../images/roland.png";
import Shure from "../../images/shure.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "./Marcas.scss";

//SwiperJS
import "swiper/swiper.scss";
SwiperCore.use([Navigation]);

const Marcas = () => {
  return (
    <section className="marcas">
      <div className="container">
        <h1>
          As <strong>melhores</strong> marcas
        </h1>
        <p>
          it is a long established fact that a reader will be distracted by the
          readable
        </p>
        <div className="swiper-wrapper">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            className="marcas-logo"
            navigation={{ nextEl: ".right-arrow", prevEl: ".left-arrow" }}
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 65,
              },
              780: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              920: {
                slidesPerView: 4,
                spaceBetween: 70,
              },
            }}
          >
            <SwiperSlide>
              <img className="akg" src={Akg} alt="akg" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="boss" src={Boss} alt="boss" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="roland" src={Roland} alt="roland" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="shure" src={Shure} alt="shure" />
            </SwiperSlide>
          </Swiper>
          <img className="left-arrow" src={LeftArrow} alt="left-arrow" />
          <img className="right-arrow" src={RightArrow} alt="right-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Marcas;
