import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import styles from "./SoupList.module.css";
import CategoryPageItem from '../CategoryPageItem/CategoryPageItem';


const SoupList = () => {
  const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        // performs a GET request
        const response = await fetch("https://demo1273150.mockable.io/cover");
        const responseJson = await response.json();
        setFetchedData(Object.values(responseJson));
      };
  
      if (!fetchedData.length) {
        fetchData();
      }
    }, [fetchedData]);
  
    let displayContent;
  
    console.log(fetchedData);
  
    if (fetchedData.length) {
      console.log(fetchedData);
  
      displayContent = (
        <ul className={styles.container}>
          {/* {Object.keys(props.dishes).map((dish) => ( */}
  
          {fetchedData.map((dish) => (
            <CategoryPageItem dish={dish} key={dish.slug} />))}
        </ul>
      );
    } else {
      displayContent = <div>You have no data!</div>;
    }


    return (
        <div>{displayContent}</div>
    );
}

// SoupList.propTypes = {
//     dish: PropTypes.object.isRequired,
// }

export default SoupList;