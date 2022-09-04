import React from 'react';
import I1 from '../../assets/icons/i1.png';
import I2 from '../../assets/icons/i2.png';
import I3 from '../../assets/icons/i3.png';
import I4 from '../../assets/icons/i4.png';
import I5 from '../../assets/icons/i5.png';
import F1 from '../../assets/faces/f1.png';
import F2 from '../../assets/faces/f2.png';
import F3 from '../../assets/faces/f3.png';
import F4 from '../../assets/faces/f4.png';
import { FifthBox } from './style';

const Fifth = () => {
    return (
        <FifthBox id='reviews'>
            <div className='block'>
                <div className='head'>
                    <p>the best crypto App</p>
                    <h1>Backed by the biggest names in the industry</h1>
                </div>
                <div className='logo'>
                    <img src={I1} />
                    <img src={I2} />
                    <img src={I3} />
                    <img src={I4} />
                    <img src={I5} />
                </div>
                <div className='data'>
                    <div className='box'>
                        <b>✮</b><b>✮</b><b>✮</b><b>✮</b><b>✮</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique. Duis cursus,
                            mi quis viverra ornare, eros dolor interdum nulla,
                            ut commodo diam libero vitae erat. Aenean faucibus nibh et
                            justo cursus id rutrum lorem imperdiet.
                            Nunc ut sem vitae risus tristique posuere.</p>
                        <div className='info'>
                            <img src={F1} />
                            <div className='text'>
                                <h2>Jason Renolds</h2>
                                <p>Verified Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <b>✮</b><b>✮</b><b>✮</b><b>✮</b><b>✮</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique. Duis cursus,
                            mi quis viverra ornare, eros dolor interdum nulla,
                            ut commodo diam libero vitae erat. Aenean faucibus nibh et
                            justo cursus id rutrum lorem imperdiet.
                            Nunc ut sem vitae risus tristique posuere.</p>
                        <div className='info'>
                            <img src={F2} />
                            <div className='text'>
                                <h2>Sarah Genning</h2>
                                <p>Verified Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <b>✮</b><b>✮</b><b>✮</b><b>✮</b><b>✮</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique. Duis cursus,
                            mi quis viverra ornare, eros dolor interdum nulla,
                            ut commodo diam libero vitae erat. Aenean faucibus nibh et
                            justo cursus id rutrum lorem imperdiet.
                            Nunc ut sem vitae risus tristique posuere.</p>
                        <div className='info'>
                            <img src={F3} />
                            <div className='text'>
                                <h2>Lori Basic</h2>
                                <p>Verified Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <b>✮</b><b>✮</b><b>✮</b><b>✮</b><b>✮</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique. Duis cursus,
                            mi quis viverra ornare, eros dolor interdum nulla,
                            ut commodo diam libero vitae erat. Aenean faucibus nibh et
                            justo cursus id rutrum lorem imperdiet.
                            Nunc ut sem vitae risus tristique posuere.</p>
                        <div className='info'>
                            <img src={F4} />
                            <div className='text'>
                                <h2>James Razz</h2>
                                <p>Verified Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FifthBox>
    );
}

export default Fifth;