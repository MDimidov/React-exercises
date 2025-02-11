import { requestFactory } from './request';

const baseUrl = 'http://localhost:3030/data/';

export function commentFactory(token) {

    const request = requestFactory(token);

    async function getCommentsByGameId(gameId) {
        const result = await request.get(baseUrl + gameId + '/comments');

        return result;
    }

    async function createComment(gameId, comment) {
        const result = await request.post(baseUrl + gameId + '/comments', comment);
        return result;
    }

    return {
        getCommentsByGameId,
        createComment,
    }
}