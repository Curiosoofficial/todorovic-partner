import React from "react";

interface Props {
  className?: string;
}

const FormButton = ({ className }: Props) => {
  return (
    <button type="submit" className={`spotify-btn !px-7 !py-3 rounded-full bg-primary-500 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200 ${className}`}>
      Senden
    </button>
  );
};

export default FormButton;
