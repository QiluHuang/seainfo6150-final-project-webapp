import React from 'react';
import PropTypes from "prop-types";

import styles from './DishDetail.module.css';

import DishImageLarge from '../../components/Images/DishImageLarge/DishImageLarge.jsx';

const allSoupItems = [
    {id: 1, category: "Soup", title: "soup1", description: "???", price: "$9.99"},
    {id: 2, category: "Soup", title: "soup2", description: "???", price: "$9.99"},
    {id: 3, category: "Poultry", title: "poultry3", description: "???", price: "$9.99"},
    {id: 4, category: "Poultry", title: "poultry4", description: "???", price: "$9.99"},
    {id: 5, category: "Pork", title: "pork5", description: "???", price: "$9.99"},
    {id: 6, category: "Pork", title: "pork6", description: "???", price: "$9.99"}
]

const DishDetail = (props) => {
    console.log(props);

    var slug = props.slug;

    
    // const {name} = props.match.params;
    // debugger;
    // const soupItem = allSoupItems.find((dish) => dish.name===name);
    const dish = props.dishes.find((dish) => dish.slug===slug);


    return (
        <div className={styles.container}>
            {/* <h1>This is DishDetail page</h1> */}
            
            <div>
                <DishImageLarge url={dish.image.url} />
            </div>
            <div className={styles.text_container}>
                <h1 className={styles.name}>{dish.name}</h1>
                <h2 className={styles.text}>{dish.text}</h2>
                <h1 className={styles.price}>{dish.price}</h1>
            </div>
        </div>
    )
}

DishDetail.propTypes = {
    dishes: PropTypes.array.isRequired
    // name: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    // price: PropTypes.string.isRequired
}

export default DishDetail;