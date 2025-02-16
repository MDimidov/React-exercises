import { useGameContext } from "../../contexts/GameContext";
import LatestGames from "./LatestGames";

export function Home() {

    const { games } = useGameContext();

    let latestGames = [...games];
    latestGames = latestGames.sort((a, b) => (b._createdOn - a._createdOn)).splice(0, 3);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {/* <!-- Display div: with information about every game (if any) --> */}
                {latestGames.map(g =>
                    <LatestGames key={g._id} {...g} />
                )}

                {/* <!-- Display paragraph: If there is no games  --> */}
                {latestGames.length === 0 && <p className="no-articles">No games yet</p>}
            </div>
        </section>
    );
}