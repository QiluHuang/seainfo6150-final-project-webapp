import React from 'react';
import PropTypes from 'prop-types';
import DishImage from '../../Images/DishImageMedium/DishImageMedium.jsx';
import PlusMinusButton from '../../Buttons/PlusMinusButton/PlusMinusButton.jsx';
import AddButton from '../../Buttons/Button/Button.jsx';

const CategoryPageItem = (props) => {
    const ingredients = "ingredients: ";

    return (
        <div>
            <div><DishImage url={props.dish.image._url} title={props.dish.name} /></div>
            <h2>{props.dish.name}</h2>
            <p>{props.dish.ingredients}</p>
            <div>
                <PlusMinusButton />
                <AddButton buttonText="Add"/>
            </div>
        </div>
    );
}

CategoryPageItem.propTypes = {
    dish: PropTypes.object.isRequired,
};

export default CategoryPageItem;

