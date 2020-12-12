import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MenuList.module.css";

import MenuListItem from './MenuListItem.jsx';



const MenuList = (props) => {
    console.log(props);
    return ( 
        
        <div className={styles.menuList_wrapper}>
            <div className={styles.title}>
                <h3> MENU </h3>
            </div>
            <div className={styles.menuList_container}>
                {props.menuList.map((dish) =>  (
                    <MenuListItem dish={dish} key={dish.slug} />
                ))}
            </div>
        </div>
    );
}

MenuList.propTypes = {
    menuList: PropTypes.array.isRequired
}

export default MenuList;