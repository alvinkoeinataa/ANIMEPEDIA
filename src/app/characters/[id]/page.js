"use client";
import Slider from "@/components/AnimeList/Slider";
import { apiLibs } from "@/libs/apiLibs";
import Image from "next/image";
import React from "react";

const Character = async ({ params: { id } }) => {
  const char = await apiLibs(`characters/${id}`);
  const charAnime = await apiLibs(`characters/${id}/anime`);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="">
          <h1 className="px-8 mb-2 text-3xl text-color-primary">{char.data?.name}</h1>
          <Image src={char.data.images.jpg.image_url} alt="gamb" width={350} height={350} className="px-8 w-[35em] rounded object-cover h-[23em] mb-6" />
        </div>

        <h1 className="text-color-primary my-8">{char.data.about.slice(0, 1000)}</h1>
        {/* <h1 className="text-color-primary">{charAnime.data[0].anime.title}</h1> */}
      </div>
      <Slider api={charAnime} />
    </>
  );
};

export default Character;
