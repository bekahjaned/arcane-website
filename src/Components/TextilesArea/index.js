import React from 'react'
import './textiles-area.css'

import Title from '../Title/'
import ProductCard from '../ProductCard/'

function TextilesArea() {
    return (
        <div className="textiles-area">
            <Title text="Our textiles" />
            <ProductCard />
        </div>
    )
}

export default TextilesArea
