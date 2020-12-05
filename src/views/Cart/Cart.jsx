import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, NavLink, Link, useRouteMatch } from "react-router-dom";
import styles from './Cart.module.css';

import Button from "../../components/Buttons/Button/Button";
import CartListItem from "./CartListItem.jsx";

const Cart = () => {

    let [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
          // performs a GET request
          let response = await fetch("https://demo1273150.mockable.io/cover");
          // let response = await fetch(`${dataUrl}`);
          let responseJson = await response.json();
          setFetchedData(Object.values(responseJson));
        };
    
        if (!fetchedData.length) {
          fetchData();
        }
      }, [fetchedData]);
    
      let displayContent;
    
      console.log(fetchedData);
  
  
      if (fetchedData.length) {
    
        displayContent = (
          <div calssName={styles.container}>
              
              <div>
                  <ul className={styles.menuList_container}>
                      {fetchedData.map((dish, index) => (
                              
                              <li key={index}>
                                  {/* <Link to={`/menu/pork/${dish.slug}`}> */}
                                      <CartListItem dish={dish} key={dish.slug} />
                                  {/* </Link>   */}
                              </li>
                          ))}
                  </ul>
              </div>
          </div>
        );
      } else {
        displayContent = <div>You didn't put anything into the Cart!</div>;
      }

    return (
        <div>
                <div className={styles.cart_container}>
                    <div className={styles.title_row}>
                        <div><h4>Index</h4></div>
                        <div><h4>Name</h4></div>
                        <div><h4>Quantity</h4></div>
                        <div><h4>Price</h4></div>
                    </div>
                    <ul></ul>
                    {displayContent}
                    <div className={styles.total_row}>
                        <div><h4>Total: </h4></div>
                        <div><h4>$88.00</h4></div>
                    </div>
                    <Link to="/checkout">
                        <Button buttonText="Checkout"/>
                    </Link>
                </div>
        </div>

  )
}

export default Cart;
