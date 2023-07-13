"use client";
import React from "react";
import { buttonVariants } from "./UI/button";
import axios from "axios";
import authHeader from "@/lib/services/auth-header";

export default function TestAPIRequests() {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        className={buttonVariants()}
        onClick={async () => {
          const response = await axios.get("http://localhost:8000/test");

          console.log(response.data);
        }}
      >
        All access
      </button>

      <button
        type="button"
        className={buttonVariants()}
        onClick={async () => {
          const response = await axios.get("http://localhost:8000/test/user", {
            headers: authHeader(),
          });

          console.log(response.data);
        }}
      >
        User access
      </button>

      <button
        type="button"
        className={buttonVariants()}
        onClick={async () => {
          const response = await axios.get("http://localhost:8000/test/admin", {
            headers: authHeader(),
          });

          console.log(response.data);
        }}
      >
        Admin access
      </button>
    </div>
  );
}
