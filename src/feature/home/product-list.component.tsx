import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListData } from "../../core/mock-data";
import { addToCart, increaseQuantity } from "../../core/redux/slices/basket";
import { BasketState } from "../../core/redux/store";
import { ProductListData } from "../../core/Types/types";

const ProductList = () => {
  const productList: ProductListData[] = productListData;
  const products = useSelector((state: BasketState) => state.basket.cart);
  const dispatch = useDispatch();

  const handleProductAdd=(productItem: ProductListData)=>{
    const checkProduct = products?.findIndex((item)=>item.id === productItem.id);
    if(checkProduct! >= 0 ){
      dispatch(increaseQuantity(productItem));
    }
    else
      dispatch(addToCart(productItem));
    
  }
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
            <i className="fas fa-plus-circle" onClick={()=>handleProductAdd(item)}></i>{" "}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
