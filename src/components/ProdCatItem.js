import React from 'react'
import {Card} from 'react-bootstrap'
import{Link} from 'react-router-dom'


const ProdCatItem = (props) => {
    return (
        <div className = "item col-sm-6 col-lg-3 text-center">
            <Link to={`/products/categories/${props.data.categoryName}`} className="link-black-no-a-dec link-hover-grey"
            >
                <Card style={{ overflow: 'hidden', background: `url(${props.data.photoUrl})  center center / cover no-repeat`}}>

                    <Card.Body className="card-body-category">
                        <Card.Title>{props.data.categoryName}</Card.Title>
                        <Card.Text style={{height:'80px'}}>
                            {props.data.categoryDesc}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default ProdCatItem
