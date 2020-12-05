import React from "react";
import PropTypes from "prop-types";
import styles from "./DishImageMedium.module.css";

const DishImage = (props) => {
    return (
        <div>
            {/* <div className={styles.image}> </div> */}
            <img className={styles.img} src={props.url} alt={props.title} />
        </div>
        
    )
}

DishImage.prototype = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
export default DishImage;