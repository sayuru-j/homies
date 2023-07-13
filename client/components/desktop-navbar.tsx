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
      <div className="flex w-1/2 gap-6 items-center">
        {config?.map((item) => {
          return (
            <Link key={item.title} href={item.href} passHref>
              <button
                className={`transition-all duration-200 ease-out ${
                  pathname === item.href
                    ? "font-semibold text-primary border-b-2 border-red-500 pb-1"
                    : "font-normal text-primary/90 scale-75"
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

      <div className="w-1/2 flex justify-end">
        <MiniProfile />
      </div>
    </nav>
  );
}
