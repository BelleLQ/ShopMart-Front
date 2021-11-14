import React, {useEffect, useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useParams} from "react-router-dom";



const ProductDescriptionPage = () => {
    const {prodId} = useParams();
    const [product, setProduct] = useState({
        prodName: "",
        price: 1.50,
        description: "",
        category: "",
        quantity: 359,
        isBestSeller: false,
        photoUrl:[{}
  ]
    });
    useEffect(()=>{
        fetch(`http://localhost:8080/products/${prodId}`)
        .then(res=>res.json())
        .then(jsonData=>{
            setProduct(jsonData.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    return (
        <div className="container-fluid">
            <Header />
            <main>
            <section id="product-description-section">
                    <div className="container grid grid-col-4 grid-gap-2">
        
                    <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                    <div className="row py-3 shadow-5">
                        {product.photoUrl.map((url,index)=>{
                            return(
                                <div className="col-3 mt-1">
                                    <img
                                        src={url}
                                        alt={product.prodName}
                                        className="w-100"
                                    />
                                 </div>
                            )
                        })}
                    
                    </div>
                    </div>
                        <div className="product-description-content-area">
                            <h2>{product.prodName}</h2>
                            <p>${product.price}</p>
                            <h3>Details</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
        
                </section>
                
        </main>
        <Footer/>
        </div>
    )
}

export default ProductDescriptionPage
