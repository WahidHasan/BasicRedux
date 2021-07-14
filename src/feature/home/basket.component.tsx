import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartType, decreaseQuantity, emptyCart, removeFromCart } from "../../core/redux/slices/basket";
import { BasketState } from "../../core/redux/store";

const Basket = () => {
  const products = useSelector((state: BasketState) => state.basket.cart);
  const totalProducts = useSelector((state: BasketState) => state.basket.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="list-style">
      <header>
        <h3  className="basket-list">
          <i className="fas fa-dolly" area-hidden="true"></i> Basket
         {totalProducts! > 0 ? <span className="clear-basket"><i className="fas fa-trash" onClick={() => dispatch(emptyCart())} area-hidden="true"></i></span> : <></>} 
        </h3>
      </header>
      <ul className="basket">
        {products &&
          products.length > 0 &&
          products.map((val: cartType) => (
            <li className="parent-list" key={val.id}>
              <i className="fas fa-minus-square" onClick={val.quantity! > 1 ?() => dispatch(decreaseQuantity(val.id)) : () => dispatch(removeFromCart(val.id))}></i>{" "}
              <span className="quantity-class">{val.quantity}</span> {val.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Basket;
