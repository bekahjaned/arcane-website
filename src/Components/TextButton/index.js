import React from 'react';
import './text-button.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function TextButton() {
    return (
        <div className="text-button">
            <p className="cta">Shop</p>
            <FontAwesomeIcon icon={faArrowRight}/>
        </div>
    )
}

export default TextButton

