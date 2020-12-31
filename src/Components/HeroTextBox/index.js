import React from 'react'
import './hero-textbox.css'

import HeroTitle from '../HeroTitle/'
import HeroSubtitle from '../HeroSubtitle/'
import TextButton from '../TextButton/'

function HeroTextBox() {
    return (
        <div className="hero-textbox">
            <HeroTitle /> 
            <HeroSubtitle />
            <TextButton />
        </div>
    )
}

export default HeroTextBox
