import React from 'react';
import styles from './Reminder.module.css';
import PropTypes from "prop-types";


const Reminder = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}><img src="https://cdn11.bigcommerce.com/s-7j8u58/images/stencil/1110x1110/uploaded_images/miami-healthy-meals-delivery-service-the-best-way-to-time-your-meals-for-weight-loss.jpg?t=1561061586" alt={"background"}/></div>

            <div className={styles.background}>
                <div className={styles.text}>Please get your meal at {props.text}</div>
            </div>
        </div>
    );
}

Reminder.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Reminder;