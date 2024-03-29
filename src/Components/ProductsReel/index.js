import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'

import { ProductsReelWrap } from '../../Elements/ProductsReelWrap/'

import Image1 from '../../Assets/ProductImages/item-1.png';
import Image2 from '../../Assets/ProductImages/item-2.png';
import Image3 from '../../Assets/ProductImages/item-3.png';
import Image4 from '../../Assets/ProductImages/item-4.png';
import Image5 from '../../Assets/ProductImages/item-5.png';
import Image6 from '../../Assets/ProductImages/item-6.png';

let productList = [
    {name: "Item 1", price: "$100", image: Image1},
    {name: "Item 2", price: "$200", image: Image2},
    {name: "Item 3", price: "$300", image: Image3},
    {name: "Item 4", price: "$400", image: Image4},
    {name: "Item 5", price: "$500", image: Image5},
    {name: "Item 6", price: "$600", image: Image6}
]

const ProductCard = ({name, price, image}) => {
    return (
        <div className="menu-item">
            <img src={image} alt="product" draggable="false"/>
            <h2 className="product-name">{name}</h2>
            <h3 className="product-price">CAD ${price}</h3>
        </div>
    )
}

export const Products = (productList) => productList.map(product => {
    const {name, price, image} = product;

    return <ProductCard name={name} price={price} image={image} key={name} />
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
    productItems = Products(productList)
    products = this.productItems;
    

    render() {
        return (
            <ProductsReelWrap>
                <ScrollMenu 
                    data={this.products}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    alignCenter={false}
                    transition={1}
                    wheel={false}
                />
            </ProductsReelWrap>
        )
    }
        
}

export default ProductsReel
