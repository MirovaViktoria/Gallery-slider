"use client";

// components/Header/Header.tsx
// import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./Menu/MobileMenu/MobileMenu";
import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./Header.module.css";
import Image from "next/image";
import myImage from "/public/img/logo_header.svg";

const Header: React.FC = () => {
  //   const [isMobile, setIsMobile] = useState(false);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth < 768);
  //     };

  //     window.addEventListener("resize", handleResize);
  //     handleResize(); // Для первоначальной установки

  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  return (
    <header className={styles.headerClass}>
      <Link className={styles.logoLink} href="/">
        <Image
          className={styles.logoImg}
          src={myImage}
          alt="Description of image"
        />
      </Link>

      {<MobileMenu buttonText={"Меню"} />}
    </header>
  );
};

export default Header;
