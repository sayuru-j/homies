"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { userRegisterSchema } from "@/lib/validations/auth";
import { buttonVariants } from "./UI/button";
import React from "react";
import { useSearchParams } from "next/navigation";
import Seperator from "./UI/seperator";
import { Icons } from "./icons";

interface UserRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userRegisterSchema),
  });
  const [isLoading, setIsloading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();

  return (
    <div className={`${className} "grid gap-6"`}>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label
              className="text-xs text-muted-foreground pl-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id=""
              className="h-10 placeholder:text-sm placeholder:text-muted-foreground rounded border px-2"
              placeholder="pops@gmail.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <label
              className="text-xs text-muted-foreground pl-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id=""
              className="h-10 placeholder:text-sm placeholder:text-muted-foreground rounded border px-2"
              placeholder="password"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className={`${buttonVariants({
              size: "default",
            })} uppercase mt-2`}
            disabled={isLoading}
          >
            Sign In
          </button>
        </div>
      </form>
      <Seperator seperate="Google" />
      <div className="grid">
        <button
          className={`${buttonVariants({
            variant: "ghost",
            size: "default",
          })} flex gap-1 border-[1px] border-accent uppercase`}
          disabled={isLoading}
        >
          <Icons.google size={20} />
          Google
        </button>
      </div>
    </div>
  );
}
