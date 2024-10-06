"use client";
import React from "react";
import styles from "./ButtonMenu.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import buttonOpen from "../../../public/img/header_menu_open.svg";
import buttonClose from "../../../public/img/header_menu_close.svg";
import myImage from "../../../public/img/logo_header.svg";
import { useState } from "react";
import ButtonLink from "./ButtonLink";

type ButtonProps = {
  buttonText: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const ButtonMenu: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleClick = () => {
    if (router) {
      router.push("/contacts");
    } else {
      console.error("Router not initialized");
    }
  };

  return (
    <div className={styles.menu}>
      {!isOpen && <a className={styles.header_link}>Меню</a>}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={styles.image_buttonOpen}
      >
        <Image width="24" height="24" src={buttonOpen} alt="" />
        {buttonText}
      </button>
      {isOpen && (
        <nav className={styles.header_nav}>
          <div className={styles.header_navLogo}>
            <Image
              className={styles.logoImg}
              src={myImage}
              alt="Description of image"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className={styles.image_buttonClose}
            >
              <Image width="24" height="24" src={buttonClose} alt="" />
            </button>
          </div>
          <ul className={styles.header__nav_list}>
            <li className={styles.header__nav_item}>
              <Link href="/about">О нас</Link>
            </li>
            <li className={styles.header__nav_item}>
              <Link href="/services">Направления и услуги</Link>
            </li>
            <li className={styles.header__nav_item}>
              <Link href="/career">Карьера</Link>
            </li>
            <li className={styles.header__nav_item}>
              <Link href="/media-center">Медиацентр</Link>
            </li>
            <li className={styles.header__nav_item}>
              <Link href="/contacts">Контакты</Link>
            </li>
            <ButtonLink
              buttonText="Связаться"
              onClick={handleClick}
            ></ButtonLink>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default ButtonMenu;
