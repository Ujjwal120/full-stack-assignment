import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css'
import Card from './Card';


const Modal = (props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            document.querySelector(".shrink-it").classList.add("normal");
        }, 50);

        return () => clearTimeout(timer);
    },[])

    return ReactDOM.createPortal(<div className = {`${props.className}`}>
        <Card className = "shrink-it">
            {props.children}
        </Card>
    </div>, document.getElementById('Modal'));
}

export default Modal;