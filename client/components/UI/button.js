import { Loader2 } from "lucide-react";
import React from "react";

export default function Button(props) {
  return (
    <button
      {...props}
      className={`${props.className} bg-accent hover:bg-accent/80 focus:bg-accent/80 w-full font-medium text-white py-2 px-4 h-9 
  rounded inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out text-sm `}
    >
      {props.isloading === "true" ? (
        <>
          <Loader2 size={20} className="animate-spin" />
          {props.afterclick}
        </>
      ) : (
        <>{props.beforeclick}</>
      )}
    </button>
  );
}
