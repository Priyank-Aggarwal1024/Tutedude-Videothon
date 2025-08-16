import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { AppSvg } from "../assets";
import "../styles/BuildProductType.css";
import "swiper/css";
import "swiper/css/autoplay";
import { useEffect, useRef, useState } from "react";
import EventsSvg from "../assets/svg/EventsSvg";
import CreativeSvg from "../assets/svg/CreativeSvg";
import EntertainmentSvg from "../assets/svg/EntertainmentSvg";
import MarketingSvg from "../assets/svg/MarketingSvg";

function BuildProductType() {
  const productsBuild = [
    {
      img: <AppSvg />,
      head: "Social Media",
      content: "Reels, Shorts, Stories",
      bg: "#DF7C4D",
      color: "#FFFFFF",
    },
    {
      img: <MarketingSvg />,
      head: "Marketing",
      content: "Ads, Promos, Launch videos",
      bg: "#FFEAE0",
      color: "#0F1E3A",
    },
    {
      img: <EntertainmentSvg />,
      head: "Entertainment",
      content: "Vlogs, Music videos, Gaming edits",
      bg: "#14203A",
      color: "#EDE2DC",
    },
    {
      img: <CreativeSvg />,
      head: "Creative",
      content: "Short films, Motion graphics, Documentaries",
      bg: "#F9FAFC",
      color: "#1F2D3D",
    },
    {
      img: <EventsSvg />,
      head: "Events",
      content: "Weddings, Travel diaries",
      bg: "#FFEAE0",
      color: "#181818",
    },
    {
      img: <AppSvg />,
      head: "Social Media",
      content: "Reels, Shorts, Stories",
      bg: "#DF7C4D",
      color: "#FFFFFF",
    },
    {
      img: <MarketingSvg />,
      head: "Marketing",
      content: "Ads, Promos, Launch videos",
      bg: "#FFEAE0",
      color: "#0F1E3A",
    },
    {
      img: <EntertainmentSvg />,
      head: "Entertainment",
      content: "Vlogs, Music videos, Gaming edits",
      bg: "#14203A",
      color: "#EDE2DC",
    },
    {
      img: <CreativeSvg />,
      head: "Creative",
      content: "Short films, Motion graphics, Documentaries",
      bg: "#F9FAFC",
      color: "#1F2D3D",
    },
    {
      img: <EventsSvg />,
      head: "Events",
      content: "Weddings, Travel diaries",
      bg: "#FFEAE0",
      color: "#181818",
    },
  ];
  const [width, setWidth] = useState(window.innerWidth);

  const swiper = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return window.removeEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <div className="bpt">
        <div className="section-heading">
          <span>Across all </span>
          <span className="section-heading-orange">Styles & Industries</span>
        </div>
        <div className="bpt-main">
          <Swiper
            className="bpt-main-slider"
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            spaceBetween={10}
            breakpoints={{
              768: {
                spaceBetween: 20,
              },
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setActiveIndex(realIndex);
            }}
            ref={swiper}
          >
            {productsBuild
              .slice(0, width < 768 ? 5 : productsBuild.length)
              .map((product, idx) => (
                <SwiperSlide
                  className="bpt-main-slides"
                  key={idx}
                  style={{
                    color: product.color,
                    backgroundColor: product.bg,
                  }}
                >
                  <div className="bpt-main-slides-top">{product.img}</div>
                  <div className="bpt-main-slides-bottom">
                    <div className="bpt-msb-head">{product.head}</div>
                    <div className="bpt-msb-content">{product.content}</div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="bpt-main-navigation">
            {productsBuild
              .slice(0, width < 768 ? 5 : productsBuild.length)
              .map((_, idx) => (
                <div
                  className={`bpt-main-navigation-dot ${
                    activeIndex === idx ? "active" : ""
                  }`}
                  key={idx}
                  onClick={() => swiper.current?.swiper?.slideToLoop(idx)} // 🔁 Go to clicked slide
                ></div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BuildProductType;
