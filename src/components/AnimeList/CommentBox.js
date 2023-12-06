import prisma from "@/libs/prisma";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments.map((komen) => (
        <div key={komen.id} className="bg-color-primary text-color-dark p-4">
          {/* <div className="bg-color-accent rounded-full w-10 h-10 flex justify-center items-center">
            <p className="font-bold text-color-primary text-lg">{komen.user_email.slice(0, 1)}</p>
          </div> */}

          <p className="font-bold">{komen.username}</p>
          <p>{komen.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
