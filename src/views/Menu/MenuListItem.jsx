import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import PropTypes from "prop-types";
import styles from "./MenuListItem.module.css";
// import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import DishImageMedium from "../../components/Images/DishImageMedium/DishImageMedium.jsx";

const DishListItem = (props) => {
  return (
      <div className={styles.container}>
        <Link to={`/menu/${props.dish.categoryID}`}>
          <div className={styles.wrapper}>
            <div className = {styles.upper_image}>
              <DishImageMedium url={props.dish.image._url} title={props.dish.name}/>
            </div>
            <h5 className={styles.name}>{props.dish.category}</h5>
          </div>
        </Link>
      </div>
  );
};

DishListItem.propTypes = {
  dish: PropTypes.object.isRequired,
};
export default DishListItem;