"use client";

import { navBarConfig } from "@/config/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MiniProfile from "./mini-profile";
import DynamicIcon, { Icons } from "./icons";
import { buttonVariants } from "./UI/button";

interface NavItemProps {
  config: any[];
}

export default function DesktopNav({ config }: NavItemProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center h-16 w-full justify-between">
      <div className="flex w-1/3 gap-10 items-center">
        {config?.map((item) => {
          return (
            <Link key={item.title} href={item.href} passHref>
              <button
                className={`transition-all duration-200 ease-out ${
                  pathname === item.href
                    ? "font-semibold text-primary border-b-2 border-red-500 pb-1"
                    : "font-normal text-sm text-primary/90"
                }`}
                type="button"
                disabled={item.disabled}
              >
                {item.icon ? (
                  <DynamicIcon size={22} iconName={item.icon} />
                ) : (
                  item.title
                )}
              </button>
            </Link>
          );
        })}
      </div>

      <div className="w-1/3 flex items-center justify-center gap-5 pb-1">
        <Icons.search size={22} />
        <button
          type="button"
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
            className: "px-4",
          })}
        >
          Create story
        </button>
        <Icons.bell size={22} />
      </div>

      <div className="w-1/3 flex justify-end">
        <MiniProfile />
      </div>
    </nav>
  );
}
