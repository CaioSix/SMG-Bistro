import React from "react";
import { Link } from "react-router-dom";


import styles from "./styles.module.css";

function Header() {


  return (
    <header className={styles.navMenu}>
      <nav className={styles.myNav}>
     
        <Link className={styles.menuItem} to="/drinksFunk">
          Sobre Nós
        </Link>
        <Link className={styles.menuItem} to="/time">
          Bebidas
        </Link>
        <Link className={styles.logo} to="/">
          Bistro do Caio
        </Link>
        <Link className={styles.menuItem} to="/time">
          Comidas
        </Link>
        <Link className={styles.menuItem} to="/contact">
          Contato
        </Link>
     
      </nav>
    </header>
  );
}

export default Header;
