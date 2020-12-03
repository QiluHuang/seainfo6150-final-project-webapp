import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Logo from '../Logo/Logo.jsx';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

const Header = () => {
    return (
      <header className={styles.header}>
          <div className={styles.header_container}>
              <div className={styles.logo_row}>
                  <Logo className={styles.logo}/>
              </div>  
          </div>
          <NavigationBar />
      </header>
    );
}

export default Header;