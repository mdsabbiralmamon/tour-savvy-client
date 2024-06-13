// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//slider image
import slide1image from "../../../assets/images/slider-photos/slider-photo1.jpg";
import slide2image from "../../../assets/images/slider-photos/slider-photo2.jpg";
import slide3image from "../../../assets/images/slider-photos/slider-photo3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Slider = () => {
  return (
    <div className="h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          className="text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide1image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="font-bold font-satisfy text-theme_secondary text-5xl">Explore the Sundarbans Mangrove Forest</h2>
            <p className=" m-4 text-theme_secondary">
            Embark on a thrilling adventure through the UNESCO-listed Sundarbans, home to the majestic Royal Bengal Tigers and diverse wildlife.
            </p>
            <button className="btn bg-theme_primary border-theme_secondary text-theme_secondary m-4 hover:text-theme_primary">
              View Details <FaArrowAltCircleRight />{" "}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide2image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="font-bold font-satisfy text-theme_secondary text-5xl">Discover the Vibrant Culture of Bangkok</h2>
            <p className=" m-4 text-theme_secondary">
            Immerse yourself in the bustling streets of Bangkok, where ancient temples coexist with modern skyscrapers, and vibrant markets offer a sensory delight.
            </p>
            <button className="btn bg-theme_primary border-theme_secondary text-theme_secondary m-4 hover:text-theme_primary">
              View Details <FaArrowAltCircleRight />{" "}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide3image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="font-bold font-satisfy text-theme_secondary text-5xl">Experience the Tranquility of Bali`s Rice Terraces</h2>
            <p className="m-4 text-theme_secondary">
            Indulge in the natural beauty of Bali`s lush rice terraces, where cascading green fields create a serene backdrop for unforgettable moments.
            </p>
            <button className="btn bg-theme_primary border-theme_secondary text-theme_secondary m-4 hover:text-theme_primary">
              View Details <FaArrowAltCircleRight />{" "}
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;