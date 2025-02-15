async function request(method, token, url, data) {

    const options = {};
    options.method = method;


    if (data) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        };
    }

    const request = await fetch(url, options);

    if (request.status === 204) {
        return {};
    }

    const result = await request.json();

    if (!request.ok) {
        throw result;
    }

    return result;
};



export function requestFactory(token) {
    return {
        get: request.bind(null, 'GET', token),
        post: request.bind(null, 'POST', token),
        put: request.bind(null, 'PUT', token),
        patch: request.bind(null, 'Patch', token),
        delete: request.bind(null, 'DELETE', token),
    };
}