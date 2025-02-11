import { useContext, useEffect, useState } from "react";
import * as request from '../../services/gameServices';
import { Link, useParams } from "react-router-dom";
import { Comments } from "./Comments/Comments";
import { AddComment } from "./Comments/AddComment";
import { useService } from "../../hooks/useService";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

export function GameDetails() {
    const { userId, onDeleteGame } = useContext(AuthenticationContext);
    const [game, setGame] = useState({});
    const { gameId } = useParams();
    const [comments, setComments] = useState([]);
    const gameService = useService(request.gameServiceFactory);
    const isOwner = userId === game._ownerId;

    useEffect(() => {
        gameService.getGameById(gameId)
            .then(res => setGame(res));
    }, [gameId]);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game?.imageUrl} alt={game?.title} />
                    <h1>{game?.title}</h1>
                    <span className="levels">MaxLevel: {game?.maxLevel}</span>
                    <p className="type">{game?.category}</p>
                </div>

                <p className="text">{game?.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <Comments gameId={gameId} comments={comments} setComments={setComments} />

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalogue/` + game._id + `/edit`} game={game} className="button">Edit</Link>
                        <button onClick={() => onDeleteGame(gameId)} className="button">Delete</button>
                    </div>
                )}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <AddComment gameId={gameId} comments={comments} setComments={setComments} />

        </section>
    );
}