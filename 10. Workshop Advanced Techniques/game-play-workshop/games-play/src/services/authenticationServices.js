import { requestFactory } from './request';

const baseUrl = 'http://localhost:3030/users/';

export function authenticationFactory(token) {
    
    const request = requestFactory(token);
    
    async function login(loginData) {
        return await request.post(baseUrl + 'login', loginData);
    }
    
    async function register(regData) {
        return await request.post(baseUrl + 'register', regData);
    }
    
    async function logout(token) {
        return await request.get(baseUrl + 'logout');
    }

    return {
        login,
        register,
        logout,
    }
}