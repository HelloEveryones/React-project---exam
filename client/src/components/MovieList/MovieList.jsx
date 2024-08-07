import { MovieCard } from "./MovieCard";
import styles from "./movieList.module.css";

export const MovieList = ({ movies }) => {
    console.log("Rendering MovieList with movies:", movies); 
    return (
        <div className={styles["movie-list"]}>
            <h1>All Movies</h1>
            <ul>
                {movies && movies.length > 0 ? (
                    movies.map(x => <MovieCard key={x._id} {...x} />)
                ) : (
                    <span>There is no added movies yet.</span>
                )}
            </ul>
        </div>
    );
};
