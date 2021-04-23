import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './products-reel-wrapper.css'

import TestImage from '../../Assets/ProductImages/item-1.png';

// to do: 
// - add unique images to ProductCard
// - add animations to ProductCard

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


class ProductsReelWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.target = null;
        this.setTarget = (element) => {
            this.target = element;
        }
    }

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
            disableBodyScroll(this.target);
        }
        else {
            enableBodyScroll(this.target);
        }
    }

    render() {
        

        return (
            <div className='products-reel' ref={this.setTarget} onMouseEnter={this.checkIfActive}>
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


// functional component... can I pass the target as props
// to get it to work?

// const ProductsReel = (props) => {
//     const productItems = Products(productsList)
//     const products = productItems;

//     let { isActive = false } = props;
//     console.log(isActive)

//     const checkIfActive = () => {
//         if(isActive === true) {
//             disableBodyScroll(props.targetElement);
//         }
//         else {
//             enableBodyScroll(props.targetElement);
//         }
//     }

//         return (
//             <div className='products-reel' onMouseEnter={checkIfActive()}>
//                 <ScrollMenu 
//                     data={products}
//                     arrowLeft={ArrowLeft}
//                     arrowRight={ArrowRight}
//                     alignCenter={false}
//                     transition={1}
//                 />
//             </div>
//         )
// }


