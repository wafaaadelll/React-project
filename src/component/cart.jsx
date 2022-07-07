import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart, delet } from "./redux/action";


const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const add = (item) => {
    dispatch(addToCart(item));
  };
  const delt = (item) => {
    dispatch(delet(item));
  };

  const cartItems = (product) => {
    return (
      <>
      <div className="hq"></div>
        <div className="px-4 mb-5 cards w-75 mx-auto rounded-3">
          <div className="">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4 col-12">
                <img src={product.images} alt="" className="im"/>
              </div>
              <div className="col-md-4">
                <h3 className="mb-4">{product.title}</h3>
                <p className="lead "><span className="btn btn-light me-4">{product.qty}</span> * {product.price} LE </p>
                <p className="lead"><span className="me-4"><strong>Total = </strong></span>{product.qty * product.price} LE</p>
                <button className="btn btn-warning me-4"onClick={() => delt(product)}>-</button>
                <span className="me-4">{product.qty}</span>
                <button className="btn btn-dark"onClick={() => add(product)}>+</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink to="/register"className="btn btn-outline-dark mb-5 w-25 mx-auto">CHECKOUT</NavLink>
          </div>
        </div>
      </>
    );
  };
  const empty = () => {
    return (
      <>
        <div className="container pt-5 hei">
          <div className="text-center pt-5 my-5">
            <h1 className="py-5">Cart Is Empty</h1>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
      {state.length == 0 && empty()}
    </div>
  );
};

export default Cart;
