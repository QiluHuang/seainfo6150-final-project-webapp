import React from 'react';
import styles from "./MenuPage.module.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";


import SideBar from '../SideBar/SideBar.jsx';
import MenuList from '../MenuList/MenuList.jsx';
import SoupList from '../../CategoryPage/SoupList/SoupList';


const MenuPage = (props) => {
    return (
        
        <div>
            <div className={styles.sidebar}><SideBar/></div>
            <div className={styles.list}><MenuList /></div>
        </div>

    //     <>
    //     <nav>
    //         <ul className={styles.sidenav_ul}>
    //             <li className={styles.sidenav_li}><Link to="/menu/soup_page">Soup</Link></li>
    //         </ul>
    //     </nav>
    //     <Switch>
    //         <Route path="/menu/soup_page" exact component={SoupList} />
    //     </Switch>
    // </>
    );
}

export default MenuPage;