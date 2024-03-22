// components/footer/Footer.tsx

import React, { FC } from "react";
import styles from "./Footer.module.css";

interface FooterProps {
  version: string;
}

const Footer: FC<FooterProps> = ({ version }) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} Suvam Adhikary | Version: {version}
      </p>
    </footer>
  );
};

export default Footer;
