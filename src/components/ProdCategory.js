import React, {useContext} from 'react'
import CategoryContext from '../contexts/CategoryContext';
import ProdCatItem from './ProdCatItem';




const ProdCategory = () => {
    const{categories} = useContext(CategoryContext);
    return (
        <section id="product-category">
        <div className="container-fluid p-0">
            <div className="row">
                {categories.map((category,index)=> {
                    if (index < 4) return <ProdCatItem key={index} data={category}/>

                })}
                </div>
        </div>
        </section>
    )
}

export default ProdCategory
