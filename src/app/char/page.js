// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Char = ({ api }) => {
//   return (
//     <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4 mb-8">
//       {api.data?.map((anime, index) => (
//         <div>
//           <Image src={anime.images.webp.image_url} width={600} height={350} alt="anime" className="rounded-lg" />
//           <h3 className="font-bold md:text-xl text-md p-4 underline">{anime.title || anime.name} </h3>
//           {/* <h3 className="font-bold md:text-xl text-md p-4 underline">
//             {anime.score}
//             {anime.year}
//           </h3> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Char;

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
// import Slider from "@/components/AnimeList/Slider";

import { apiLibs } from "@/libs/apiLibs";

export default async function Char() {
  const charData = await apiLibs("top/characters");

  return (
    <>
      <section>
        <Header title="Favourite Characters" linkTitle="" linkHref="" />
        <AnimeList api={charData} />
      </section>
    </>
  );
}
