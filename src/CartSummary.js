import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Go to cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((c) => (
            <DropdownItem key={c.product.id}>
              <Badge
                color="danger"
                onClick={() => this.props.removeFromCart(c.product)}
              >
                x
              </Badge>

              {c.product.productName}
              <Badge color="success" pill>
                {" "}
                {c.quantity}{" "}
              </Badge>
            </DropdownItem>
          ))}
          {/* 
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem> */}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmpty() {
    return (
      <div>
        <NavItem>
          <NavLink>Empty Cart!</NavLink>
        </NavItem>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}
