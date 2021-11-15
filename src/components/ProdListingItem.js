import React from 'react'
import {Card, Button} from 'react-bootstrap' 
import {Link} from "react-router-dom"
import {FaRegThumbsUp} from 'react-icons/fa'

const ProdListingItem = (props) => {
    return (
        <div className = "item col-sm-6 col-lg-4 col-xl-3 text-center">
        <Card>
            <Link to = {`/products/details/${props.data._id}`} className="link-black-no-a-dec link-hover-grey"> 
            <Card.Img variant="top" src={props.data.photoUrl[0]} style={{height: '190px', 'objectFit':'cover'}}/>
            <Card.Body>
                <Card.Title className="fs-6" style={{height:'40px', overflow:'hidden'}}>{props.data.prodName}
                <FaRegThumbsUp className={props.data.isBestSeller?"m-1":"d-none"} style={{color: 'red'}}/>
                </Card.Title>
                <Card.Text className="">
                    {props.data.category.categoryName}
                </Card.Text>
                <Button className="align-items-center justify-content-center" variant="dark">${props.data.price}</Button>
            </Card.Body>
            </Link>
            </Card>
    </div>
    )
}

export default ProdListingItem
