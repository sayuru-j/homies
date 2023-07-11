"use client";

import { navBarConfig } from "@/config/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MiniProfile from "./mini-profile";

interface NavItemProps {
  config: any[];
}

export default function DesktopNav({ config }: NavItemProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center h-14 w-full justify-between">
      <div className="flex gap-10 items-center">
        {config?.map((item) => {
          return (
            <Link key={item.title} href={item.href} passHref>
              <button
                className={`transition-all duration-200 ease-out ${
                  pathname === item.href
                    ? "font-semibold text-primary"
                    : "font-normal text-sm text-primary"
                }`}
                type="button"
                disabled={item.disabled}
              >
                {item.title}
              </button>
            </Link>
          );
        })}
      </div>

      <div className="">
        <MiniProfile />
      </div>
    </nav>
  );
}
