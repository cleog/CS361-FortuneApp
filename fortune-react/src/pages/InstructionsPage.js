import React from 'react';
import { Link } from 'react-router-dom';

function InstructionsPage() {
    return (
        <div className='instructions'>
            <h3>Instructions</h3>
            <div >
                Welcome to Fortune Generator!
                <br />
                <br />
                {/* optimization for tinkerers */}
                <Link className='pageLinks' to="/advanced" >Quick Start for Tinkerers</Link>
                <br />
                <br />
                The main function is to allow you to receive random fortunes.
                <br />
                To learn more about our new Create Account, Fortune History and Delete Fortune features, click on "What's New!"
                <br />
                <br />
                Basic Path (no create account required):
                <br />
                <br />
                1) Select <Link className='pageLinks' to="/" >Begin</Link>
                <br />
                2) Click "Get General Fortune" OR select a category link below for a specific category
                <br />
                3) Click "Get Another Fortune" OR go back to Home by clicking the link
            </div>
        </div>
    )
}

export default InstructionsPage;