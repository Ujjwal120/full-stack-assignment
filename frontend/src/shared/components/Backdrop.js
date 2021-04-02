import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = (props) => {

    useEffect(() => {
        document.querySelector(".blurry").classList.add("bring-down");
    });

    return ReactDOM.createPortal(
        <div className = "blurry" onClick = {props.onClick}></div>,
        document.getElementById('Backdrop')
    );
}

export default Backdrop;