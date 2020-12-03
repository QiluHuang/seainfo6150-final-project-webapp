import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import styles from "./MenuList.module.css";
import MenuListItem from "../MenuListItem/MenuListItem.jsx";
import { isEmpty } from "lodash";

import CategoryPageItem from '../../CategoryPage/CategoryPageItem/CategoryPageItem';
import SideBar from '../SideBar/SideBar';


const DishList = () => {
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
          <MenuListItem dish={dish} key={dish.slug} />))}
          {/* <CategoryPageItem dish={dish} key={dish.slug} />))} */}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div className={styles.canvas}>
      {displayContent}
    </div>
  );
}

// DishList.propTypes = {
//     dishes: PropTypes.array.isRequired
// }
export default DishList;
