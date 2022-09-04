import React from 'react';
import PhoneImg3 from '../../assets/phone/p3.png'
import PhoneImg4 from '../../assets/phone/p4.png'
import Benefit from '../../assets/benefit/benefit.png'
import { FourthBox } from './style';

const Fourth = () => {
    return (
        <FourthBox>
            <div className='block flex-wrap'>
                <h3>mobile friendly</h3>
                <h1>Manage your money from anywhere</h1>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare.</p>
                <div className='boxes'>
                    <div className='box'>
                        <div className='img'>
                            <img src={Benefit} />
                        </div>
                        <h1>Benefit description</h1>
                        <p>Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                    </div>
                    <div className='box'>
                        <div className='img'>
                            <img src={Benefit} />
                        </div>
                        <h1>Benefit description</h1>
                        <p>Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                    </div>
                </div>
                <button>Get CrypAppy</button>
            </div>
            <div className='block imgs'>
                <img src={PhoneImg3} />
                <img src={PhoneImg4} />
            </div>
        </FourthBox>
    );
}

export default Fourth;