import React from "react";
import { Nav } from "react-bootstrap";

function Navbar() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <strong>
        {" "}
        <Nav.Item as="li">
          <Nav.Link href="/home">Homepage</Nav.Link>
        </Nav.Item>{" "}
      </strong>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Details</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">More Links</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
