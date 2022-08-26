import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Alcohols" },
      { categoryId: 2, categoryName: "foods" },
    ],
    currentCategory: "as",
    
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              key={category.categoryId}
              onClick={() => this.changeCategory(category)}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
