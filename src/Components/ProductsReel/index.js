import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import './products-reel.css'

import TestImage from '../../Assets/ProductImages/item-1.png';

const productsList = [
    { name: 'Item 1', price: '$100', image: 'item-1' },
    { name: 'Item 2', price: '$200', image: 'item-2' },
    { name: 'Item 3', price: '$300', image: 'item-3' },
    { name: 'Item 4', price: '$400', image: 'item-4' },
    { name: 'Item 5', price: '$500', image: 'item-5' },
    { name: 'Item 6', price: '$600', image: 'item-6' }  
];

// to do: 
// - try to make the ProductCard align with the Title
// - make arrows bigger (font-size property maybe?)

const ProductCard = ({name, price}) => {
    return (
        <div className="menu-item">
            {/* <img src={require(`../../Assets/ProductImages/${image}.png`)} alt="product" /> */}
            <img src={TestImage} alt="product"/>
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

    render() {
        const products = this.productItems;

        return (
            <div className='products-reel'>
                <ScrollMenu 
                    data={products}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    alignCenter={false}
                    transition={1}
                />
            </div>
        )
    }
}

export default ProductsReel
