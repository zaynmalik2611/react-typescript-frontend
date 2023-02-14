import Nav from "react-bootstrap/Nav";
import { NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <NavItem>
        <NavLink as={Link} to="/">
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} to="/error">
          Error page
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} to="/contacts/3">
          Contact
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navbar;
