"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePosting = async (e) => {
    e.preventDefault();
    const data = { anime_mal_id, user_email, comment, username, anime_title };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
  };

  return (
    <div>
      <h1 className="flex flex-col gap-2">
        {isCreated && <p className="text-color-primary">postingan terkirim</p>}
        <textarea onChange={handleInput} className="w-full h-32 text-xl p-4" value={comment}></textarea>
        <button onClick={handlePosting} className="w-52 py-2 px-3 bg-color-accent text-color-primary">
          Posting Komentar
        </button>
      </h1>
    </div>
  );
};

export default CommentInput;
