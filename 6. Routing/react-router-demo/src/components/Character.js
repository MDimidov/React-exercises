import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = 'https://swapi.dev/api/people/';

export function Character({ name, url }) {

    const { characterId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(baseUrl + characterId)
        .then(res => res.json())
        .then(setCharacter)
    })
    return (
        <>
            <h1>Id: {characterId}</h1>
            <h1>Name: {character.name}</h1>
        </>
    );
}