import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, NavLink, Link, useRouteMatch } from "react-router-dom";
import { isEmpty } from "lodash";
import './App.css';


import Logo from "./components/Logo/Logo.jsx";
import Home from './views/Home/Home.jsx';
import Menu from './views/Menu/Menu.jsx';
import About from "./views/About/About.jsx";
import Error from "./components/Error/Error.jsx";
import Cart from "./views/Cart/Cart";
import Checkout from "./views/Checkout/Checkout";


// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

function App() {
  return (
    // console.log(fetchedData),
    <>
      <header className="header">
          <div className="header_container">
              <div className="logo_row">
                  <Logo className="logo"/>
              </div>  
          </div>

          <div>
            <ul className="topnav_ul">
                <li className="topnav_li"><Link to="/">Home</Link></li>
                <li className="topnav_li"><Link to="/menu">Menu</Link></li>
                <li className="topnav_li"><Link to="/about">About</Link></li>
                <li className="topnav_right"><Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Link></li>
            </ul>
            


          </div>
      </header>
      <div className="body">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />

          {/* <Redirect to="/homepage" /> */}
              
          <Route component={Error} />
        </Switch>
      </div>



    </>
  );
}

export default App;
