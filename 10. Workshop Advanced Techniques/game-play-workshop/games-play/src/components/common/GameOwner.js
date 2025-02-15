import { Navigate, Outlet, useParams } from "react-router-dom";
import { useGameContext } from "../../contexts/GameContext";
import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

export function GameOwner({ children }) {
    const { getGame } = useGameContext();
    const { userId } = useAuthenticationContext();
    const { gameId } = useParams();

    const currentGame = getGame(gameId);

    if (currentGame && currentGame._ownerId !== userId) {
        return <Navigate to={`/catalogue/${gameId}`} />;
    }

    return children ? children : Outlet;
}