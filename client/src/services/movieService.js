const BASE_URL = process.env.NODE_ENV === "development"
    ? "http://localhost:3030/data/movies"
    : "https://react-project-exam.onrender.com/data/movies";

async function movieService(method, url, data, token) {
    let options = {
        method,
        headers: {},
    };

    if (method !== "GET" && data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    if (token) {
        options.headers["X-Authorization"] = token;
    }

    try {
        const response = await fetch(url, options);

        if (response.ok) {
            if (response.status === 204) {
                return {}; 
            }
            return await response.json();
        }

        throw await response.json(); 
    } catch (error) {
        console.error("❌ Грешка при заявката:", error);
        throw error;
    }
}


const get = movieService.bind(null, "GET");
const post = movieService.bind(null, "POST");
const put = movieService.bind(null, "PUT");
const del = movieService.bind(null, "DELETE");


const services = {
    get,
    post,
    put,
    delete: del,
};

export { BASE_URL };
export default services;
