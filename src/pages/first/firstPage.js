import React from 'react';
import AppImg from '../../assets/btns/app.png'
import GoogleImg from '../../assets/btns/google.png'
import PhoneImg1 from '../../assets/phone/p1.png'
import { FirstBox } from './style';

const First = () => {
    return (
        <FirstBox>
            <div className='text'>
                <h1> The crypto portfolio app that makes you smile. Every day. </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
                <div className='btns'>
                    <button>
                        <img src={AppImg} />
                    </button>
                    <button>
                        <img src={GoogleImg} />
                    </button>
                </div>
            </div>
            <div className='img'>
                <img src={PhoneImg1} />
            </div>
        </FirstBox>
    );
}

export default First;