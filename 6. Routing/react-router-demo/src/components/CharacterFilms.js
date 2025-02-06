import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function CharacterFilms() {
    const characterId = useParams();
    const baseUrl = 'https://swapi.dev/api/';
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch(baseUrl + 'films')
            .then(res => res.json())
            .then(data => setFilms(data.results))
            .catch(err => console.error('err: ' + err));
    }, [characterId]);

    return (
        <>
            <h5>Films</h5>
            <ul>
                {films.map(f => {
                    const id = f.url.split('/').filter(x => x).pop();
                    return <li key={f.url}><Link to={`/films/${id}`}>{f.title}</Link></li>
                })}
            </ul>
        </>
    );
}