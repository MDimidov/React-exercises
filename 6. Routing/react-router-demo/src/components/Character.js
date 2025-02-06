import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const baseUrl = 'https://swapi.dev/api/people/';

export function Character({ name, url }) {

    const { characterId } = useParams();
    const navigate = useNavigate()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(baseUrl + characterId)
        .then(res => res.json())
        .then(setCharacter);
    }, [characterId]);

    function onBackBtnClick() {
        navigate('/characters');
    }
    return (
        <>
            <h1>Id: {characterId}</h1>
            <h1>Name: {character.name}</h1>
            <button onClick={onBackBtnClick}>Back to character list</button>
        </>
    );
}