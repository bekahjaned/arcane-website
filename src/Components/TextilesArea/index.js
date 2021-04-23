import React from 'react'
import ReactCursorPosition from 'react-cursor-position';
import './textiles-area.css'

import Title from '../Title/'
import ProductsReelWrapper from '../ProductsReelWrapper'
class TextilesArea extends React.Component {

    render() {
        return (
            <div className="textiles-area">
                <Title text="Our textiles" />
                <ReactCursorPosition>
                    <ProductsReelWrapper />
                </ReactCursorPosition>
            </div>
        )
    }   
}

export default TextilesArea
