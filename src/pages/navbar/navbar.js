import React, { useState } from 'react';
import { NavbarBox } from './style';
import logo from '../../assets/logo/logo.png'

const Navbar = () => {
    const [style, setStyle] = useState({ nav: '', cross: '0' });
    const openNavbar = () => {
        style.nav == '' ?
            setStyle((p)=>{
                return {...p, nav: '0%'}
            }) :
            setStyle((p)=>{
                return {...p, nav: ''}
            })

        style.cross == '0' ?
            setStyle((p)=>{
                return {...p, cross: '45deg'}
            }) :
            setStyle((p)=>{
                return {...p, cross: '0'}
            })
    }
    return (
        <NavbarBox style={{ left: style.nav }}>
            <div className='logo'>
                <a href="#">
                    <img src={logo} />
                </a>
            </div>
            <div className='links'>
                <a href="#benefits">Benefits</a>
                <a href="#features">Features</a>
                <a href="#reviews">Reviews</a>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
                <button>Buy CruyAppy</button>
            </div>
            <button className='navBtn' onClick={openNavbar}><h1 style={{ transform: `rotate(${style.cross})`, transition: '.5s' }}>+</h1></button>
        </NavbarBox>
    );
}

export default Navbar;