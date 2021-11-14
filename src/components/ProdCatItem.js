import React from 'react'
import {Card, Button} from 'react-bootstrap' 


const ProdCatItem = (props) => {
    return (
        <div className = "col-sm-6 col-lg-4 text-center">
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={props.data.photoUrl} style={{height: '190px', 'objectFit':'cover'}}/>
                <Card.Body>
                    <Card.Title>{props.data.categoryName}</Card.Title>
                    <Card.Text className="mb-2 text-muted align-middle" style={{height:'80px'}}>
                        {props.data.categoryDesc}
                    </Card.Text>
                    <Button className="align-items-center justify-content-center" variant="dark">Go Shopping</Button>
                </Card.Body>
                </Card>
        </div>
    )
}

export default ProdCatItem
