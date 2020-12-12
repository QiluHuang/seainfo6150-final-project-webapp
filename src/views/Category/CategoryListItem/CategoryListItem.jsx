import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import PropTypes from "prop-types";
import styles from "./CategoryListItem.module.css";
// import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import DishImageMedium from "../../../components/Images/DishImageMedium/DishImageMedium.jsx";
import AddButton from '../../../components/Buttons/Button/Button.jsx';
import PlusMinusButton from '../../../components/Buttons/PlusMinusButton/PlusMinusButton.jsx';
import Cart from "../../Cart/Cart";

const DishListItem = (props) => {

    const [cart, setCart] = useState([]);
    const [page, setPage] = useState('dishes');


    const addToCart = (dish) => {
        console.log('we are in addToCart');
        setCart([...cart, dish]);
    }

    console.log(props);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                        <Link to={`/menu/${props.dish.categoryID}/${props.dish.slug}`}>
                            <div className = {styles.upper_image}>
                                <DishImageMedium url={props.dish.image._url} title={props.dish.name}/>
                            </div>
                            <div><h4 className={styles.name}>{props.dish.name}</h4></div>
                        </Link> 
                    </div> 
                    
                        <div><h5 className={styles.text}>{props.dish.ingredients}</h5></div>
                        <div><h4 className={styles.price}>{props.dish.price}</h4></div>
                        <div className={styles.button}><AddButton buttonText="Add" onClick={() => addToCart(props.dish)}/></div>
                    
            </div>
            {/* <Route 
                        path="/cart" 
                        exact
                        render={() => <Cart dishes={cart}/>}/> */}

        </div>
    );
};

DishListItem.propTypes = {
  dishes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
export default DishListItem;