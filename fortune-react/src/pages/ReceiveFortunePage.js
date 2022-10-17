import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function ReceiveFortunePage() {
    const { category } = useParams()
    const [fortune, setFortune] = useState(undefined)

    const loadRandomFortune = async (category) => {
        const response = await fetch('/randomFortune/' + category);
        const randomFortune = await response.json();
        setFortune(randomFortune)
    }

    useEffect(() => { loadRandomFortune(category) }, [category])

    return (
        <div>
            <h2>Here is your fortune of category {category}:</h2>

            {fortune && (<div>
                <hr />
                {fortune.fortune}
                <hr />

                <div>
                    <br />
                    <button onClick={() => loadRandomFortune(category)}>Get Another Fortune</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default ReceiveFortunePage;