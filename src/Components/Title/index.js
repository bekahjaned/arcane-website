import React from 'react'
import './title.css'

function Title({ text }) {
    return (
        <div>
            <h1 className="title">{text}</h1>
            <hr className="blue" />
            <hr className="yellow" />
            <hr className="red" />
        </div>
    )
}

export default Title
