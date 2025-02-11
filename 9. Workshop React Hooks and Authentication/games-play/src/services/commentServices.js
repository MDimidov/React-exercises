import { requestFactory } from './request';

const baseUrl = 'http://localhost:3030/data/comments/';

export function commentFactory(token) {

    const request = requestFactory(token);

    async function getCommentsByGameId(gameId) {
        const result = await request.get(`${baseUrl}?where=gameId%3D%22${gameId}%22`);

        return result;
    }

    async function createComment(comment) {
        const result = await request.post(baseUrl, comment);
        return result;
    }

    return {
        getCommentsByGameId,
        createComment,
    }
}