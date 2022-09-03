import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">Nortwind App</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary
              cart={this.props.cart}
              
            />
          </Nav>
        </Navbar>
      </div>
    );
  }
}
