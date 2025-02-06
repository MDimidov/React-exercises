import { Games } from "./Game/Game";

export function Catalogue({
    games
}) {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            < div className="allGames" >
                {games.map(g => (<Games key={g._id} {...g} />))}
            </div >

            {/* <!-- Display paragraph: If there is no games  --> */}
            {games.length > 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}