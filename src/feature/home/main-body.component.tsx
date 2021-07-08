import React from "react";

const Basket = () => {
    const item = [1,2,3,4,5,6];
  return (
    <div className="list-style">
      <header>
          <h3>
              <i className="fas fa-dolly" area-hidden="true"></i>{" "}Basket
          </h3>
      </header>
      <ul className="basket"
        >
          {item.map((val: any) => (
            <li className="parent-list"><i className="fas fa-minus-square"></i>{" "}{val}</li>
          ))}
        </ul>
    </div>
  );
};

export default Basket;
