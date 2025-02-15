import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gameServiceFactory } from "../services/gameServices";

export const GameContext = createContext();

export function GameProvider({ children }) {

    const [games, setGames] = useState([]);
    const navigate = useNavigate();
    const gameService = gameServiceFactory(); //auth.accessToken

    useEffect(() => {
        gameService.getAllGames()
            .then(setGames);
    }, []);


    async function onSubmitHandler(game) {
        const newGame = await gameService.createGame(game);
        setGames(state => [...state, newGame]);
        navigate('/catalogue');
    };

    async function onSubmitEdit(gameId, game) {
        const editGame = await gameService.editGame(gameId, game);
        setGames(state => state.map(s => s._id === editGame._id ? editGame : s));
        navigate(`/catalogue/${gameId}`);
    }

    async function onDeleteGame(gameId) {

        const isDeleteConfirm = window.confirm('Are you sure you want to delete this game');
        if (isDeleteConfirm) {

            await gameService.deleteGame(gameId);
            setGames(state => state.filter(s => s._id !== gameId));
            
            navigate(`/catalogue/`);
        }
    }

    function getGame(gameId) {
        return games.find(g => g._id === gameId);
    }

    const contextValues = {
        games,
        onSubmitHandler,
        onSubmitEdit,
        onDeleteGame,
        getGame,
    }
    return (
        <GameContext.Provider value={contextValues}>
            {children}
        </GameContext.Provider>
    )

}

export function useGameContext() {
    const context = useContext(GameContext);

    return context;
}