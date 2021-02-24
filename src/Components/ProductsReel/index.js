import React from 'react'
import './products-reel.css'

import ProductCard from '../ProductCard/'

function ProductsReel() {
    return (
        <div className="reel-wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default ProductsReel
