import React from 'react'
import ProductItems from './ProductItems'
import './ProductList.css'

function ProductList({onAddToCart , onRemoveFromCart}) {
        const products = [{
            title: "ATOMIC HABITS",
            author: "Jhon James",
            price:"$100"
        },
        {
            title: "Visualization",
            author: "Goldsmith",
            price: "$40"
        },
        {
            title: "Victory",
            author: "George Fernantas",
            price: "$68"
        },
        {
            title: "THE SECRET",
            author: "Carley",
            price: "$230"
        },
        {
            title: "THE PARK",
            author: "James",
            price: "$50"
        },
        {
            title: "The Heaven in the Hell",
            author: "Roynald rein",
            price: "$210"
        }];

    return (
        <div className='ProductList'>
            <h2>Products</h2>
            <ul class="row">
                {products.map((product,index) => (
                    <li className="col-sm-6 col-lg-3"key={index}>
                        <ProductItems title={product.title} author={product.author} price={product.price} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart}/>
                    </li>
                ))}
            </ul>
           
        </div>
    )
}

export default ProductList