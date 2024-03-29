import React from 'react'

import Title from '../Title/'
import ProductsReel from '../ProductsReel/'

import { TextilesAreaWrap } from '../../Elements/TextilesAreaWrap/'

function TextilesArea() {
    return (
        <TextilesAreaWrap>
                <Title text="Our textiles" />
                <ProductsReel />
            </TextilesAreaWrap>
    )
}

export default TextilesArea

