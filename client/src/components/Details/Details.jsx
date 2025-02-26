import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Comments } from "../Comments/Comments";
import { DeleteModal } from "./DeleteModal/DeleteModal";
import { Context } from "../../context/useContext";
import styles from "./details.module.css";
import services from "../../services/movieService";


const BASE_URL = process.env.NODE_ENV === "development"
    ? "http://localhost:3030"
    : "https://react-project-exam.onrender.com";

export const Details = ({ onDeleteClick }) => {
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [deleteModal, setDeleteModal] = useState(false);
    const [movie, setMovie] = useState(null);
    const { userId, formError } = useContext(Context);

    
    useEffect(() => {
        services.get(`${BASE_URL}/data/movies/${movieId}`)
            .then(response => {
                if (!response || response.message) {
                    throw new Error("Movie not found");
                }
                setMovie(response);
            })
            .catch(err => {
                console.log("❌ Грешка при зареждане на филма:", err.message);
                navigate("/404"); 
            });
    }, [movieId, navigate]);

    
    const onDeleteButton = () => {
        setDeleteModal(true);
    };

    const onCancelClick = () => {
        setDeleteModal(false);
    };

    
    if (!movie) {
        return <h3 className={styles["loading"]}>Loading...</h3>;
    }

    return (
        <>
            {deleteModal && <DeleteModal movie={movie} onDeleteClick={onDeleteClick} onCancelClick={onCancelClick} />}
            <div className={styles["details"]}>
                <h3 className={styles["title"]}>Details</h3>
                <article>
                    {formError &&
                        <div className={styles["error"]}>
                            <p>{formError}</p>
                        </div>
                    }
                    <h4>{movie.title}</h4>
                    <img src={movie.img} alt={movie.title} />
                    <h5>{movie.director}, {movie.year}</h5>
                    <p>{movie.genre}</p>
                    <p>{movie.description}</p>

                    {userId && userId === movie._ownerId && (
                        <div className={styles["buttons"]}>
                            <Link to={`/movies/${movie._id}/edit`} className={styles["edit-button"]}>
                                Edit
                            </Link>
                            <button onClick={onDeleteButton} className={styles["delete-button"]}>Delete</button>
                        </div>
                    )}
                </article>
                <Comments />
            </div>
        </>
    );
};
