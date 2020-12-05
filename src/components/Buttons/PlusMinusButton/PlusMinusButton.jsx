import React from 'react';
import PropTypes from "prop-types";
import styles from "../PlusMinusButton/PlusMinusButton.module.css";

const PlusMinusButton = (props) => {
    

    return (
        <div class="container">
            <input type="button" value="-" class="button-minus" data-field="quantity" />
            <input type="number" step="1" max="" value="1" name="quantity" class="quantity-field" />
            <input type="button" value="+" class="button-plus" data-field="quantity" />
        </div>

    )
}

PlusMinusButton.propTypes = {

}

export default PlusMinusButton;
