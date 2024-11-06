import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/images/sincere-laugh-showing-picture-smartphone-casual-meeting-with-best-friends-restaurant-terrace.jpg";
import image2 from "../../assets/images/happy-waitress-giving-coffee-customers-while-serving-them-coffee-shop.jpg";
import image3 from "../../assets/images/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpg";

function Slider() {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      slidesPerView={1}
      slidesPerGroup={1}
    >
      <SwiperSlide>
        <img src={image1} alt="Hero Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="Hero Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="Hero Image 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image1} alt="Hero Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="Hero Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="Hero Image 3" />
      </SwiperSlide>
    </Swiper>
  );
}
export default Slider;
