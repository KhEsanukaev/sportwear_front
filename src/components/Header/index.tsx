
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo-icon.svg" alt="Иконка логотипа" />
        </div>
        <h3>Магазин спортивной одежды</h3>
        <div className={styles.navbarButtons}>
          <div className={styles.buttonIcon}>
            <img src="/curt-icon.svg" alt="Иконка корзины" />
          </div>
          <div className={styles.buttonIcon}>
            <img src="/button-icon.svg" alt="Иконка входа" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
