import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MenuListItem.module.css";
// import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import DishImage from "../../Images/DishImageMedium/DishImageMedium.jsx";

const DishListItem = (props) => {
  const [isTextShowing, setIsTextShowing] = useState(false);

  function onClick() {
    setIsTextShowing(!isTextShowing);
  }

  return (
    <li className={styles.container}>
      <div className={styles.dish}>
        <div className={styles.wrapper}>
          <div className = {styles.upper_image}>
          <DishImage url={props.dish.image._url} title={props.dish.name}/>
          </div>
          <h2 className={styles.name}>{props.dish.category}</h2>
        </div>
        {/* <ArticleTextToggleButton
          buttonText={isTextShowing ? "Show less" : "Show more"}
          onClick={onClick}
        /> */}
      </div>
    </li>
  );
};

DishListItem.propTypes = {
  dish: PropTypes.object.isRequired,
};
export default DishListItem;

