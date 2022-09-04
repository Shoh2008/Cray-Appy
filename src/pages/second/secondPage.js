import React from 'react';
import Benefit from '../../assets/benefit/benefit.png'
import { SecondBox } from './style';

const Second = () => {
    return (
        <SecondBox id='benefits'>
            <div className='title'>
                <h1> New crypto finance app </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet.
                    Nunc ut sem vitae risus tristique posuere.
                </p>
            </div>
            <div className='boxes'>
                <div className='box'>
                    <div className='img'>
                        <img src={Benefit} />
                    </div>
                    <h1>Benefit description</h1>
                    <p>Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                    <a href="#">Learn more ↠</a>
                </div>
                <div className='box'>
                    <div className='img'>
                        <img src={Benefit} />
                    </div>
                    <h1>Benefit description</h1>
                    <p>Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                    <a href="#">Learn more ↠</a>
                </div>
                <div className='box'>
                    <div className='img'>
                        <img src={Benefit} />
                    </div>
                    <h1>Benefit description</h1>
                    <p>Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                    <a href="#">Learn more ↠</a>
                </div>
            </div>
        </SecondBox>
    );
}

export default Second;