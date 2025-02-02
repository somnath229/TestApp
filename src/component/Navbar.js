import React from "react";
import Nav from "react-bootstrap/Nav";
import "../style/Footer.css";

export default function Navbar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div className="NavMain" style={{ padding: "2rem", background: "#efebeb" }}>
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <div className="NavMain">
          <Nav.Item>
            <Nav.Link
              eventKey="1"
              href="#/home"
              style={{
                background: "linear-gradient(to right, #4caf50, black)",
                fontWeight: "800",
                fontSize: "1.5rem",
                margin: "0 2rem 0 0",
              }}>
              DemoTest
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              eventKey="2"
              title="Item"
              style={{
                color: "grey",
                fontWeight: "500",
                fontSize: "1rem",
              }}
              >
              {" "}
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="3"
              disabled
              style={{
                color: "grey",
                fontWeight: "500",
                fontSize: "1rem",
              }}>
              Tests
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
}
