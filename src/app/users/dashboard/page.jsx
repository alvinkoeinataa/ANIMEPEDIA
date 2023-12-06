import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h3 className="text-color-primary text-2xl ">Welcome...{user?.name}</h3>
      <Image src={user?.image} width={350} height={350} alt="gamb" className="w-[20em] h-[20em]" />
      <div className="flex flex-wrap gap-4 py-4">
        <Link href="/users/dashboard/collection" className="bg-color-accent text-color-primary font-bold px-4 py-3 text-xl">
          My Collection
        </Link>
        <Link href="/users/dashboard/comment" className="bg-color-accent text-color-primary font-bold px-4 py-3 text-xl">
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
