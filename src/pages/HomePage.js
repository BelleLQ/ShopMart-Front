import React from "react";
import {useEffect,useContext} from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProdCategory from '../components/ProdCategory';
import ProdListing from '../components/ProdListing';
import ProductContext from '../contexts/ProductContext';
import CategoryContext from '../contexts/CategoryContext';
import HeroContext from '../contexts/HeroContext'


const HomePage = () => {

    const{setProducts} = useContext(ProductContext);
    const{setCategories} = useContext(CategoryContext);
    const{setHeros} = useContext(HeroContext);
    
    
    useEffect(()=>{
        //fetch best seller products
        fetch("http://localhost:8080/products?isBestSeller=true")
        .then(res=>res.json())
        .then(jsonData=>{
            setProducts(jsonData.data);
        })
        .catch(err=>{
            console.log(err);
        })


        //fetch heros item
        fetch("http://localhost:8080/heros")
        .then(res=>res.json())
        .then(jsonData=>{
            setHeros(jsonData.data);
        })
        .catch(err=>{
            console.log(err);
        })
        

    },[]);

    return (
        <div className="container-fluid">
            <Header />
            <main>
                <Hero />
                <ProdCategory />
                <ProdListing title="Best Sellers"/>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage
