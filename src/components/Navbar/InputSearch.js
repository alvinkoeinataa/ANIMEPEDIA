"use client";

import { useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() === "") return;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();

      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input type="text" placeholder="cari anime...." className="w-full p-2 rounded" ref={searchRef} onKeyDown={handleSearch} />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
