import React, {useEffect, useContext} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductContext from '../contexts/ProductContext'
import SideBar from '../components/SideBar';
import {useParams} from "react-router-dom";



const ProductCategoryPage = () => {
    const{setProducts} = useContext(ProductContext);
    const{catName} = useParams();

    useEffect(()=>{
        if(catName){
            fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?category=${catName}`)
            .then(res=>res.json())
            .then(jsonData=>{
                setProducts(jsonData.data);
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{
            fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products`)
            .then(res=>res.json())
            .then(jsonData=>{
                setProducts(jsonData.data);
            })
            .catch(err=>{
                console.log(err);
            })
        }

})

    return (
        <div className="container-fluid p-0">
            <Header />
            <main>
                <SideBar title={catName?catName:"All products"}/>
            </main>
            <Footer />
        </div>
    )
}

export default ProductCategoryPage
