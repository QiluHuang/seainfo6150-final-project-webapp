import React from 'react';
import PropTypes from "prop-types";
import styles from "../Button/Button.module.css";

const Button = (props) => {
    return (
        <button className={styles.button} onClick={props.onClick}>{props.buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button;