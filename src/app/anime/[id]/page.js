import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { apiLibs } from "@/libs/apiLibs";
import Image from "next/image";
import React from "react";

const Detail = async ({ params: { id } }) => {
  const anime = await apiLibs(`anime/${id}`);
  // console.log(anime);

  return (
    <div className="pt-4 px-4 mb-4">
      <h1 className="ml-5 text-3xl text-color-primary">
        {anime.data?.title} - {anime.data?.year}
      </h1>

      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>PERINGKAT</h3>
          <p>{anime.data?.rank}</p>
        </div>

        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>SKOR</h3>
          <p>{anime.data?.score}</p>
        </div>

        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>ANGGOTA</h3>
          <p>{anime.data?.members}</p>
        </div>

        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>EPISODE</h3>
          <p>{anime.data?.episodes}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-2 grid-cols-1 mt-6">
        <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={350} height={350} className="w-full rounded object-cover max-h-96" />
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
      <div className="flex flex-col p-4 gap-2 ">
        <h2 className="text-xl text-color-primary">
          {anime.data.duration} | {anime.data.rating}
        </h2>
        <p className="text-color-primary ">{anime.data.synopsis}</p>
      </div>
    </div>
  );
};

export default Detail;
