import React from 'react';
import { Link } from 'react-router-dom';

function HomePageAdvanced() {
    return (
        <div>
            <div className='receive'>
                <h2>Receive A Fortune</h2>
                <h3>Choose one category below:</h3>
                <Link to="/get/general" className='link'>General</Link>
                <br/>
                <Link to="/get/humor-included" className='link'>Humor-Included</Link>
                <br/>
                <Link to="/get/child-friendly" className='link'>Child-Friendly</Link>
                <br/>
                &nbsp;
            </div>
            <br />
            <div className='add'>
                <h2>Add Your Own Fortune</h2>
                <h3>Choose one category below:</h3>
                <Link to="/add/general" className='link'>General</Link>
                <br/>
                <Link to="/add/humor-included" className='link'>Humor-Included</Link>
                <br/>
                <Link to="/add/child-friendly" className='link'>Child-Friendly</Link>
                <br/>
                &nbsp;
            </div>
        </div>

    )
}

export default HomePageAdvanced;