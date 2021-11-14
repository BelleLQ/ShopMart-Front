import React, {useEffect, useContext} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductContext from '../contexts/ProductContext'
import SideBar from '../components/SideBar';
import {useParams} from "react-router-dom";



const ProductCategoryPage = (props) => {
    const{setProducts} = useContext(ProductContext);
    const{catName} = useParams();
    console.log(props);
   
    useEffect(()=>{
        if(catName){
            fetch(`http://localhost:8080/products?category=${catName}`)
            .then(res=>res.json())
            .then(jsonData=>{
                setProducts(jsonData.data);
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{
            fetch(`http://localhost:8080/products`)
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
        <div className="container-fluid">
            <Header />
            <main>
                <SideBar title={catName?catName:"All products"}/>
            </main>
            <Footer />
        </div>
    )
}

export default ProductCategoryPage
