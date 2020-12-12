import React, { useEffect, useState } from 'react';
import styles from './CategoryList.module.css';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DishDetail from '../../DishDetail/DishDetail';
import CategoryListItem from '../CategoryListItem/CategoryListItem.jsx';



const CategoryList = (props) => {
    var cateID=props.categoryID;

    // console.log("props: " + props);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>{cateID}</h3>
            </div>
            <div>
                <div className={styles.menuList_container}>
                    {props.dishes.filter(dishes => dishes.categoryID==cateID).map((dish, index) => (
                            // console.log("dish: " + dish),
                            <li key={index}>
                                    <CategoryListItem dish={dish} key={dish.slug} />
                            </li>
                        ))}
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default CategoryList;