import { Link } from "react-router-dom";

export function CharacterListItem({ name, url }) {

    const id = url.split('/').filter( x => x).pop();
    return (
        <>
            <Link to={`/characters/${id}`}><h4>{name}</h4></Link>
        </>
    );
}