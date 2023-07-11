"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { userRegisterSchema } from "@/lib/validations/auth";
import { buttonVariants } from "./UI/button";
import React, { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Seperator from "./UI/seperator";
import { Icons } from "./icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerRequest } from "@/lib/services";

interface UserRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userRegisterSchema>;

export function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(userRegisterSchema),
  });
  const [isLoading, setIsloading] = useState<boolean>(false);
  const selectedRoleRef = useRef<string>("");
  const router = useRouter();

  const handleRadioChange = (e: any) => {
    selectedRoleRef.current = e.target.value;
  };

  async function onSubmit(data: FormData) {
    setIsloading(true);

    const signInResult = await registerRequest("/auth/register", {
      name: data.name,
      email: data.email.toLowerCase(),
      password: data.password,
      role: selectedRoleRef.current,
    });

    if (signInResult.error)
      setError("email", {
        type: "required",
        message: signInResult.error,
      });
    if (signInResult.success) router.push("/login");
  }

  return (
    <div className={`${className} "grid gap-6"`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label
              className="text-xs text-muted-foreground pl-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              className="h-10 placeholder:text-sm placeholder:text-muted-foreground rounded border px-2"
              placeholder="Pops Lal"
              type="text"
              autoCorrect="off"
              disabled={isLoading}
              {...register("name")}
            />
            {errors?.name && (
              <p className="px-1 text-xs text-red-600">
                {errors?.name?.message}
              </p>
            )}
          </div>
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
          <div className="flex items-center gap-2">
            <div className="flex w-1/2 items-center">
              <input
                id="designer"
                type="radio"
                value="designer"
                name="bordered-radio"
                className="w-4 h-4"
                onChange={handleRadioChange}
                required
              />
              <label
                htmlFor="designer"
                className="inline-flex items-center gap-2 w-full py-4 ml-2 text-sm font-medium"
              >
                Designer <Icons.design size={20} />
              </label>
            </div>
            <div className="flex w-1/2 items-center">
              <input
                id="developer"
                type="radio"
                value="developer"
                name="bordered-radio"
                className="w-4 h-4 "
                onChange={handleRadioChange}
                required
              />

              <label
                htmlFor="developer"
                className="inline-flex items-center gap-2 w-full py-4 ml-2 text-sm font-medium"
              >
                Developer <Icons.code size={20} />
              </label>
            </div>
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
          href="/login"
          className="text-center font-medium cursor-pointer text-xs underline py-3"
          passHref
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
}
