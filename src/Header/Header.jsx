import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Logo from '../Header/Logo/Logo.jsx';
import styles from './Header.module.css';

const Header = () => {
    return (
      <header>
        <nav>
            <div className={styles.nav_container}>
                <div className={styles.logo_row}>
                    <Logo className={styles.logo}/>
                </div>
                <div className={styles.row}>
                    <div className="menu-collapsed"></div>
                    <div className={styles.menu_expanded}>
                        <ul>
                            {/* these links should show you how to connect up a link to a specific route */}
                            <li className={styles.main_bar}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={styles.main_bar}>
                                <Link to="/menu">Menu</Link>
                            </li>
                            <li className={styles.main_bar}>
                                <Link to="/bar/hats/sombrero">Specials</Link>
                            </li>
                            <li className={styles.main_bar_left}>
                                <Link to="/baz">Cart</Link>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>
        </nav>
      </header>
    );
}

export default Header;