import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='receive'>
            <div>
                <h2>Receive A Fortune</h2>
                <h3>Quick Option:</h3>
                <Link to="/get/general" className='pageLinks' >Get General Fortune</Link>
                <br />
                <h3>Or choose one category below:</h3>
                <Link to="/get/general" className='pageLinks'>General</Link>
                <br/>
                <Link to="/get/humor-included" className='pageLinks'>Humor-Included</Link>
                <br/>
                <Link to="/get/child-friendly" className='pageLinks'>Child-Friendly</Link>
                <br/>
                &nbsp;
            </div>
        </div>
    )
}

export default HomePage;