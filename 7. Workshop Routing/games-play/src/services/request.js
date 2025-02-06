async function request(method, url) {
    const request = await fetch(url, {
        method,
    });

    try {
        const result = await request.json();
        return result;
    } catch {
        return {};
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'Patch');
export const del = request.bind(null, 'DELETE');