import React from 'react'
import './product-card.css'

import TestImage from '../../Assets/ProductImages/product-card-example.png'

function ProductCard() {
    return (
        <div className="product-card-wrap">
            <img src={TestImage} alt="product" />
            <h2 className="product-name">Product name</h2>
            <h3 className="product-price">CAD $150</h3>
        </div>
    )
}

export default ProductCard
