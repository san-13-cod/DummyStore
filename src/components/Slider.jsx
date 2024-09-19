import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import Slides from "./Slides";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "./slider.css";

// Import Images
import TechImage from "../Images/Tech.jpg";
import FurnitureImage from "../Images/Furniture.jpg";
import ClothImage from "../Images/Cloth.jpg";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  const swiperData = [
    { title: "Best Offer", text: "New Arrivals on sale", image: ClothImage },
    {
      title: "Flash Deals",
      text: "Get the best products at the best price",
      image: TechImage,
    },
    {
      title: "Last Minute",
      text: "Grab Last Minute Deals",
      image: FurnitureImage,
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
        autoplay={{ delay: 2000 }}
        effect="fade"
        loop={true}
      >
        {swiperData.map((singleData, index) => (
          <SwiperSlide key={index}>
            <Slides {...singleData} clas={"slide_main"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
