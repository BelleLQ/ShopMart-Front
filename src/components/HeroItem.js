import React from 'react'
import {Link} from 'react-router-dom';


const HeroItem = (props) => {
    return (
    <div className={props.active==='true'?"carousel-item active":"carousel-item"}>
      <img src={props.data.photoUrl} className="d-block img-fluid w-40 mx-auto" alt={props.data.description} style={{height: '500px','objectFit':'cover', width: '100%'}} />
        <div className="carousel-caption d-flex h-100 align-items-start justify-content-start">
          </div>
        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
          <h2 className="fw-bold" style={{color:'black'}}><Link to="/products">{props.data.description}</Link></h2>
        </div>
    </div>
    )
}

export default HeroItem
