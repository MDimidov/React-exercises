async function request(method, url, data) {

    const obj = {};
    obj.method = method;


    if (data) {
        obj.headers = { 'Content-Type': 'application/json' };
        obj.body = JSON.stringify(data);
    }
    const request = await fetch(url, obj);

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