"use client";
import React from "react";

type ButtonProps = {
  buttonText: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const ButtonLink: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default ButtonLink;
