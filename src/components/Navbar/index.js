import React from "react";
import InputSearch from "./InputSearch";
import Link from "next/link";
import Char from "../../app/char/page";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4">
        <div>
          <Link href={"/"} className="font-bold text-2xl p-2 mr-2 border border-color-dark">
            ANIMEPEDIA
          </Link>

          <Link href={"/char"} className="">
            <button className="text-lg rounded-lg border text-color-primary border-color-primary p-2 bg-color-secondary">Characters</button>
          </Link>
        </div>

        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
