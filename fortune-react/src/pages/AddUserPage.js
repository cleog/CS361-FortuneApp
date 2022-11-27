import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AddUserPage() {
    const [userName, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const navigate = useNavigate();

    const addUser = async () => {
        const newUser = { userName, password };
        const response = await fetch('/user', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the new user");
        } else {
            const msg = await response.json();
            alert(`Failed to add new user, ${msg.Error}`);
        }
        navigate("/");
    };
    // confirmation to fulfill Cognitive Style Heuristic number 8:
    if (!confirmed)
    {
        return (
        <div>
            <p>Are you sure you want to create an account?</p>
            <button onClick={() => setConfirmed(true)}>YES</button>
            <button onClick={() => navigate("/")}>NO (cancel)</button>
        </div>
        )
    }

    return (
        <div>
            <h3>Write Your User Name Here:</h3>
            <div>
                <input value={userName} onChange={e => setUser(e.target.value)} />
            </div>
            <h3>Write Your Password Here:</h3>
            <div>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={addUser}>Save</button>
        </div>
    )
}

export default AddUserPage;