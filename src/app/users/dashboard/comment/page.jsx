import React from "react";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";

const page = async () => {
  const user = await authUserSession();
  const koment = await prisma.comment.findMany({ where: { user_email: user.email } });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Comment"} />
      <div className="grid grid-cols-1 py-2 gap-4">
        {koment.map((item) => (
          <Link href={`/anime/${item.anime_mal_id}`} key={item.id} className="bg-color-primary text-color-dark p-4">
            <p className="text-md font-bold">{item.anime_title}</p>
            <p className="italic">{item.comment}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
