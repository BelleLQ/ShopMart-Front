import React, {useContext} from 'react'
import ProductContext from '../contexts/ProductContext';
import ProdListingItem from './ProdListingItem';


const ProdListing = (props) => {
  const{products} = useContext(ProductContext);
    return (
        <section className="product-listing-section">
        <div className="container-fluid p-0">
            <h3>{props.title}</h3>
            <div className="row">
                {products.map((product,index)=>(
                    <ProdListingItem key={index} data={product}/>
                ))}
                </div>
        </div>
        </section>
    )
}

export default ProdListing
