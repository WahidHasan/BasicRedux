import React from 'react'
import Basket from './main-body.component'
import ProductList from './product-list.component'

const Home = () => {
    return (
        <div>
             <div className="row">
            <div className="col-6">
                <ProductList/>
            </div>
            <div className="col-6">
                <Basket/>
            </div>

        </div>
        </div>
       
    )
}

export default Home
