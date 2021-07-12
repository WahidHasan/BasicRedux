import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartType, decreaseQuantity } from "../../core/redux/slices/basket";
import { BasketState } from "../../core/redux/store";

const Basket = () => {
  const products = useSelector((state: BasketState) => state.basket.cart);
  const dispatch = useDispatch();
  return (
    <div className="list-style">
      <header>
        <h3>
          <i className="fas fa-dolly" area-hidden="true"></i> Basket
        </h3>
      </header>
      <ul className="basket">
        {products &&
          products.length > 0 &&
          products.map((val: cartType) => (
            <li className="parent-list" key={val.id}>
              <i className="fas fa-minus-square" onClick={() => dispatch(decreaseQuantity(val.id))}></i>{" "}
              <span className="quantity-class">{val.quantity}</span> {val.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Basket;
