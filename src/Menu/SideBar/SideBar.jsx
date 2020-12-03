import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SideBar.module.css";

import SoupList from '../../CategoryPage/SoupList/SoupList.jsx';

const SideBar = () => {
    // let match = useRouteMatch();
    let { path, url } = useRouteMatch();
    return (
        <>
            <nav className={styles.sidebar}>
                <ul className={styles.sidenav_ul}>
                    {/* <li className={styles.sidenav_li}><Link to="/Menu/homepage">Soup</Link></li> */}
                    {/* <li className={styles.sidenav_li}><Link/> to={`${match.url}/soup_page`}>Soup</Link></li> */}
                    <li className={styles.sidenav_li}><Link to={`${url}/souppage`}>Soup</Link></li>



                </ul>
            </nav>
            <Switch>
                <Route path="/souppage" exact component={SoupList} />

            </Switch>
        </>
    );
}

export default SideBar;