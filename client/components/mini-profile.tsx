"use client";

import Link from "next/link";
import { buttonVariants } from "./UI/button";
import { useGlobalContext } from "@/context/store";
import AuthService from "@/lib/services/auth-service";

export default function MiniProfile() {
  const { userId, data } = useGlobalContext();

  return (
    <div className="flex gap-2 items-center">
      {userId ? (
        <button
          onClick={() => AuthService.logout()}
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

      <button type="button" onClick={() => {}}>
        Click this to get session
      </button>
    </div>
  );
}
