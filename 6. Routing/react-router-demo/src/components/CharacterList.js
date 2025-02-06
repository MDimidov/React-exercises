import { useEffect, useState } from 'react';

const baseUrl = 'https://swapi.dev/api/people/';

export function CharacterList() {

    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setCharacterList(data.results);
            })
            .catch(err => console.error('err: ' + err));
    }, []);

    return (
        <>
            <h1>Star Wars Characters List</h1>
            <ul>
                {characterList.map(c => <div>{c.name}</div>)}
            </ul>
        </>
    );
}