"use client";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      className={`relative w-full rounded-lg transition hover:opacity-80 
      disabled:cursor-not-allowed disabled:opacity-70 ${
        outline
          ? "border-black bg-white text-zinc-900 hover:bg-black hover:text-white"
          : "border-blue-500 bg-blue-500 text-white"
      } ${small ? "border py-1 text-sm" : "text-md border py-3 font-semibold"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
