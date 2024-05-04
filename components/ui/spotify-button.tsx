import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const Button = ({ className }: Props) => {
  return (
    <button className={`spotify-btn px-7 py-3 rounded-full bg-primary-500 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200 ${className}`}>
      <Link href="/kontakt">
        ANFRAGEN
      </Link>
    </button>
  );
};

export default Button;
