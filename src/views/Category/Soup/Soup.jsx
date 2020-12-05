import React, { useEffect, useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DishDetail from '../../DishDetail/DishDetail';




const Soup = (props) => {
    let { path, url } = useRouteMatch();

    let {categoryID} = props.match.params;
    console.log("打印：" + categoryID);


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
  
    console.log(fetchedData.length);


    if (fetchedData.length) {
  
      displayContent = (
        <div>
            <h1>  Dish List  </h1>
            <div>
                <ul>
                    {  
                        fetchedData.map((dish, index) => (
                            <li key={index}>
                                <Link to={`/menu/${categoryID}/${dish.slug}`}>pic{/* <img src={dish.image._url}/> */}</Link>  
                                <div>{dish.name}</div>
                            </li>
                        ))
                    }
                </ul>
                {/* <Switch> */}
                    <Route 
                        path={`/menu/${categoryID}/:slug`} 
                        exact
                        render={({match}) => (
                        <DishDetail slug={match.params.slug}
                                    dishes={fetchedData}
                        />)}
                        />
            </div>
        </div>
      );
    } else {
      displayContent = <div>Soup is coming soon</div>;
    }
    
    let dishes = [
        {id: 1, category: "Soup", title: "soup1", description: "???", price: "$9.99"},
        {id: 2, category: "Soup", title: "soup2", description: "???", price: "$9.99"},
        {id: 3, category: "Poultry", title: "poultry3", description: "???", price: "$9.99"},
        {id: 4, category: "Poultry", title: "poultry4", description: "???", price: "$9.99"},
        {id: 5, category: "Pork", title: "pork5", description: "???", price: "$9.99"},
        {id: 6, category: "Pork", title: "pork6", description: "???", price: "$9.99"}
    ]
 

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

export default Soup;