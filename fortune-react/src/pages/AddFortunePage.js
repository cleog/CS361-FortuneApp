import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function AddFortunePage() {
    const { category } = useParams();
    const [fortune, setFortune] = useState('');
    const [confirmed, setConfirmed] = useState(false);
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
    // confirmation to fulfill Cognitive Style Heuristic number 8:
    if (!confirmed)
    {
        return (
        <div>
            <p>Are you sure? You will be adding a fortune for all users</p>
            <button onClick={() => setConfirmed(true)}>YES</button>
            <button onClick={() => navigate("/")}>NO (cancel)</button>
        </div>
        )
    }

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