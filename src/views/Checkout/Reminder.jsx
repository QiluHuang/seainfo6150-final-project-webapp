import React from 'react';
import styles from './Reminder.module.css';
import PropTypes from "prop-types";


const Reminder = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>Please get your meal at {props.text}</div>
        </div>
    );
}

Reminder.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Reminder;