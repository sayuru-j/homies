import UserRegisterForm from "@/components/user-register-form";
import React from "react";

function Page() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className=""></div>
      <div className="bg-white">
        <UserRegisterForm />
      </div>
    </div>
  );
}

export default Page;
