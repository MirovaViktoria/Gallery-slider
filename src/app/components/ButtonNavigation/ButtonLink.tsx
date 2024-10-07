"use client";
import React from "react";
import Image from "next/image";

import styles from "./ButtonLink.module.css";
import myImage from "../../../../public/img/arrow_right_black.svg";

type ButtonProps = {
  buttonText: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const ButtonLink: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button className={styles.buttonLink} type="button" onClick={onClick}>
      <Image
        className={styles.buttonLinkImg}
        src={myImage}
        alt="Description of image"
      ></Image>
      {buttonText}
    </button>
  );
};

export default ButtonLink;
