import React from 'react'
import './textiles-area.css'

import Title from '../Title/'
import ProductsReel from '../ProductsReel/'

function TextilesArea() {
    return (
        <div className="textiles-area">
            <Title text="Our textiles" />
            <ProductsReel />
        </div>
    )
}

export default TextilesArea
