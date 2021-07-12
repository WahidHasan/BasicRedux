import React from "react";
import { useDispatch } from "react-redux";
import { productListData } from "../../core/mock-data";
import { addToCart } from "../../core/redux/slices/basket";
import { ProductListData } from "../../core/Types/types";

const ProductList = () => {
  const productList: ProductListData[] = productListData;
  const dispatch = useDispatch();
  return (
    <div className="list-style">
      <header>
        <h3>
          <i className="fas fa-seedling" area-hidden="true"></i> Product
        </h3>
      </header>
      <ul className="products">
        {productList.map((item: ProductListData) => (
          <li className="parent-list" key={item.id}>
            <i className="fas fa-plus-circle" onClick={() => dispatch(addToCart(item))}></i>{" "}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
