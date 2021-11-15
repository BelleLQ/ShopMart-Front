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
        <div className="container-fluid p-0">
            <Header />
            <main>
            <section id="product-description-section">
                <div className="container grid grid-col-4 grid-gap-2">
                    <div className="row my-4">
                        <div className="col-5">
                            <div className="p-0 row d-flex justify-content-center" style={{overflow: 'hidden'}}>
                                <div className="col-12 p-0 d-flex justify-content-center">
                                    <img
                                        src={product.photoUrl[0]}
                                        alt={product.prodName}
                                        style={{width: '30vw', height:'30vw', 'objectFit':'scale-down'}}
                                    />
                                </div>

                                <div className="row m-0 p-0 mt-3 ">
                                {product.photoUrl.map((url,index)=> {
                                        if(index>0){
                                            return (
                                                <div className="col p-0 d-flex justify-content-center">
                                                <img
                                                        src={url}
                                                        alt={product.prodName}
                                                        style={{height:'15vw', 'objectFit':'scale-down', 'max-width':'15vw'}}
                                                    />
                                                </div>

                                            )
                                        }
                                })}
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <span>
                                <h2 className="d-inline-block">{product.prodName}</h2>
                                <p className="d-inline-block m-2 textred font-italic">Best Seller</p>
                            </span>
                                <button type="button" className="d-block align-items-center justify-content-center btn btn-dark">${product.price}</button>
                                <h5>About this item</h5>
                                <p className="font-weight-light">{product.description}</p>
                                <h5 className="d-inline-block">Category</h5>
                                <p className="d-inline-block m-1 font-weight-light">{product.category.categoryName}</p>
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
