import React from 'react';
import { render } from "@testing-library/react";
import CategoryList from './CategoryList';

const dish = [
   {
        slug: "0101-chicken-with-sweet-cream-corn-soup",
        name: "Chicken With Sweet Cream Corn Soup",
        categoryID : "soup",
        category: "Soup",
        cover: true,
        text: "It’s full of protein and veggies and it’s naturally gluten-free, and it is sooo comforting and delicious.ter.",
        ingredients: "Chicken, Corn, Ground ginger and garlic powder, Green Onions, Carrots, Cornstarch, Eggs, Toasted sesame oil, Salt and pepper",
        image: {
            _url: "https://imageresizer.static9.net.au/4X0xzcYzOVZeMKP7lsvoNmdEHz4=/1274x717/smart/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FImages%2FKitchen%2F2011%2F09%2F22%2F11%2F34%2Fchickensoup.jpg",
            _height: "282",
            _width: "501"
        },
        price: "$9.99"
    }   
];

describe("CategoryList tests", () => {
    it("renders correctly", () => {
      const { container } = render(<CategoryList categoryID={dish.categoryID} 
        dishes={dish}/> );
      expect(container).toMatchSnapshot();
    });
});
  