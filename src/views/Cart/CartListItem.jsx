import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import PropTypes from "prop-types";
import styles from "./CartListItem.module.css";
import DishImageMedium from "../../components/Images/DishImageMedium/DishImageMedium.jsx";

const CartListItem = (props) => {
    // console.log(props);
  return (
      <div className={styles.container}>
          <div className={styles.wrapper}>
              <div className={styles.upper_image}>
                  <DishImageMedium url={props.dish.image._url} title={props.dish.name}/>
              </div>
              <div className={styles.dishName}>{props.dish.name}</div>
              <div className={styles.quantity}>1</div>
              <div className={styles.price}>{props.dish.price}</div> 
          
                 
                                   
          </div>
        

      </div>
  );
};

CartListItem.propTypes = {
  dish: PropTypes.object.isRequired,
//   onClick: PropTypes.func.isRequired
};
export default CartListItem;