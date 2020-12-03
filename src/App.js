import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";

import Logo from "./Header/Logo/Logo.jsx";
import Home from "./Home/Home.jsx";
import DishList from "./Menu/MenuList/MenuList.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import Header from "./Header/Header/Header.jsx";
import MenuPage from './Menu/MenuPage/MenuPage.jsx'

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
    <Header />
    </>
  );
}

export default App;
