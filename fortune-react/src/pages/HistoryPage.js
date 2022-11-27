import React, { useEffect, useState } from 'react';
import loggedInUser from '../userid';

const GET_HISTORY_URL = '/fortuneHistory/?userId=' + loggedInUser

function HistoryPage() {
    const [fortuneHistory, setFortuneHistory] = useState(undefined)

    const loadFortuneHistory = async () => {
        const response = await fetch(GET_HISTORY_URL);
        const fortuneHistory = await response.json();
        setFortuneHistory(fortuneHistory)
    }
    useEffect(() => { loadFortuneHistory() }, [])

    return (
        <div>
            <h2>Here is your fortune history :</h2>
            {(fortuneHistory && fortuneHistory.length === 0) && <span>None yet!</span>}
            {fortuneHistory && fortuneHistory.map(f => (<div key={f._id} id='historyFortune'>
                <hr />{f.fortuneText}<hr />
            </div>))}
        </div>
    )
}

export default HistoryPage;