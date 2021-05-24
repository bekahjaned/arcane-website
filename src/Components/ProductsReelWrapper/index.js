import React from 'react'
import ReactDOM from 'react-dom';
import ReactCursorPosition from 'react-cursor-position';

import ScrollMenu from 'react-horizontal-scrolling-menu'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './products-reel-wrapper.css'

import TestImage from '../../Assets/ProductImages/item-1.png';

// to do: 
// - add unique images to ProductCard
// - add animations to ProductCard

let target = null;
class ProductsReelWrapper extends React.Component {
    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            target = node.querySelector('.products-reel');
        }
    }

    render() {
        return (
            <div>
                <ReactCursorPosition>
                    <ProductsReel />
                </ReactCursorPosition> 
            </div>
        )
    }   
}

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
    // componentDidMount() {
    //     this.checkIfActive();
    //     console.log(this.target)
    //     console.log(this.props.isActive)

    // this doesn't work because it only runs when the 
    // component mounts, so of course isActive will be false 
    // and will stay false

    // }

    // trying to clean up my components, so it's not all in one
    // but I can't change the target element here

    // try making a new class component to put the ScrollMenu in
    // body-scroll-lock documentation says that the component
    // receiving the ref must be class component

    productItems = Products(productsList)
    products = this.productItems; 
    
    checkIfActive = () => {
        if(this.props.isActive === true) {
            console.log("function is running")
            disableBodyScroll(target);
        }
        else {
            console.log("function is running, but showing inactive")
            enableBodyScroll(target);
        }
    }

    render() {
        console.log(this.props.isActive)

        return (
            <div className='products-reel' onMouseEnter={this.checkIfActive}>
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

export default ProductsReelWrapper


