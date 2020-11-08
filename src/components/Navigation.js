import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <div className="Navigation">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          Hermes
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/hermes"><i className="fa fa-check-square-o" aria-hidden="true"></i> Execute Hermes</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
