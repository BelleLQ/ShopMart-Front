import React from 'react'
import {Card, Button} from 'react-bootstrap'
import{Link} from 'react-router-dom'


const ProdCatItem = (props) => {
    return (
        <div className = "item col-sm-6 col-lg-4 text-center">

            <Card style={{overflow: 'hidden'}}>
                <Link to={`/products/categories/${props.data.categoryName}`} className="link-black-no-a-dec link-hover-grey">
                <Card.Img variant="top" src={props.data.photoUrl} style={{height: '190px', 'objectFit':'cover','min-width':'100%'}}/>
                <Card.Body>
                    <Card.Title>{props.data.categoryName}</Card.Title>
                    <Card.Text style={{height:'80px'}}>
                        {props.data.categoryDesc}
                    </Card.Text>
                    <Button className="align-items-center justify-content-center" variant="dark">Go Shopping</Button>
                </Card.Body>
                </Link>
            </Card>
        </div>
    )
}

export default ProdCatItem
