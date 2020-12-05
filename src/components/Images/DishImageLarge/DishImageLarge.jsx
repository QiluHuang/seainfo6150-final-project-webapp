import React from "react";
import PropTypes from "prop-types";
import styles from "./DishImageLarge.module.css";

const DishImage = (props) => {
    return (
        <img className={styles.img} src={props.url} alt={props.title} />
    )
}

DishImage.prototype = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
export default DishImage;