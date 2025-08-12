import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center font-medium transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
