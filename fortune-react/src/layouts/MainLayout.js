import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MainLayout() {
    return (
        <div>
            <header className="App-header">
                <span>
                    <small>
                    <Link to="/">Easy Home</Link>
                    &nbsp;&nbsp;
                    <Link to="/advanced">Advanced Home</Link>
                    </small>
                </span>
                <h1>Fortune Cookie App</h1>
                <img src='/happyFortuneCookie-612x612.jpg' className="App-logo" alt="logo" />
            </header>

            <Outlet />
        </div>
    )
}

export default MainLayout;