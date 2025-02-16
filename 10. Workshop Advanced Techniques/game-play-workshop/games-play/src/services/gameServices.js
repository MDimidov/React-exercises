import { requestFactory } from "./request";

const host = process.env.NODE_ENV === 'development' ? 
    'http://localhost:3030' :
    'http://localhost:3030'

const url = host + '/data/games/';

export function gameServiceFactory(token) {

    const request = requestFactory(token);

    async function getAllGames() {
        const result = await request.get(url);
        const games = Object.values(result);

        return games;
    }

    async function createGame(game) {
        const result = await request.post(url, game);
        return result;
    }

    async function editGame(gameId, game) {
        const result = await request.put(url + gameId, game);
        return result;
    }

    async function getGameById(gameId) {
        const result = await request.get(url + gameId);
        return result;
    }

    async function deleteGame(gameId) {
        const result = await request.delete(url + gameId);
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