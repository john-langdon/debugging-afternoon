import React, { Component } from "react";
import axios from "axios";
import StoreFront from "./Components/StoreFront/StoreFront";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import NavBar from "./Components/NavBar/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      showCart: false
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.navigate = this.navigate.bind(this);
  }
  componentDidMount() {
    axios
      .get("https://practiceapi.devmountain.com/products/")
      .then(response => {
        console.log(response)
        this.setState({
          products: response.data
        });
      });
  }
  addToCart(item) {
    const {cart} = this.state
    let newCart = [...cart, item]
    this.setState({
      cart: newCart
    });
  }
  removeFromCart(index) {
    console.log(index)
    let cartCopy = this.state.cart;
    cartCopy.splice(index, 1);
    this.setState({
      cart: cartCopy
    });
  }
  navigate(location) {
    if (location === "cart") {
      this.setState({
        showCart: true
      });
    } else {
      this.setState({
        showCart: false
      });
    }
  }
  render() {
    const { products, cart, showCart } = this.state;
    return (
      <div className="App">
        <NavBar navigate={this.navigate} />
        <div className="main-container">
          {showCart ? (
            <ShoppingCart shoppingCart={cart} removeFromCart={this.removeFromCart} />
          ) : (
            <StoreFront products={products} addToCart={this.addToCart} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
