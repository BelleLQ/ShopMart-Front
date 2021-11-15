import React, {useEffect, useContext} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductContext from '../contexts/ProductContext'
import ProdListing from '../components/ProdListing';


const ProductListingPage = () => {
    const{setProducts} = useContext(ProductContext);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products`)
        .then(res=>res.json())
        .then(jsonData=>{
            setProducts(jsonData.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div className="container-fluid p-0">
            <Header />
            <main>
                <ProdListing title="All products"/>
            </main>
            <Footer />
        </div>
    )
}

export default ProductListingPage
