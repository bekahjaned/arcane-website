import React from 'react';
import './hero.css';

import HeroTextBox from '../HeroTextBox/'

function Hero() {
    return (
        <div className="hero-image">
            <div className="hero-grid">
                <HeroTextBox />
            </div>
        </div>
    )
}

export default Hero
