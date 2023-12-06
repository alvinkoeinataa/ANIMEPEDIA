"use client";
import Slider from "@/components/AnimeList/Slider";
import { apiLibs } from "@/libs/apiLibs";
import Image from "next/image";
import React from "react";

const Character = async ({ params: { id } }) => {
  const char = await apiLibs(`characters/${id}`);
  const charAnime = await apiLibs(`characters/${id}/anime`);

  return (
    <div>
      <h1 className="ml-5 text-3xl text-color-primary">{char.data?.name}</h1>
      <Image src={char.data.images.jpg.image_url} alt="gamb" width={350} height={350} className="w-[20em] rounded object-cover h-[20em] mb-6" />
      {/* <h1 className="text-color-primary">{char.data.about.slice(0, 1000)}</h1> */}
      <h1 className="text-color-primary">{charAnime.data[0].anime.title}</h1>

      <Slider api={charAnime} />
    </div>
  );
};

export default Character;
