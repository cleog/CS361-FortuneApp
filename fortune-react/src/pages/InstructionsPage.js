import React from 'react';
import { Link } from 'react-router-dom';

function InstructionsPage() {
    return (
        <div className='instructions'>
            <h3>Instructions</h3>
            <div >
                Welcome to Fortune Cookie App.
                <br />
                <br />
                <Link to="/advanced" className='link' >Quick Start for Tinkerers</Link>
                <br />
                <br />
                The main function is to allow you to receive random fortunes.
                <br />
                To learn more about our new Add Fortune feature, click on "What's New!"
                <br />
                <br />
                Basic Path:
                <br />
                <br />
                1) Select <Link to="/" className='link' >Begin</Link>
                <br />
                2) Click "Get General Fortune" OR select a category link below for a specific category
                <br />
                3) Click "Get Another Fortune" OR go back to Home by clicking the link
            </div>
        </div>
    )
}

export default InstructionsPage;