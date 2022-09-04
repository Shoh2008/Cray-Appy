import React from 'react';
import logo from '../../assets/logo/logo.png'
import F from '../../assets/contact/f.png'
import T from '../../assets/contact/t.png'
import I from '../../assets/contact/i.png'
import { SevenBox } from './style';

const Seven = () => {
    return (
        <SevenBox id='contact'>
            <div className='block'>
                <img src={logo} />
                <h1>Subscribe to our newsletter</h1>
                <div>
                    <a href="#">
                        <img src={F} />
                    </a>
                    <a href="#">
                        <img src={T} />
                    </a>
                    <a href="#">
                        <img src={I} />
                    </a>
                </div>
                <h3>Enter your email...</h3>
                <input type="text" /><br />
                <button>Subscribe</button>
                <p>
                    Crafted by <a href="#">Marion & Co.</a>|
                    Powered by <a href="#">Webflow</a>|
                    <a href="#">More templates</a>|
                    <a href="#">License</a>|
                    <a href="#">Style Guide</a>
                </p>
            </div>
        </SevenBox>
    );
}

export default Seven;