import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { CharacterFilms } from "./CharacterFilms";
import { Navigation, NavItem } from "./Navigation";

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

            <Navigation>
                <NavItem to={`/characters/${characterId}/films`}>Films</NavItem>
                <NavItem to={`/characters/${characterId}/starships`}>Starships</NavItem>
                <NavItem to={`/characters/${characterId}/vehicles`}>Vehicles</NavItem>
            </Navigation>

            <Routes>
                <Route path='/films' element={<CharacterFilms />} />
                <Route path='/vehicles' element={<h5>Vehicles</h5>} />
                <Route path='/starships' element={<h5>Starships</h5>} />
            </Routes>
        </>
    );
}