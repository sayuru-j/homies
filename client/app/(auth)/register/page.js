import Button from "@/components/UI/button";
import UserRegisterForm from "@/components/user-register-form";
import { ChevronLeftSquare, Ghost } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="grid lg:grid-cols-2 h-screen">
      <div className="hidden lg:flex items-center justify-center"></div>
      <div className="bg-white flex items-center justify-center">
        <div className="max-w-[300px] w-full">
          <div className="flex flex-col items-center py-4 gap-2 text-accent/60">
            <Ghost className="animate-pulse" />
            <h1 className="font-medium text-sm">Be a homie, register here!</h1>
          </div>

          <UserRegisterForm />
          <Link href="/login" passHref>
            <Button
              className="mt-2 bg-white text-accent border hover:bg-accent/10 focus:bg-accent/10"
              beforeclick={
                <div className="flex items-center justify-center gap-1">
                  <ChevronLeftSquare size={18} />
                  Back
                </div>
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
