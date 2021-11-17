import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Container,Navbar, Nav, NavDropdown, Button, Form, FormControl, NavLink} from 'react-bootstrap'
import CategoryContext from '../contexts/CategoryContext';


const Header = () => {
    const {categories} = useContext(CategoryContext);

    return (
      <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="m-0" style={{width:'100%'}}>
      <Navbar.Brand><Link to="/" className="link-hover-white ">Shop Mart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><Link to="/products" className="underline-fade-in">Products</Link></Nav.Link>
          <NavDropdown title="Categories" id="navbarScrollingDropdown" renderMenuOnMount={true}>
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
          <Nav.Link><Link to="/login" className="underline-fade-in">Log In</Link></Nav.Link>
          <Nav.Link><Link to="/signup" className="underline-fade-in">Sign Up</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    )
}

export default Header
