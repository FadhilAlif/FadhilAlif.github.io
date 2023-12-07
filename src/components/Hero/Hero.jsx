import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Fadhil Alif P</h1>
        <p className={styles.description}>
          I am a driven Information Technology undergraduate from Universitas
          Aisyiyah Yogyakarta. I have honed my skills through the Front-End
          Engineer Career program at Alterra Academy, with a focus in React JS.
        </p>
        <a href="mailto:fadhil.alifp@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
