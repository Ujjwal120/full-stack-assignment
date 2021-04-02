import React from 'react'

import './Card.css'

const Card = (props) => {
    return <div className = {`lagao-ise ${props.className}`}>
        <div className = "g-b" style = {props.style}>
            <div className = "g-b-next" style = {props.style}>
                {props.children}
            </div>
        </div>
    </div>
}

export default Card;