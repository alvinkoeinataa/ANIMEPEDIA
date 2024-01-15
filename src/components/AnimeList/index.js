import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 mb-8">
      {api.data?.map((anime, index) => (
        <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer">
          <Image src={anime.images.webp.image_url} width={600} height={350} alt="anime" className="min-h-[300px] max-h-[300px] sm:h-[350px] md:h-[300px] lg:h-[350px] rounded-lg" />
          <h3 className="font-bold md:text-xl text-md p-4 text-color-primary">{anime.title || anime.name} </h3>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
