"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Slider({ api }) {
  return (
    <section className="pb-12">
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation]}
        className="h-96 w-full"
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },

          480: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          },

          800: {
            slidesPerView: 4,
          },

          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {api.data?.map((anime, index) => (
          <SwiperSlide>
            <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer">
              <div className="flex h-full w-full items-center justify-center">
                <Image src={anime.images.webp.image_url} width={600} height={350} alt="anime" className="block h-full w-full object-cover mr-2" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
