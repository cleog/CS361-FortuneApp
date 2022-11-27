// List fortunes created by currently logged-in user
import React, { useEffect, useState } from "react";
import loggedInUser from '../userid';

const SHOW_WRITTEN_FORTUNES_URL = '/fortunesByUserName/' + loggedInUser
const DELETE_MYFORTUNE_URL = '/fortune/'

function MyFortunesPage() {
    const [fortuneList, setFortuneList] = useState(undefined)

    const loadFortuneList = async () => {
        const response = await fetch(SHOW_WRITTEN_FORTUNES_URL);
        const fortuneList = await response.json();
        setFortuneList(fortuneList)
    }

    const deleteFortune = async (fortune) => {
        const response = await fetch(DELETE_MYFORTUNE_URL + fortune._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 204) {
            {
                loadFortuneList();
                alert("Successfully deleted fortune");
            }
        } else {
            alert(`Failed to delete fortune, status code = ${response.status}`);
        }
    }

    const deleteFortunes = async () => {
        const response = await fetch(SHOW_WRITTEN_FORTUNES_URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 204) {
            {
                loadFortuneList();
                alert("Successfully deleted all fortunes");
            }
        } else {
            alert(`Failed to delete all fortunes, status code = ${response.status}`);
        }
    }

    useEffect(() => { loadFortuneList() }, [])
    // new - need to add delete all button
    return (
        <div>
            <h3>Here are the fortunes you wrote:</h3>
            <button onClick={() => deleteFortunes()}>Delete All Fortunes</button>
            {(fortuneList && fortuneList.length === 0) && <div>None yet!</div>}
            {fortuneList && fortuneList.length > 0 && (
                <table id="writtenFortunes">
                    <thead>
                        <tr>
                            <th>Fortune</th>
                            <th>Category</th>
                            <th>Owner</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fortuneList.map(f => (
                            <tr key={f._id}>
                                <td className='eachFortune'>{f.fortune || "-"}</td>
                                <td>{f.category}</td>
                                <td>{f.ownerID}</td>
                                <td><button onClick={() => deleteFortune(f)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    )
}

export default MyFortunesPage;


