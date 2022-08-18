import React from "react";
import Category from "./Category";
import Navi from "./Navi";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";

function App() {
  let categoryInfo = { title: "Category List", bisey: "sa" };
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <Category info={categoryInfo} />
          </Col>
          <Col xs="9">
            <Product />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
