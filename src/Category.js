import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Alcohols" },
      { categoryId: 2, categoryName: "foods" },
    ],
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              key={category.categoryId}
              onClick={() => this.props.changeCategory(category)}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}

//we are taking from app FROM NOW so "state" turn into "props"**********
