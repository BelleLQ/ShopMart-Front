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
      "prodName": "",
      "price": 0,
      "description": "",
      "category": "",
      "quantity": 0,
      "isBestSeller": false,
      "photoUrl":[]},
    ]);
  const [categories, setCategories] = useState([{
        "categoryName": "",
        "photoUrl": "",
        "categoryDesc": "",
  }]);
  const [heros, setHeros] = useState(
    [{
      "heroName": "",
      "description": "",
      "photoUrl": "",
      "startDate": "",
      "endDate":""
    }])

  useEffect(()=>{
    //fetch product categories
    fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/categories`)
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
