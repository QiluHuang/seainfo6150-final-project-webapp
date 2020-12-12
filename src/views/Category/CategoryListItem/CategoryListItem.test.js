import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CategoryListItem from "./CategoryListItem.jsx";

const allDishes = {
    "0101-chicken-with-sweet-cream-corn-soup": {
      "slug": "0101-chicken-with-sweet-cream-corn-soup",
      "name": "Chicken With Sweet Cream Corn Soup",
      "categoryID" : "soup",
      "category": "Soup",
      "text": "It’s full of protein and veggies and it’s naturally gluten-free, and it is sooo comforting and delicious.ter.",
      "ingredients": "Chicken, Corn, Ground ginger and garlic powder, Green Onions, Carrots, Cornstarch, Eggs, Toasted sesame oil, Salt and pepper",
      "image": {
        "url": "https://imageresizer.static9.net.au/4X0xzcYzOVZeMKP7lsvoNmdEHz4=/1274x717/smart/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FImages%2FKitchen%2F2011%2F09%2F22%2F11%2F34%2Fchickensoup.jpg",
        "_height": "282",
        "_width": "501"
      },
      "price": "$9.99"
    },
    
    "0102-wonton-soup": {
      "slug": "0102-wonton-soup",
      "name": "Wonton Soup",
      "categoryID" : "soup",
      "category": "Soup",
      "text": "Traditionally, wontons are very delicate little things, sometimes filled with vegetables and usually pork…served in a flavorful broth seasoned with some sesame oil and white pepper.",
      "ingredients": "Pork, Shrimp, Green Onion, Ginger",
      "image": {
        "url": "https://www.skinnytaste.com/wp-content/uploads/2020/01/Wonton-Soup-7.jpg",
        "_height": "852",
        "_width": "550"
      },
      "price": "$9.99"
    },
    
    "0103-Egg-Flower-Soup": {
      "slug": "0103-Egg-Flower-Soup",
      "name": "Egg Flower Soup",
      "categoryID" : "soup",
      "category": "Soup",
      "text": "The direct translation in Chinese is egg flower soup, because the egg creates large and small swirls in the soup in a flower-like pattern",
      "ingredients": "Egg, White Pepper, Chicken Stock",
      "image": {
        "url": "https://thewoksoflife.com/wp-content/uploads/2019/05/egg-drop-soup-4.jpg",
        "_height": "1260",
        "_width": "900"
      },
      "price": "$9.99"
    }
}

describe("CategoryListItem tests", () => {
    it("renders the CategoryListItem component correctly", () => {
    const { container } = render(<Router><CategoryListItem dish={allDishes} /></Router>);
    expect(container).toMatchSnapshot();
    });
});