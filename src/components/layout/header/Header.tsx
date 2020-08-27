import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { RootState } from '../../../services/rootReducer';
import { useSelector } from 'react-redux';

const Header: React.FC = (): JSX.Element => {
  const { isAuthenticated } = useSelector((state: RootState) => state.Auth);

  let navItems: JSX.Element;
  if (isAuthenticated) {
    navItems = (
      <React.Fragment>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" >Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </React.Fragment>
    );
  }
  else {
    navItems = <React.Fragment></React.Fragment>;
  }

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">Ask Mom</Navbar.Brand>
      {navItems}
    </Navbar>
  );
}

export default Header;