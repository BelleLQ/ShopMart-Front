import '../assets/css/App.css';

import {React, useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from '../pages/HomePage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductDescriptionPage from '../pages/ProductDescriptionPage';
import ProductListingPage from '../pages/ProductListingPage';
import SignUp from '../pages/SignUpPage'
import Login from '../pages/LoginPage';
import ProductContext from '../contexts/ProductContext';
import CategoryContext from '../contexts/CategoryContext';
import HeroContext from '../contexts/HeroContext';




const App = () => {
  const [products, setProducts] = useState(
    [{
      "prodName": "Gourmet du Village Hot Chocolate Mini, Candy Cane White Retro Snowman",
      "price": 1.50,
      "description": "Just add hot water or milk.",
      "category": "Grocery",
      "quantity": 359,
      "isBestSeller": false,
      "photoUrl":["https://m.media-amazon.com/images/I/713gDrVJvTL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/818jPwFxXbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/31BQfgzPGcL._AC_.jpg"]},
    ]);
  const [categories, setCategories] = useState(["Grocery"]);
  const [heros, setHeros] = useState(
    [{
      "heroName": "Stylish clothes",
      "description": "Black Friday Sales - All stylish clothes 50% off",
      "photoUrl": "https://img.huffingtonpost.com/asset/5ce6bd0c210000b90ed0ed6a.jpeg?ops=1778_1000",
      "startDate": "2021-11-12",
      "endDate":"2022-11-21"
    }])

  useEffect(()=>{
    //fetch product categories
    fetch("http://localhost:8080/products/categories")
    .then(res=>res.json())
    .then(jsonData=>{
        setCategories(jsonData.data);
    })
    .catch(err=>{
        console.log(err);
    })
  },[])    
  
  return (
    <Router>
      <ProductContext.Provider value ={{products,setProducts}}>
        <CategoryContext.Provider value = {{categories, setCategories}}>
          <HeroContext.Provider value = {{heros, setHeros}}>
          <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route exact path="/products">
              <ProductListingPage />
            </Route>

            <Route exact path="/products/details/:prodId">
                <ProductDescriptionPage />
            </Route>

            <Route exact path="/products/categories/:catName">
                <ProductCategoryPage />
            </Route>

            <Route exact path="/products/categories">
                <ProductCategoryPage />
            </Route>

            <Route exact path="/signup">
              <SignUp />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

          </Switch>
          </HeroContext.Provider>
        </CategoryContext.Provider>
      </ProductContext.Provider>
    </Router>
  )
}

export default App
