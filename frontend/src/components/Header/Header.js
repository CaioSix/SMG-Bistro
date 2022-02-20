import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"

import Contato from "./../../pages/Contato/Contato.jsx"

import styles from "./styles.module.css";

function Header() {


  return (
    <header className={styles.navMenu}>
      <nav className={styles.myNav}>
     
        <Link className={styles.menuItem} to="/sobre">
          Sobre Nós
        </Link>
        <Link className={styles.menuItem} to="/produtos">
          Produtos
        </Link>
        <Link className={styles.logo} to="/">
          Bistro 
        </Link>
        <Link className={styles.menuItem} to="/receitas">
          Receitas
        </Link>
        <Link className={styles.menuItem} to="/contato">
          Contato 
        </Link>
                  
     
      </nav>
    </header>
  );
}

export default Header;
