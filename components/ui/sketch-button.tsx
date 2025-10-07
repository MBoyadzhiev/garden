import React from "react";

interface SketchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const SketchButton = ({
  children,
  onClick,
  className = "",
  type = "button",
}: SketchButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
};
