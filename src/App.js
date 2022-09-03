import React, { Component } from "react";
import Category from "./Category";
import Navi from "./Navi";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  //we took the changeCategory function from Category component*************

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({
      cart: newCart,
    });
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({
      cart: newCart,
    });
  };

  render() {
    let categoryInfo = { title: "Category List", bisey: "sa" };
    let productInfo = { title: "Product List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          </Row>

          <Row>
            <Col xs="3">
              <Category
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Product
                products={this.state.products}
                addToCart={this.addToCart}
                info={productInfo}
                currentCategory={this.state.currentCategory}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

//App function changed to Class component********************
