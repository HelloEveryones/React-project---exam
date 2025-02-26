import { useEffect, useState, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import './App.css';
import { AddMovie } from "./components/AddMovie/AddMovie";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from "./components/Login/Login";
import { MovieList } from "./components/MovieList/MovieList";
import { Navigation } from './components/Navigation/Navigation';
import { Register } from "./components/Register/Register";
import { Error } from "./components/ErrorPage/Error";

import services, { BASE_URL } from "./services/movieService";
import { createFormValidator, registerFormValidator, editFormValidator } from "./utils/formValidator";
import * as userService from "./services/userService";
import { Context } from "./context/useContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
    const [movies, setMovies] = useState([]);
    const [formError, setFormError] = useState("");
    const [user, setUser] = useLocalStorage("auth", null);
    const navigate = useNavigate();
    useContext(Context);

    useEffect(() => {
        services.get(BASE_URL)
            .then(response => Object.values(response))
            .then(result => setMovies(result))
            .catch(err => console.log(err.message));
    }, [navigate]);

    const onCreateSubmit = async (e, data) => {
        e.preventDefault();
        setFormError("");

        const result = createFormValidator(data);

        if (typeof result === "string") {
            return setFormError(result);
        }

        try {
            const response = await services.post(BASE_URL, data, user.accessToken);
            setMovies(oldMovies => [response, ...oldMovies]);
            setFormError("");
            navigate("/movies");
        } catch (error) {
            console.log(error.message);
        }
    };

    const onDeleteClick = async (id) => {
        try {
            await services.delete(`${BASE_URL}/${id}`, null, user.accessToken);
            setMovies(oldMovies => oldMovies.filter(x => x._id !== id));
            navigate("/movies");
        } catch (error) {
            console.log(error.message);
        }
    };

    const onEditSubmit = async (e, movieId, data) => {
        e.preventDefault();
        setFormError("");

        const result = editFormValidator(data);

        if (typeof result === "string") {
            return setFormError(result);
        }

        try {
            const response = await services.put(`${BASE_URL}/${movieId}`, data, user.accessToken);
            setMovies(oldMovies => oldMovies.map(x => x._id === movieId ? response : x));
            setFormError("");
            navigate(`/movies/${movieId}`);
        } catch (error) {
            console.log(error.message);
            setFormError(error.message);
        }
    };

    const onRegister = async (e, userForm) => {
        e.preventDefault();
        setFormError("");

        const result = registerFormValidator(userForm);

        if (typeof result === "string") {
            return setFormError(result);
        }

        const { repeatPassword, ...userInfo } = userForm;

        try {
            await userService.register(userInfo);
            navigate("/login");
        } catch (error) {
            console.log(error.message);
            setFormError(error.message);
        }
    };

    const onLogin = async (e, userForm) => {
        e.preventDefault();
        setFormError("");

        try {
            const response = await userService.login(userForm);
            setUser(response);
            navigate("/");
        } catch (error) {
            console.log(error.message);
            setFormError(error.message);
        }
    };

    const onLogout = async () => {
      try {
          if (!user?.accessToken) {
              console.error("❌ Няма наличен access token за logout!");
              return;
          }
  
          await userService.logout(user.accessToken);
  
          
          setUser(null);
          localStorage.removeItem("auth");
  
          console.log("✅ Потребителят беше изключен успешно!");
          navigate("/");
      } catch (error) {
          console.error("❌ Грешка при logout:", error.message);
      }
  };
  

    const appContext = {
        token: user?.accessToken,
        email: user?.email,
        userId: user?._id,
        formError,
    };

    const isUser = user && user.accessToken ? true : false;

    return (
        <>
            <Context.Provider value={appContext}>
                <Navigation user={user} onLogout={onLogout} />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<MovieList movies={movies} />} />
                    <Route path="/register" element={!isUser ? <Register onRegister={onRegister} /> : <Error />} />
                    <Route path="/login" element={!isUser ? <Login onLogin={onLogin} /> : <Error />} />
                    <Route path="/add-movie" element={isUser ? <AddMovie onCreateSubmit={onCreateSubmit} /> : <Error />} />
                    <Route path="/movies/:movieId" element={<Details onDeleteClick={onDeleteClick} />} />
                    <Route path="/movies/:movieId/edit" element={isUser ? <Edit onEditSubmit={onEditSubmit} /> : <Error />} />
                    <Route path="/404" element={<Error />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Context.Provider>

            <Footer />
        </>
    );
}

export default App;
