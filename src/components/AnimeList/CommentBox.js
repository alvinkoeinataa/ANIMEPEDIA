import prisma from "@/libs/prisma";
import Image from "next/image";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="w-[30em] mb-4 ">
      {comments.map((komen) => (
        <div key={komen.id} className="bg-color-primary text-color-dark p-2 mb-4 rounded-lg">
          <div className="flex flex-row">
            <Image src={komen.user_image} alt="gamb" width={100} height={100} className="w-[3em] h-[3em] rounded-full border border-red-800 mb-6 mr-3" />
            <div>
              <p className="font-bold">{komen.username}</p>
              <p>{komen.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
