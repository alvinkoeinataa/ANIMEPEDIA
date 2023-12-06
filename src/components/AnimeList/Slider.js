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
        className=" w-full"
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
          <SwiperSlide key={index}>
            {anime.anime ? (
              <div className="flex flex-col h-full w-full items-center justify-center">
                <Image src={anime.anime.images.jpg.image_url} width={600} height={350} alt="anime" className="block w-full object-cover " />

                {/* <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                  <h1 className="text-color-primary">{anime.anime.title}</h1>
                </div> */}
                <h1 className="text-color-primary">{anime.anime.title}</h1>
              </div>
            ) : (
              <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer">
                <div className="flex h-full w-full items-center justify-center">
                  <Image src={anime.images.webp.image_url} width={600} height={350} alt="anime" className="block w-full object-cover mr-2" />
                </div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
