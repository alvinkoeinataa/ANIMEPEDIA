"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Page({ api }) {
  console.log(api.data);
  return (
    <section className="mb-12">
      <Swiper navigation pagination={{ type: "fraction" }} modules={[Navigation]} className="w-full">
        {api.data?.map((anime, index) => (
          <SwiperSlide key={index}>
            <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer text-color-primary">
              <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
                <Image src={anime.images.webp.large_image_url} width={600} height={500} alt="anime" className=" h-[32em] w-full object-cover" />
                <side className="flex flex-col items-center justify-center bg-color-secondary md:flex sm:hidden">
                  <h1 className="text-2xl sm:text-4xl">{anime.title_english || anime.title}</h1>
                  <div className="flex flex-row m-5">
                    {anime.genres.slice(0, 2).map((item) => (
                      <button key={index} className="mr-2 text-lg rounded-lg border text-white border-color-primary p-2 bg-color-accent">
                        <h1 className="text-sm sm:text-2xl">{item.name}</h1>
                      </button>
                    ))}
                  </div>

                  <h1 className="text-xl sm:text-3xl m-0 sm:m-4">{anime.score}</h1>

                  <h1 className="text-xl sm:text-3xl">{anime.episodes} episodes</h1>
                </side>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
// import "swiper/swiper-bundle.min.css";

// export const Slider = ({ api }) => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//       effect={"cube"}
//       cubeEffect={{
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//       }}
//     >
//       {api.data?.map((anime, index) => (
//         <SwiperSlide key={index}>
//           <Image src={anime.images.webp.image_url} width={600} height={350} alt="anime" className="rounded-lg" />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// import { Swiper, SwiperSlide } from "swiper/react";
// import "@/swiper/swiper-bundle.min.css"; // Make sure to import the Swiper styles
// import SwiperCore, { Navigation } from "swiper/core"; // Import necessary Swiper modules
// import Image from "next/image";
// import Link from "next/link";

// SwiperCore.use([Navigation]); // Enable Swiper Navigation module

// export default function Page({ api }) {
//   return (
//     <section className="py-12">
//       <div className="container">
//         <Swiper
//           navigation
//           pagination={{ type: "fraction" }}
//           modules={[Navigation]}
//           onSwiper={(swiper) => console.log(swiper)}
//           className="h-96 w-full"
//           slidesPerView={5}
//           breakpoints={{
//             // when window width is >= 320px
//             320: {
//               slidesPerView: 1,
//             },
//             // when window width is >= 480px
//             480: {
//               slidesPerView: 2,
//             },
//             // when window width is >= 768px
//             768: {
//               slidesPerView: 3,
//             },
//             // when window width is >= 1024px
//             1024: {
//               slidesPerView: 5,
//             },
//           }}
//         >
//           {api.data?.map((anime, index) => (
//             <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer text-color-primary">
//               <SwiperSlide key={index}>
//                 <div className="flex h-full w-full items-center justify-center">
//                   <Image src={anime.images.webp.large_image_url} width={600} height={350} alt="anime" className="block h-full w-full object-cover" />
//                 </div>
//               </SwiperSlide>
//             </Link>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
