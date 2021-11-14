import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
        <div className="container-fluid footer-container">
            <hr />
        <div className="row">
            <div className="col-md-3 col-sm-12 text-center">
                <h5>Buy</h5>
                <p><Link to="/signup">Registration</Link></p>
                <p><Link to="/">Stores</Link></p>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
                <h5>Sell</h5>
                <p><Link to="/signup">Start Selling</Link></p>
                <p><Link to="/">Quick guide</Link></p>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
                <h5>About</h5>
                <p><Link to="/signup">Company Info</Link></p>
                <p><Link to="/">Contact Us</Link></p>
                <p><Link to="/">Policies</Link></p>
                <p><Link to="/">Investor</Link></p>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
                <h5>Social Media</h5>
                <p><Link to="/signup">Facebook</Link></p>
                <p><Link to="/">Instagram</Link></p>
            </div>
        </div>
        </div>
        </footer>
    )
}

export default Footer
