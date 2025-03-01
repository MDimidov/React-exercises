import { requestFactory } from "./request";

const baseUrl = 'http://localhost:3030/data/games/';

export function gameServiceFactory(token) {

    const request = requestFactory(token);

    async function getAllGames() {
        const result = await request.get(baseUrl);
        const games = Object.values(result);

        return games;
    }

    async function createGame(game) {
        const result = await request.post(baseUrl, game);
        return result;
    }

    async function editGame(gameId, game) {
        const result = await request.put(baseUrl + gameId, game);
        return result;
    }

    async function getGameById(gameId) {
        const result = await request.get(baseUrl + gameId);
        return result;
    }

    async function deleteGame(gameId) {
        const result = await request.delete(baseUrl + gameId);
        return result;
    }

    return {
        getAllGames,
        createGame,
        editGame,
        getGameById,
        deleteGame,
    };
}