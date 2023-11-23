"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Page({ api }) {
  return (
    <section className="mb-12">
      <Swiper navigation pagination={{ type: "fraction" }} modules={[Navigation]} className="w-full">
        {api.data?.map((anime, index) => (
          <SwiperSlide key={index}>
            <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer text-color-primary">
              <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
                <Image src={anime.images.webp.large_image_url} width={600} height={500} alt="anime" className=" w-full object-cover" />
                <side className="flex flex-col items-center justify-center bg-color-secondary md:flex sm:hidden">
                  <h1 className="text-xl sm:text-4xl">{anime.title_english || anime.title}</h1>
                  <div className="flex flex-row m-5">
                    {anime.genres.slice(0, 2).map((item) => (
                      <button key={index} className="mr-2 text-lg rounded-lg border text-white border-color-primary p-2 bg-color-accent">
                        <h1 className="text-sm sm:text-2xl">{item.name}</h1>
                      </button>
                    ))}
                  </div>

                  <h1 className="text-lg sm:text-3xl m-0 sm:m-4">{anime.score}</h1>

                  <h1 className="text-lg sm:text-3xl">{anime.episodes} episodes</h1>
                </side>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
