import styled from 'styled-components';

export const HeroWrap = styled.div `
    margin: 0;
    padding: 0;
    align-content: center;

    .slideshow {
        width: 100%;
        height: 100vh;
        position: relative;
        overflow: hidden;
      }
      
    .slideshow-item {
        width: inherit;
        height: inherit;
        position: absolute;
        opacity: 0;
        animation: cycleImages 24s infinite;
    }
      
    .slideshow-item:nth-child(1) {
        animation-delay: 0s;
    }
      
    .slideshow-item:nth-child(2) {
        animation-delay: 8s;
    }
      
    .slideshow-item:nth-child(3) {
        animation-delay: 16s;
    }
      
    .slideshow-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
      
    @keyframes cycleImages {
        20% {
          opacity: 1;
        }
        60% {
          opacity: 0;
        }
    }
      
    .hero-grid {
        top: 0;
        left: 0;
        position: absolute;
        margin: 0 130px;
        display: grid;
        grid-template-columns: repeat(12, 80px);
        grid-column-gap: 20px;
        width: 924px;
        height: 100vh;
        align-content: end;
    }  
`
    