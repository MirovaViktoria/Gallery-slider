"use client";

import React from "react";
import ButtonMenu from "../components/ButtonMenu";
import styles from "./page.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello world</h1>
      <ButtonMenu buttonText="Click Me" />
    </div>
  );
};

export default Home;
