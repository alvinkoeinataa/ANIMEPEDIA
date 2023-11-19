"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} className="text-color-accent" />
        <h1 className="text-color-accent text-4xl font-bold">NOT FOUND</h1>
        <Link href="/" className="text-color-primary">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
