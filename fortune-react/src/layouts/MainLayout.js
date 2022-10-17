import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MainLayout() {
    return (
        <div>
            <header className="App-header">
                <Link to="/">Home</Link>
                <h1>Fortune Cookie App</h1>
                <img src='/happyFortuneCookie-612x612.jpg' className="App-logo" alt="logo" />
            </header>

            <Outlet />
        </div>
    )
}

export default MainLayout;