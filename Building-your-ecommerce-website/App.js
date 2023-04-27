import React from "react";
import {Button, Alert} from "react-bootstrap";
import { Container, Navbar } from "react-bootstrap";
import Counter from "./components/Counter";
import ProductsArr from "./components/ProductsArr";



function App() {
  return (
    <>
      {/* <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
      <Counter/> */}
      <ProductsArr/>
    </>
  );
}

export default App;
