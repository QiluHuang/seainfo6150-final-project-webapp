import React from 'react';
// import UncleWongLogo from "./images/uncle-wong-logo.gif";
import UncleWongLogo from "./uncle-wong-logo.gif";
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <img className={styles.logo} src={UncleWongLogo} alt="Uncle Wong Logo" />
    );
}

export default Logo;