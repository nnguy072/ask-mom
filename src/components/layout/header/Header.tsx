import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import store from '../../../store';

type HeaderProps = {
}

export default class Header extends React.Component<HeaderProps> {
  render(): JSX.Element {
    const { isAuthenticated } = store.getState().Auth;
    
    let navItems: JSX.Element;
    if (isAuthenticated) {
      navItems = (          
      <React.Fragment>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </React.Fragment>
      );
    }
    else {
      navItems = (
        <Nav className="ml-auto">
          <Nav.Link href="/">Sign In</Nav.Link>
        </Nav>
      );
    }

    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">Ask Mom</Navbar.Brand>

        {navItems}
      </Navbar>
    );
  }
}