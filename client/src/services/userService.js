import services from "./movieService";

const BASE_URL = process.env.NODE_ENV === "development"
    ? "http://localhost:3030/users"
    : "https://react-project-exam.onrender.com/users";

export const login = (data) => services.post(`${BASE_URL}/login`, data);
export const register = (data) => services.post(`${BASE_URL}/register`, data);
export const logout = async (token) => {
    if (!token) {
        console.error("❌ Опит за logout без токен!");
        return;
    }

    try {
        await services.get(`${BASE_URL}/logout`, null, token);
        console.log("✅ Logout successful!");
    } catch (error) {
        console.error("❌ Logout failed:", error);
    }
};
