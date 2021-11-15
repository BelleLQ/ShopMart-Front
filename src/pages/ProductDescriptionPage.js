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
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/${prodId}`)
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
                    <div className="row my-4">
                        <div className="col-5">
                            <div className="p-0 container justify-content-center" style={{overflow: 'hidden'}}>
                                <div className="col-12 p-0">
                                    <img
                                        src={product.photoUrl[0]}
                                        alt={product.prodName}
                                        style={{width: '30vw'}}
                                    />
                                </div>
                                <div className="row m-0 p-0 mt-3">
                                {product.photoUrl.map((url,index)=> {
                                        if(index>0){
                                            return (
                                                <div className="col p-0">
                                                <img
                                                        src={url}
                                                        alt={product.prodName}
                                                        style={{width: '15vw', height:'15vw', 'objectFit':'cover'}}
                                                    />
                                                </div>

                                            )
                                        }
                                })}
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                                <h2>{product.prodName}</h2>
                                <button type="button" className="align-items-center justify-content-center btn btn-dark">${product.price}</button>
                                <h5>About this item</h5>
                                <p>{product.description}</p>
                        </div>
                    </div>
                </div>
                </section>
                
        </main>
        <Footer/>
        </div>
    )
}

export default ProductDescriptionPage
