import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MainLayout() {
    return (
        <div>
            <h1> Fortune Generator </h1>
            {/* <img src='/happyFortuneCookie-612x612.jpg' className="App-logo" alt="logo" /> */}
            <header className="App-header">
                <span id='navbar'>
                    <ul id='wholeNavbar'>
                        <li><Link className='links' to="/">Easy Home</Link></li>
                        <li><Link className='links' to="/advanced">Advanced Home</Link></li>
                        <li><Link className='links' to="/whatsnew">What's New!</Link></li>
                        <li><Link className='links' to="/Instructions">Instructions</Link></li>
                        <li><Link className='links' to="/history">History</Link></li>
                        <li><Link className='links' to="/mywrittenfortunes">My Fortunes</Link></li>
                        <li><Link className='links' to="/user">Create Account</Link></li>
                    </ul>
                </span>
                <img src='/happyFortuneCookie-612x612.jpg' className="App-logo" alt="logo" />
                {/* <h1> Fortune Cookie Generator </h1> */}
            </header>

            <Outlet />
        </div>
    )
}

export default MainLayout;