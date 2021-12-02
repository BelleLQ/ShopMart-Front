import React from 'react'
import {Card, Button} from 'react-bootstrap' 
import {Link} from "react-router-dom"
import {FaRegThumbsUp} from 'react-icons/fa'

const ProdListingItem = (props) => {
    return (
        <div className = "item col-sm-6 col-lg-4 col-xl-3 text-center">
            <Link to = {`/products/details/${props.data._id}`} className="link-black-no-a-dec link-hover-grey">
            <Card style={{overflow: 'hidden', background: `url(${props.data.photoUrl})  center center / 50% no-repeat`}}>
            <Card.Body>
                <Card.Title className="fs-6" style={{height:'40px', overflow:'hidden'}}>{props.data.prodName}
                <FaRegThumbsUp className={props.data.isBestSeller?"m-1":"d-none"} style={{color: 'red'}}/>
                </Card.Title>
                <Card.Text className="">
                    {props.data.category.categoryName}
                </Card.Text>
                <Button className="align-items-center justify-content-center" variant="dark">${props.data.price}</Button>
            </Card.Body>
            </Card>
            </Link>
    </div>
    )
}

export default ProdListingItem
