"use client";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

export default function UserRegisterForm() {
  const [isLoading, setLoading] = useState(true);
  const handleSubmit = (e) => {};

  return (
    <nav onSubmit={handleSubmit}>
      <button
        type="submit"
        className="bg-accent hover:bg-accent/80 focus:bg-accent/80 w-full font-medium text-white py-2 px-4 h-10 
        rounded inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out text-sm"
      >
        {isLoading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Signing In
          </>
        ) : (
          <>Sign In</>
        )}
      </button>
    </nav>
  );
}
