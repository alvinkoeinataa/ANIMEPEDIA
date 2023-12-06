"use client";

import { FileSearch } from "@phosphor-icons/react";

import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} className="text-color-accent" />
        <h1 className="text-color-accent text-4xl font-bold">NOT FOUND</h1>
        <button onClick={() => router.back()} className="text-color-primary">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default NotFound;
