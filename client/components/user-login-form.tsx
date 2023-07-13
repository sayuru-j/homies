"use client";

import { userLoginSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Seperator from "./UI/seperator";
import Link from "next/link";
import { Icons } from "./icons";
import { buttonVariants } from "./UI/button";
import { useGlobalContext } from "@/context/store";
import AuthService from "@/lib/services/auth-service";

interface UserLoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userLoginSchema>;

export function UserLoginForm({ className, ...props }: UserLoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(userLoginSchema),
  });
  const [isLoading, setIsloading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    setIsloading(true);

    const loginResult = await AuthService.login({
      email: data.email.toLowerCase(),
      password: data.password,
    });

    if (loginResult) {
      window.alert("Login successful");
      router.push("/");
    }
  };

  return (
    <div className={`${className} "grid gap-6"`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label
              className="text-xs text-muted-foreground pl-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="h-10 placeholder:text-sm placeholder:text-muted-foreground rounded border px-2"
              placeholder="example@gmail.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors?.email?.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <label
              className="text-xs text-muted-foreground pl-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="passwrod"
              className="h-10 placeholder:text-sm placeholder:text-muted-foreground rounded border px-2"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password")}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors?.password?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`${buttonVariants({
              size: "default",
            })} uppercase mt-2 inline-flex items-center justify-center gap-1`}
            disabled={isLoading}
          >
            {isLoading && <Icons.spinner size={17} className="animate-spin" />}
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
          })} flex gap-1 border-[1px] border-accent uppercase text-primary/80`}
          disabled={isLoading}
        >
          <Icons.google size={20} />
          Google
        </button>
        <Link
          href="/register"
          className="text-center font-medium cursor-pointer text-xs underline py-3"
          passHref
        >
          Click here to create an account.
        </Link>
      </div>
    </div>
  );
}
