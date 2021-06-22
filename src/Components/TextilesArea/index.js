import React from 'react'
import ReactDOM from 'react-dom';
import ReactCursorPosition from 'react-cursor-position';

import Title from '../Title/'
import { TextilesAreaWrap } from '../../Elements/TextilesAreaWrap/'

import ScrollMenu from 'react-horizontal-scrolling-menu'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import TestImage from '../../Assets/ProductImages/item-1.png';

// To do:
// - fix image bug, won't show individual images

let target = null;
class TextilesArea extends React.Component {
    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            target = node.querySelector('.products-reel');
        }
    }

    render() {
        return (
            <TextilesAreaWrap>
                <Title text="Our textiles" />
                <ReactCursorPosition>
                    <ProductsReel />
                </ReactCursorPosition>
            </TextilesAreaWrap>
        )
    }   
}

// -------------------------------------------------------

const productsList = [
    { name: 'Item 1', price: '$100', image: 'item-1' },
    { name: 'Item 2', price: '$200', image: 'item-2' },
    { name: 'Item 3', price: '$300', image: 'item-3' },
    { name: 'Item 4', price: '$400', image: 'item-4' },
    { name: 'Item 5', price: '$500', image: 'item-5' },
    { name: 'Item 6', price: '$600', image: 'item-6' }  
];

const ProductCard = ({name, price}) => {
    return (
        <div className="menu-item">
            <img src={TestImage} alt="product" draggable="false"/>
            <h2 className="product-name">{name}</h2>
            <h3 className="product-price">CAD {price}</h3>
        </div>
    )
}

export const Products = (productsList) => productsList.map(product => {
    const {name, price} = product;

    return <ProductCard name={name} price={price} key={name} />
});

const Arrow = ({text, className}) => {
    return (
        <div className={className}>
            {text}
        </div>
    );
};

const ArrowLeft = Arrow({text: '<', className: 'arrow-prev'});
const ArrowRight = Arrow({text: '>', className: 'arrow-next'});

class ProductsReel extends React.Component {
    productItems = Products(productsList)
    products = this.productItems;
    

    checkIfActive = () => {
        if(this.props.isActive === true) {
            disableBodyScroll(target);
        } else {
            enableBodyScroll(target);
        }
    }
    

    render() {

        return (
            <div className='products-reel' onMouseEnter={this.checkIfActive()}>
                <ScrollMenu 
                    data={this.products}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    alignCenter={false}
                    transition={1}
                />
            </div>
        )
    }
        
}

export default TextilesArea
