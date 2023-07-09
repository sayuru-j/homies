import React from "react";

const Input = React.forwardRef(({ type, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50
      ${className}`}
      {...props}
    />
  );
});

export default Input;
