import React from 'react';
import { SixthBox } from './style';

const Sixth = () => {
    return (
        <SixthBox id='pricing'>
            <div className='head'>
                <b>Our pricing</b>
                <h1>Choose the plan that's right for your financial needs</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                <div className='box'>
                    <p>Billed monthly</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                    <div>
                        <b>Billed annually</b>
                        <p>Save 20%</p>
                    </div>
                </div>
            </div>
            <div className='boxes'>
                <div className='box' style={{ borderTop: '4px solid #159BE8' }}>
                    <h1>Essentail</h1>
                    <h2>$12/mo</h2>
                    <p>Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi quis viverra ornare, eros dolor interdum</p>
                    <button className='a'>Start your free trial</button>
                </div>
                <div className='box' style={{ borderTop: '4px solid #F95B74' }}>
                    <h1>Pro</h1>
                    <h2>$56/mo</h2>
                    <p>Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi quis viverra ornare, eros dolor interdum</p>
                    <button className='b'>Start your free trial</button>
                </div>
                <div className='box' style={{ borderTop: '4px solid #7C44E2' }}>
                    <h1>Premium</h1>
                    <h2>$79/mo</h2>
                    <p>Lorem ipsum dolor sit amet suspendisse variusDuis cursus, mi quis viverra.</p>
                    <button className='c'>Start your free trial</button>
                </div>
            </div>
            <div className='block'>
                <div className='A'></div>
                <div className='B'></div>
                <h1>Buy CrypAppy today</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem.</p>
                <div>
                    <button>Buy CrypAppy</button>
                    <button>View in designer</button>
                </div>
            </div>
        </SixthBox>
    );
}

export default Sixth;