import { useEffect, useState } from "react";
import * as request from '../../services/gameServices';
import { useParams } from "react-router-dom";
import { Comments } from "./Comments/Comments";
import { AddComment } from "./Comments/AddComment";
import { useService } from "../../hooks/useService";

export function GameDetails() {
    const [game, setGame] = useState({});
    const { gameId } = useParams();
    const [comments, setComments] = useState([]);
    const gameService = useService(request.gameServiceFactory);

    useEffect(() => {
        gameService.getGameById(gameId)
            .then(res => setGame(res));
    }, [gameId]);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game?.imageUrl} />
                    <h1>{game?.title}</h1>
                    <span className="levels">MaxLevel: {game?.maxLevel}</span>
                    <p className="type">{game?.category}</p>
                </div>

                <p className="text">{game?.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <Comments gameId={gameId} comments={comments} setComments={setComments} />

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <AddComment gameId={gameId} comments={comments} setComments={setComments} />

        </section>
    );
}