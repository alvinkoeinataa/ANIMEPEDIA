import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-2 justify-between">
      {user ? (
        <Link href={"/users/dashboard"} className="text-color-primary">
          Dashboard
        </Link>
      ) : null}

      <Link href={actionURL} className="flex justify-center items-center border-solid border-3 bg-color-dark text-color-primary py-1 px-8">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
