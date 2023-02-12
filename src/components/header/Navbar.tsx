import Nav from "react-bootstrap/Nav";
import { NavItem, NavLink } from "react-bootstrap";
// import { Item, Link } from 'react-bootstrap/Nav'

function Navbar() {
  //   const hello = "hello";
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <NavItem>
        <NavLink eventKey="active">Active</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="option-2" eventKey="option-1">
          Option 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink eventKey="third">Third</NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navbar;
