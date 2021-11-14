import React from 'react'


const PhotoItem = (props) => {
    
    console.log(props);
    return (
        <div className="col-3 mt-1">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
          data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
          alt="Gallery image 1"
          className="active w-100"
        />
      </div>
    )
}

export default PhotoItem
