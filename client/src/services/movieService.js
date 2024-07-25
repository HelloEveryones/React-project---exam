async function movieService(method, url, data) {
    let options = {
        method: method,
        headers: {}
    };
    
    if (method !== "GET") {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    let result;

    if (response.ok && response.status === 204) {
        return {};
    }

    if (!response.ok) {
        throw await response.json();
    }

    result = await response.json();
    return result;
}

const get = movieService.bind(null, "GET");
const post = movieService.bind(null, "POST");
const put = movieService.bind(null, "PUT");
const del = movieService.bind(null, "DELETE");

const services = {
    get,
    post,
    put,
    delete: del
};

export default services;
