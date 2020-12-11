import React, { useEffect, useState } from 'react';
import styles from './Soup.module.css';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DishDetail from '../../DishDetail/DishDetail';
import CategoryListItem from '../CategoryListItem/CategoryListItem.jsx';



const Soup = (props) => {
    // console.log(props);

    let {categoryID} = props.match.params;
    // console.log("打印：" + categoryID);


    let [fetchedData, setFetchedData] = useState([]);


    // let dataUrl = "https://demo1273150.mockable.io/" + categoryID;
    // console.log(typeof dataUrl);
    // console.log(dataUrl);



    useEffect(() => {
      let fetchData = async () => {
        // performs a GET request
        let response = await fetch("https://demo1273150.mockable.io/soup");
        // let response = await fetch(`${dataUrl}`);
        let responseJson = await response.json();
        setFetchedData(Object.values(responseJson));
      };
  
      if (!fetchedData.length) {
        fetchData();
      }
    }, [fetchedData]);
  
    let displayContent;
  
    // console.log(fetchedData.length);


    if (fetchedData.length) {
  
      displayContent = (
        <div calssName={styles.container}>
            <div className={styles.title}>
                <h3>{fetchedData[0].category}</h3>
            </div>
            <div>
                <div className={styles.menuList_container}>
                    {fetchedData.map((dish, index) => (
                            <li key={index}>
                                    <CategoryListItem dish={dish} key={dish.slug} />
                            </li>
                        ))}
                </div>
            </div>
        </div>
      );
    } else {
      displayContent = <div>Soup is coming soon!</div>;
    }
    
    return (
        <div>
            {displayContent}
        </div>
    );
}

export default Soup;