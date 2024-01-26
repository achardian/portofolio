"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Parallax,
  Navigation,
  Autoplay,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css/bundle";
import Image from "next/image";

const Carousel = ({ images }: { images: string[] }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      modules={[Pagination, EffectCoverflow]}
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      className="mySwiper"
    >
      {images.map((image) => (
        <SwiperSlide key={image} className="py-10">
          <div className="relative mx-auto h-[400px] w-[80%] overflow-clip rounded-lg">
            <Image
              src={image}
              alt="project-image"
              fill
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
