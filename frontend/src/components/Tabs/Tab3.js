import React, { useEffect, useRef, useState } from 'react';
import { amountscrolled } from '../../shared/Scroll/Scroll';

import Modal from '../../shared/components/Modal';
import Backdrop from '../../shared/components/Backdrop';

const Tab3 = (props) => {
    
    let pg = useRef(1);
    let col1 = useRef(null), col2 = useRef(null); // col3 = useRef(null);

    const [ModalState, setModalState] = useState(false);

    const OpenModal = (event) => {
        setModalState(true);
        document.querySelectorAll('.g-b-next')[0].innerHTML = event.target.innerHTML;
        document.querySelectorAll('.g-b-next')[0].children[0].className = "picy";
        document.body.classList.add("stop-scroll");
    }

    const CloseModal = () => {
        setModalState(false);
        document.body.classList.remove("stop-scroll");
    }
    
    const LoadImage = (src) => {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
            img.alt = 'pic';
            img.className = 'pic';
            img.id = "11";
        }); 
    };

    const loadMore = () => {
        let per = amountscrolled();
        if(per >= 90) {
            // console.log("CALLED");
            window.removeEventListener('scroll', loadMore);
            sendRequest();
            setTimeout(() => {
                addTheListener();
            }, 1000);
        }
    }

    const addTheListener = () => {
        window.addEventListener('scroll', loadMore, false);
    }

    const sendRequest = async () => {
        const res = await (await fetch(process.env.REACT_APP_BACKEND_URL +`/${props.genre}/${pg.current++}`)).json();

        let all_pics = [];
        let count = 0;
        
        await Promise.all(res.results.map(async(pic) => {
            await LoadImage(pic.urls.small).then((img) => {
                // console.log(img);
                all_pics.push(img);
            })
            count++;
        }));

        let i = 0;

        for(i = 0; i < count; i++) {

            let h1 = col1.current.clientHeight;
            let h2 = col2.current.clientHeight;

            if(h1 <= h2) {
                let my_div = document.createElement('div');
                my_div.appendChild(all_pics[i]);

                my_div.className = 'card';

                my_div.onclick = OpenModal;
                col1.current.appendChild(my_div);
            }
            else {
                let my_div = document.createElement('div');
                
                my_div.appendChild(all_pics[i]);

                my_div.className = 'card';
                my_div.onclick = OpenModal;
                col2.current.appendChild(my_div);
            } 
        }
    }

    useEffect(() => {
        col1.current = document.getElementById('n1');
        col2.current = document.getElementById('n2');
        sendRequest();
        
        addTheListener();

        return () => window.removeEventListener('scroll', loadMore);

    });

    return <React.Fragment>
        {ModalState && <Backdrop onClick = {CloseModal}/> }
        {ModalState && <Modal className = "modal-vis">
        </Modal> }
        <div className = "body">
            <div id = "n1" className = "column-left"></div>
            <div id = "n2" className = "column-right"></div>
        </div>
    </React.Fragment>;
}

export default Tab3;