import services from "./movieService";
const baseUrl = process.env.NODE_ENV === "development" 
    ? "http://localhost:3030/data/movies"  
    : "https://react-project-exam.onrender.com/data/movies"; 



export const login = (data) => services.post(`${baseUrl}/login`,data);

export const register = (data) => services.post(`${baseUrl}/register`,data);

export const logout = (token) => services.get(`${baseUrl}/logout`,null, token )