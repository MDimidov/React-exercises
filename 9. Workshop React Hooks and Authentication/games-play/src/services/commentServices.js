import { requestFactory } from './request';

const baseUrl = 'http://localhost:3030/data/comments/';

export function commentFactory(token) {

    const request = requestFactory(token);

    async function getCommentsByGameId(gameId) {
        const searchQuery = encodeURIComponent(`gameId="${gameId}"`);
        const relationQuery = encodeURIComponent(`author=_ownerId:users`);
        const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
        
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