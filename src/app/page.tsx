"use client";

import styles from "./page.module.css";
import Image from "next/image";
import myImage from "../../public/img/logo_header.svg";
import ButtonMenu from "./components/ButtonMenu";

const Home: React.FC = () => {
  return (
    <header className={styles.headerClass}>
      <Image
        className={styles.logoImg}
        src={myImage}
        alt="Description of image"
      />
      <ButtonMenu buttonText=""></ButtonMenu>
    </header>
  );
};

export default Home;
