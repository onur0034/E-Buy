import React, { Component } from "react";
import Category from "./Category";
import Navi from "./Navi";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "" };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  //we took the changeCategory function from Category component*************

  render() {
    let categoryInfo = { title: "Category List", bisey: "sa" };
    let productInfo = { title: "Product List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <Category
                currentCategory={this.state.currentCategoryjson}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Product info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

//App function changed to Class component********************
