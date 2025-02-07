import * as request from "./request";

const baseUrl = 'http://localhost:3030/jsonstore/games/';

export async function getAllGames() {
    const result = await request.get(baseUrl);
    const games = Object.values(result);

    return games;
}

export async function createGame(game) {
    const result = await request.post(baseUrl, game);
    return result;
}

export async function GetGameById(gameId) {
    const result = await request.get(baseUrl + gameId);
    return result;
}