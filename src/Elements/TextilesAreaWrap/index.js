import styled from 'styled-components';

export const TextilesAreaWrap = styled.div`
    padding-left: 90px;
    padding-bottom: 100px;
    height: 100vh;
    
    .products-reel {
        padding-bottom: 100px;
    }
    
    .menu-wrapper {
        overflow: scroll;
    }
    
    .scroll-menu-arrow {
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
    }
    
    .menu-item {
        position: relative;
        width: 380px;
        height: 500px;
        margin-right: 20px;
        user-select: none;
        cursor: pointer;
        border: none;
    }
    
    img {
        position: relative;
        border-radius: 4px;
        z-index: 0;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        pointer-events: none;
    }
    
    .product-name {
        display: none;
        position: absolute;
        top: 6%;
        left: 7.89%;
        z-index: 1;
        font-family: Cormorant;
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
        color: #080707;
    }
    
    .product-price {
        display: none;
        position: absolute;
        right: 7.89%;
        bottom: 6%;
        font-family: Cormorant;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        text-align: right;
        color: #080707;
    }

    .menu-item:hover {
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.15));

        .product-name {
            display: block;
            animation: slideRight 0.5s ease-in-out;
        }

        .product-price {
            display: block;
            animation: slideLeft 0.5s ease-in-out;
        }
    }

    @keyframes slideRight {
        0% {
          translate: -30px 0;
          opacity: 0;
        }
      
        100% {
          translate: 0 0;
          opacity: 1;
        }
      }

      @keyframes slideLeft {
        0% {
          translate: 30px 0;
          opacity: 0;
        }
      
        100% {
          translate: 0 0;
          opacity: 1;
        }
      }
`