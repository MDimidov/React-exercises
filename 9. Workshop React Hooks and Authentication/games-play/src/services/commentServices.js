import * as request from './request';

const baseUrl = 'http://localhost:3030/jsonstore/games/';

export async function getCommentsByGameId(gameId) {
    const result = await request.get(baseUrl + gameId + '/comments');

    return result;
}

export async function createComment(gameId, comment) {
    const result = await request.post(baseUrl + gameId + '/comments', comment);
    return result;
}