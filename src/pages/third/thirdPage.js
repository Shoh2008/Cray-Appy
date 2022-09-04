import React from 'react';
import PhoneImg2 from '../../assets/phone/p2.png'
import { ThirdBox } from './style';

const Third = () => {
    return (
        <ThirdBox id='features'>
            <div className='design'></div>
            <div className='header'>
                <h1>A perfect landing page to help launch your app</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
            <div className='blocks'>
                <div className='block right'>
                    <div className='box'>
                        <div></div>
                        <h1>Feature description</h1>
                        <p>Suspendisse varius enim in eros elementum Suspendisse varius enim in eros elementum tristique.
                            Duis cursus. tristique. Duis cursus.</p>
                    </div>
                    <div className='box'>
                        <div></div>
                        <h1>Feature description</h1>
                        <p>Suspendisse varius enim in eros elementum Suspendisse varius enim in eros elementum tristique.
                            Duis cursus. tristique. Duis cursus.</p>
                    </div>
                    <div className='box'>
                        <div></div>
                        <h1>Feature description</h1>
                        <p>Suspendisse varius enim in eros elementum Suspendisse varius enim in eros elementum tristique.
                            Duis cursus. tristique. Duis cursus.</p>
                    </div>
                </div>
                <div className='block'>
                    <img src={PhoneImg2} />
                </div>
                <div className='block left'>
                    <div className='box'>
                        <div></div>
                        <h1>Feature description</h1>
                        <p>Suspendisse varius enim in eros elementum Suspendisse varius enim in eros elementum tristique.
                            Duis cursus. tristique. Duis cursus.</p>
                    </div>
                    <div className='box'>
                        <div></div>
                        <h1>Feature description</h1>
                        <p>Suspendisse varius enim in eros elementum Suspendisse varius enim in eros elementum tristique.
                            Duis cursus. tristique. Duis cursus.</p>
                    </div>
                    <div className='box'>
                        <div></div>
                        <h1>Feature description</h1>
                        <p>Suspendisse varius enim in eros elementum Suspendisse varius enim in eros elementum tristique.
                            Duis cursus. tristique. Duis cursus.</p>
                    </div>
                </div>
            </div>
        </ThirdBox>
    );
}

export default Third;