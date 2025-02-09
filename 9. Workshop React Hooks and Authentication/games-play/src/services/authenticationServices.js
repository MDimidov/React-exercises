import * as request from './request';

const baseUrl = 'http://localhost:3030/users/';

export async function login(loginData) {
    return await request.post(baseUrl + 'login', loginData);
}

export async function register(regData) {
    return await request.post(baseUrl + 'register', regData);
}