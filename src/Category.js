import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  constructor(props) {                               /*constructor is not necessary with new version */
    super(props);
    this.state = {                                   /*can be showed just state ={}*/ 
      categories: [
        { categoryId: 1, categoryName: "Alcohols" },
        { categoryId: 2, categoryName: "foods" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
