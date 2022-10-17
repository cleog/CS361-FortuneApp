import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='receive'>
            <div>
                <h2>Receive A Fortune</h2>
                <h3>Quick Option:</h3>
                <Link to="/get/general" className='link' >Get General Fortune</Link>
                <br />
                <h3>Or choose one category below:</h3>
                <Link to="/get/general" className='link'>General</Link>
                <br></br>
                <Link to="/get/humor-included" className='link'>Humor-Included</Link>
                <br></br>
                <Link to="/get/child-friendly" className='link'>Child-Friendly</Link>
            </div>
        </div>
    )
}

export default HomePage;