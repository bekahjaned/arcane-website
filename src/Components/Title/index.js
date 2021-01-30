import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './title.css'

function Title({ text }) {
    // might not need this useEffect, could probably just use AOS.init in componentDidMount 
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <div>
            <h1 data-aos="fade-down" className="title">{text}</h1>
            <hr data-aos="line-grows" className="blue" />
            <hr data-aos="line-grows" data-aos-delay="100" className="yellow" />
            <hr data-aos="line-grows" data-aos-delay="200" className="red" />
        </div>
    )
}

export default Title
