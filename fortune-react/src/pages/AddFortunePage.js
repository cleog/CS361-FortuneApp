import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function AddFortunePage() {
    const { category } = useParams()
    const [fortune, setFortune] = useState('');
    const navigate = useNavigate();

    const addFortune = async () => {
        const newFortune = { category, fortune };
        const response = await fetch('/fortunes', {
            method: 'POST',
            body: JSON.stringify(newFortune),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the fortune");
        } else {
            alert(`Failed to add fortune, status code = ${response.status}`);
        }
        navigate("/");
    };

    return (
        <div>
            <h3>Write Your Fortune Here:</h3>
            <div>
                <textarea value={fortune} onChange={e => setFortune(e.target.value)} />
            </div>
            <button onClick={addFortune}>Save</button>
        </div>
    )
}

export default AddFortunePage;