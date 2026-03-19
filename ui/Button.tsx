import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ 
  className = "", 
  variant = "primary", 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-stone-900 text-stone-50 cursor-pointer hover:bg-stone-800",
    secondary: "bg-stone-200 text-stone-900 cursor-pointer hover:bg-stone-300",
    outline: "border border-stone-300 text-stone-900 cursor-pointer hover:bg-stone-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
