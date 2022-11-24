import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const HARDCODED_USERID = 'Cleo9'
const POST_HISTORY_URL = '/fortuneHistory'

const postFortuneHistoryToMicroservice2 = async (receivedFortune) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: HARDCODED_USERID, fortuneId: receivedFortune._id, fortuneText: receivedFortune.fortune })
    };
    await fetch(POST_HISTORY_URL, requestOptions)
}


function ReceiveFortunePage() {
    const { category } = useParams()
    const [fortune, setFortune] = useState(undefined)

    const loadRandomFortune = async (category) => {
        const response = await fetch('/randomFortune/' + category);
        const randomFortune = await response.json();
        setFortune(randomFortune)
        postFortuneHistoryToMicroservice2(randomFortune)
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