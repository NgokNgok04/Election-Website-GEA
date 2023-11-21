import React from 'react';
import './Header.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from '../assets/logo-netflix.png'
export default function Header() {
    return (
        <div className='Header'>
            <a href="">
                <Link to="/">
                    <img src={logo} alt='' className='logo'></img>
                </Link>
            </a>
        </div>
    )
}