import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4 mb-8">
      {api.data?.map((anime, index) => (
        <div key={index}>
          <Image src={anime.images.webp.image_url} width={600} height={350} alt="anime" className="rounded-lg" />
          <h3 className="font-bold md:text-xl text-md p-4 text-color-primary">{anime.title || anime.name} </h3>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
