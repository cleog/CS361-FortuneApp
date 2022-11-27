import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import loggedInUser from '../userid';

const POST_HISTORY_URL = '/fortuneHistory'

const postFortuneHistoryToMicroservice2 = async (receivedFortune) => {
    console.log(" recording history for ", receivedFortune.fortune)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: loggedInUser, fortuneId: receivedFortune._id, fortuneText: receivedFortune.fortune, fortuneCategory: receivedFortune.category })
    };
    await fetch(POST_HISTORY_URL, requestOptions)
}


function ReceiveFortunePage() {
    const { category } = useParams()
    const [fortune, setFortune] = useState(undefined)

    const loadRandomFortune = async (category) => {
        console.log("loadRF")
        const response = await fetch('/randomFortune/' + category);
        const randomFortune = await response.json();
        setFortune(randomFortune)
        postFortuneHistoryToMicroservice2(randomFortune)
    }
 
    useEffect(() => { loadRandomFortune(category) }, [])

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