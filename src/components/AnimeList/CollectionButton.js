"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();

  const handleCollection = async (e) => {
    e.preventDefault();
    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(true);
      router.refresh();
    }
  };

  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">Berhasil ditambahkan ke koleksi</p>
      ) : (
        <button onClick={handleCollection} className="ml-5 px-2 py-1 bg-color-accent text-color-primary ">
          Add to favourite
        </button>
      )}
    </>
  );
};

export default CollectionButton;
