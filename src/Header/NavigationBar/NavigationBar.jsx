import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import styles from './NavigationBar.module.css';

import Home from "../../Home/Home.jsx";
import Error from "../../Error/Error.jsx";
import MenuPage from '../../Menu/MenuPage/MenuPage';
import SoupList from '../../CategoryPage/SoupList/SoupList.jsx';

const NavigationBar = (props) => {
    return (
        <>
        <div className={styles.row}>
            <div className="menu-collapsed"></div>
            <nav className={styles.menu_expanded}>
                    <ul className={styles.topnav_ul}>
                        <li className={styles.topnav_li}><Link to="/">Home</Link></li>
                        <li className={styles.topnav_li}><Link to="/menu">Menu</Link></li>
                        <li className={styles.topnav_li}><Link to="/bar/hats/sombrero">Specials</Link></li>
                        <li className={styles.topnav_right}><Link to="/baz">Cart</Link></li>
                    </ul>
            </nav>
        </div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={MenuPage} />
                {/* <Route path="/soup_page" exact component={SoupList} />
                /Route*/}
            <Route component={Error} />
        </Switch>
        </>
    );
}


export default NavigationBar;