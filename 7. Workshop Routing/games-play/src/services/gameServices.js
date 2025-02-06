import * as request from "./request";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export async function getAllGames() {
    const result = await request.get(baseUrl);
    const games = Object.values(result);

    return games;
}