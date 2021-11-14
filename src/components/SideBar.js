import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import ProdListing from '../components/ProdListing';
import CategoryContext from '../contexts/CategoryContext'



const SideBar = (props) => {
    const{categories} = useContext(CategoryContext);
    console.log(props);
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-grey">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/products/categories" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Categories</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            {categories.map((category, index)=>{
                                return (
                                    <li className="nav-item">
                                        <Link to={`/products/categories/${category.categoryName}`}  className="nav-link align-middle px-0 text-black text-decoration-none" key={index}>{category.categoryName}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                       
                    </div>
                </div>
                <div className="col py-3">
                    <ProdListing title={props.title}/>
                </div>
            </div>
        </div>
    )
}

export default SideBar
