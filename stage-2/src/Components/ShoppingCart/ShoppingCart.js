import React, { Component } from "react";
import "./ShoppingCart.css";

class ShoppingCart extends Component {
  constructor (props) {
    super (props)
    this.state = {
      cart: this.props.shoppingCart
    }
  }

componentWillReceiveProps (props) {
  const {cart} = this.state
  this.setState ({
    cart: props.shoppingCart
  })
}

  shoppingCartDisplay() {
    const {cart} = this.state
    return cart.map((element, index) => {
      return (
        <div className="shopping-cart-product-container" key={index}>
          <img src={element.image} alt="" />
          <div className="shopping-cart-info">
            <h2>{element.title}</h2>
            <h2>{"$" + element.price + ".00"}</h2>
            <div className="shopping-cart-button-container">
              <button
                className="shopping-cart-button"
                onClick={() => this.props.removeFromCart(index)}
              >
                Remove From Shopping Cart
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const {cart} = this.state
    console.log(this.props.shoppingCart) 
    return (
      <div className="shopping-cart-container">
        {cart.length >0 ? (
          this.shoppingCartDisplay()
        ) : (
          <div className="go-buy-something">
            <h1>Your shopping cart is empty! Go buy something!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
