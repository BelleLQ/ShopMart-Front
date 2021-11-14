import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Container,Navbar, Nav, NavDropdown, Button, Form, FormControl, NavLink} from 'react-bootstrap'
import CategoryContext from '../contexts/CategoryContext';


const Header = () => {
    const {categories} = useContext(CategoryContext);

    return (
      <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand><Link to="/" className="link-hover-white">Shop Mart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><Link to="/products" className="link-hover-white">Products</Link></Nav.Link>
          <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavLink href="/products/categories" className="menu-link">
                  All categories
              </NavLink>
              {categories.map((category, index)=>{
                return  (<NavLink href={`/products/categories/${category.categoryName}`}
                                   className="menu-link"
                                   key={index}>
                            {category.categoryName}
                         </NavLink>)
              })}
          </NavDropdown>
        </Nav>
        <Nav className="m-auto">
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      </Nav>
      <Nav>
          <Nav.Link><Link to="/login" className="link-hover-white">Log In</Link></Nav.Link>
          <Nav.Link><Link to="/signup" className="link-hover-white">Sign Up</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    )
}

export default Header
