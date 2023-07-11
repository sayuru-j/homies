"use client";

import Link from "next/link";
import { buttonVariants } from "./UI/button";
import { useGlobalContext } from "@/context/store";
import { getSession, logoutRequest } from "@/lib/services";

export default function MiniProfile() {
  const { userId, data } = useGlobalContext();

  function Logout() {
    logoutRequest();
  }

  console.log(data);

  return (
    <div className="flex gap-2 items-center">
      {userId ? (
        <button
          onClick={Logout}
          type="button"
          className={buttonVariants({
            size: "sm",
          })}
        >
          Log out
        </button>
      ) : (
        <Link
          className={buttonVariants({
            size: "sm",
          })}
          href="/login"
        >
          Login
        </Link>
      )}

      <button
        type="button"
        onClick={() => {
          getSession("/user/session");
        }}
      >
        Click this to get session
      </button>
    </div>
  );
}
