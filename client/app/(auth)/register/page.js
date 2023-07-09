import UserRegisterForm from "@/components/user-register-form";
import React from "react";

function Page() {
  return (
    <div className="grid lg:grid-cols-2 h-screen">
      <div className="hidden lg:flex"></div>
      <div className="bg-white flex items-center justify-center">
        <div className="max-w-[350px] w-full">
          <UserRegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Page;
