import React from 'react'
import './product-card.css'

import TestImage from '../../Assets/ProductImages/product-card-example.png'

function ProductCard({name, price}) {
    return (
        <div className="product-card-wrap">
            <img src={TestImage} alt="product" />
            <h2 className="product-name">{name}</h2>
            <h3 className="product-price">CAD {price}</h3>
        </div>
    )
}

export default ProductCard
