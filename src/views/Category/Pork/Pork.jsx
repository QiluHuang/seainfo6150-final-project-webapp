import React, { useEffect, useState } from 'react';
import styles from './Pork.module.css';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DishDetail from '../../DishDetail/DishDetail';
import CategoryListItem from '../CategoryListItem/CategoryListItem.jsx';



const Pork = (props) => {
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
        let response = await fetch("https://demo1273150.mockable.io/pork");
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
                                {/* <Link to={`/menu/pork/${dish.slug}`}> */}
                                    <CategoryListItem dish={dish} key={dish.slug} />
                                {/* </Link>   */}
                            </li>
                        ))}
                </div>
                {/* <Switch> */}
                    {/* <Route 
                        path={`/menu/pork/:slug`} 
                        exact
                        render={({match}) => (
                        <DishDetail slug={match.params.slug}
                                    dishes={fetchedData}
                        />)}
                        /> */}
                    {/* <Route component={Error} />
                </Switch> */}
                
            </div>
        </div>
      );
    } else {
      displayContent = <div>Pork is coming soon!</div>;
    }
    
    return (
        <div>
            {displayContent}

            {/* <ul>
                {
                   dishes.map((dish, index) => (
                       <li key={index}>
                           <Link to={`${url}/${dish.title}`}>{dish.title}</Link>
                       </li>
                   )) 
                }
            </ul>
            <Route path={`${path}/:title`} component={DishDetail}/>
                
            This is Dish Page */}
        </div>
    );
}

export default Pork;