import React from "react";
import {useEffect,useContext} from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProdCategory from '../components/ProdCategory';
import ProdListing from '../components/ProdListing';
import ProductContext from '../contexts/ProductContext';
import HeroContext from '../contexts/HeroContext'


const HomePage = () => {
    const{setProducts} = useContext(ProductContext);
    const{setHeros} = useContext(HeroContext);
    
    
    useEffect(()=>{
        //fetch best seller products
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?isBestSeller=true`)
        .then(res=>res.json())
        .then(jsonData=>{
            setProducts(jsonData.data);
        })
        .catch(err=>{
            console.log(err);
        })


        //fetch heros item
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/heros`)
        .then(res=>res.json())
        .then(jsonData=>{
            setHeros(jsonData.data);
        })
        .catch(err=>{
            console.log(err);
        })
        

    },[]);

    return (
        <div className="container-fluid p-0">
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
