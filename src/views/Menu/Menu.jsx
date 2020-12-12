import React, { useEffect, useState } from 'react';
import { Switch, Route, Link, NavLink, useRouteMatch, Redirect } from "react-router-dom";
import styles from './Menu.module.css';

import MenuList from './MenuList.jsx';
import DishDetail from '../DishDetail/DishDetail.jsx';
import CategoryList from '../Category/CategoryList/CategoryList';



const Menu = () => {
    const [fetchedData, setFetchedData] = useState([]);
    const [fetchedDishData, setFetchedDishData] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        // performs a GET request
        const response = await fetch("https://demo1273150.mockable.io/menu");
        const responseJson = await response.json();
        setFetchedData(Object.values(responseJson));
      };
      const fetchDishData = async () => {
        // performs a GET request
        const response = await fetch("https://demo1273150.mockable.io/dishes");
        const responseJson = await response.json();
        setFetchedDishData(Object.values(responseJson));
      };
  
      if (!fetchedData.length) {
        fetchData();
      }
      if (!fetchedDishData.length) {
        fetchDishData();
      }
    }, [fetchedData, fetchedDishData]);
  
    let displayContent;
  
    if (fetchedData.length && fetchedDishData.length) {
    //   console.log(typeof fetchedData);
    //   console.log(fetchedData);
    //   console.log(fetchedDishData);


      displayContent = (
        <div className={styles.menu_row}>
            
            <div className={styles.menu_sidebar}>
                
                <ul className={styles.menu_sidebar_ul}>
                    <li className={styles.menu_sidebar_li}>                        
                        <NavLink to="/menu/content" activeClassName={styles.activeClassName}><h4>Content</h4></NavLink>
                    </li>
                    <li className={styles.menu_sidebar_li}>
                        <NavLink to={`/menu/${fetchedData[0].categoryID}`} activeClassName={styles.activeClassName}>
                            <div><h4>{fetchedData[0].category}</h4></div>
                        </NavLink>
                    </li>
                    <li className={styles.menu_sidebar_li}>
                        <NavLink to={`/menu/${fetchedData[1].categoryID}`} activeClassName={styles.activeClassName}>
                            <div><h4>{fetchedData[1].category}</h4></div>
                        </NavLink>
                    </li>
                    <li className={styles.menu_sidebar_li}>
                        <NavLink to={`/menu/${fetchedData[2].categoryID}`} activeClassName={styles.activeClassName}>
                            <div><h4>{fetchedData[2].category}</h4></div>
                        </NavLink>
                    </li>
                    <li className={styles.menu_sidebar_li}>
                        <NavLink to={`/menu/${fetchedData[3].categoryID}`} activeClassName={styles.activeClassName}>
                            <div><h4>{fetchedData[3].category}</h4></div>
                        </NavLink>
                    </li>
                    <li className={styles.menu_sidebar_li}>
                        <NavLink to={`/menu/${fetchedData[4].categoryID}`} activeClassName={styles.activeClassName}>
                            <div><h4>{fetchedData[4].category}</h4></div>
                        </NavLink>
                    </li>
                    <li className={styles.menu_sidebar_li}>
                        <NavLink to={`/menu/${fetchedData[5].categoryID}`} activeClassName={styles.activeClassName}>
                            <div><h4>{fetchedData[5].category}</h4></div>
                        </NavLink>
                    </li>
                    <li className={styles.menu_sidebar_li}>
                        <NavLink to={`/menu/${fetchedData[6].categoryID}`} activeClassName={styles.activeClassName}>
                            <div><h4>{fetchedData[6].category}</h4></div>
                        </NavLink>
                    </li>
                    <li className={styles.menu_sidebar_li} >
                        <NavLink to={`/menu/${fetchedData[7].categoryID}`} activeClassName={styles.activeClassName}>
                            <div><h4>{fetchedData[7].category}</h4></div>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.menuList}>
                <Switch>
                    <Route 
                        path="/menu/content" 
                        exact
                        render={() => <MenuList menuList={fetchedData}/>}/>

                    <Route 
                        path={`/menu/:categoryID`} 
                        exact 
                        render={({match})=>(
                            <CategoryList categoryID={match.params.categoryID} 
                                          dishes={fetchedDishData}/> 
                        )}
                    />

                    <Route 
                        path={`/menu/:categoryID/:slug`}
                        exact
                        render={({match}) => (
                            <DishDetail slug={match.params.slug}
                                        dishes={fetchedDishData}
                            />)}
                    />

                    
                    <Redirect to="/menu/content" />
                </Switch>
            </div>

        </div>
      );
    } else {
      displayContent = <div>You have no data!</div>;
    }

 
    

    return displayContent;
}

export default Menu;