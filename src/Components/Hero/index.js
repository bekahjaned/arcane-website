import React from 'react';

import hero1 from "../../Assets/hero-image.jpg"
import hero2 from "../../Assets/hero-image2.jpg"
import hero4 from "../../Assets/hero-image4.jpg"

import { HeroWrap } from '../../Elements/HeroWrap/'

import HeroTextBox from '../HeroTextBox/'

function Hero() {
    return (
        <HeroWrap>
            <div className="slideshow">
                <div className="slideshow-item">
                    <img src={hero1} alt="textiles" />
                </div>
                <div className="slideshow-item">
                    <img src={hero2} alt="textiles" />
                </div>
                <div className="slideshow-item">
                    <img src={hero4} alt="textiles" />
                </div>   
            </div>
            <div className="hero-grid">
                <HeroTextBox />
            </div>
        </HeroWrap>
    )
}

export default Hero
