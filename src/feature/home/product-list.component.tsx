import React from 'react'

const ProductList = () => {
    const item = [1,2,3,4,5,6];
    return (
      <div className="list-style">
        <header>
          <h3>
            <i className="fas fa-seedling" area-hidden="true"></i> Product
          </h3>
        </header>
        {/* <div className="card">
          <div className="card-header">Basket</div>
          <div className="card-body">
              <div className="row">
              {item.map((val: any)=>(
                    <div className="col-4 basket-item">
                        {val}
                    </div>
                ))}
              </div>
          </div>
        </div> */}
        <ul className="products"
        >
          {item.map((val: any) => (
            <li className="parent-list"><i className="fas fa-plus-circle"></i>{" "}{val}</li>
          ))}
        </ul>
      </div>
    );
};

export default ProductList
