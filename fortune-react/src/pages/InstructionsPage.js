import React from 'react';
import { Link } from 'react-router-dom';

function InstructionsPage() {
    return (
        <div>
            <h3>Instructions</h3>
            <p className='instructions'>
                Welcome to Fortune Cookie App.
                <br></br>
                <br></br>
                <Link to="/advanced" className='link' >Quick Start for Tinkerers</Link>
                <br></br>
                <br></br>
                Our main function is to allow you to receive random fortunes.
                <br></br>
                To learn more about our new Add Fortune feature, click on "What's New"
                <br></br>
                <br></br>
                Basic Path:
                <br></br>
                1) Select <Link to="/" className='link' >Begin</Link>
                <br></br>
                2) Click "Get General Fortune" OR select a category link below for a specific category
                <br></br>
                3) Click "Get Another Fortune" OR go back to Home by clicking the link
            </p>
        </div>
    )
}

export default InstructionsPage;