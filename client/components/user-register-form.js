"use client";

import React, { useRef, useState } from "react";
import Button from "./UI/button";
import { Google } from "./UI/icons";

import axios from "axios";
import Input from "./UI/input";

export default function UserRegisterForm() {
  const [isLoading, setLoading] = useState(false);
  const email = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_EXPRESS_API}/auth/login`,
        {
          email: email.current.value,
          password: password.current.value,
        }
      );

      if (response.data) setLoading(false);
      console.log(response.data);
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="pb-2">
        <label className="text-xs pl-2 text-accent/70 font-medium">Email</label>
        <Input type="email" placeholder="popsirilal@homies.com" ref={email} />

        <label className="text-xs pl-2 text-accent/70 font-medium">
          Password
        </label>
        <Input type="password" placeholder="ModaYakekThoNam" ref={password} />
      </div>

      <Button
        type="submit"
        isloading={isLoading.toString()}
        beforeclick="Sign In"
        afterclick="Signing In"
      />
      <div className="border-b-[1px] border-accent/10 flex justify-center items-center my-2">
        <p className="text-xs text-accent/50 absolute bg-white px-4">
          OR CONTINUE WITH
        </p>
      </div>
      <Button
        type="button"
        beforeclick={<Google className="text-black" />}
        className="bg-white border hover:bg-accent/10 focus:bg-accent/10"
      />
    </form>
  );
}
