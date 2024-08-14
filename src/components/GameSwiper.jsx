import React, { useState } from "react";
//import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./gameSwiper.css";

//import required modules
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

function GameSwiper({ games }) {
  const [active, setActive] = useState(false);

  const handleToggleVideo = () => {
    setActive(!active);
  };
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      // autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      // }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameSwiper"
    >
      {games.map((game) => (
        <SwiperSlide key={game._id}>
          <div className="gameSlider">
            <img src={game.img} alt="Game Image" />
            <div className={`video ${active ? 'active' : undefined}`}>
            <iframe
                width="771"
                height="434"
                src={game.trailer}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
            <div className="content">
              <h2>{game.nombre}</h2>
              <p>{game.descripcion}</p>
              <div className="buttons">
                <a href="#" className="orderBtn">
                  Order Now
                </a>
                <a
                  href="#"
                  className={`playBtn ${active ? 'active' : undefined}`}
                  onClick={handleToggleVideo}
                >
                  <span className="pause">
                    <i className="bi bi-pause-fill"></i>
                  </span>
                  <span className="play">
                    <i className="bi bi-play-fill"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GameSwiper;