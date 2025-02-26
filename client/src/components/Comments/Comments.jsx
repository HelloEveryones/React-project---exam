import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/useContext";
import styles from "./comments.module.css";
import services from "../../services/movieService";
import { useParams } from "react-router-dom";


const BASE_URL = process.env.NODE_ENV === "development"
    ? "http://localhost:3030"
    : "https://react-project-exam.onrender.com";

export const Comments = () => {
    const { email, token } = useContext(Context);
    const [comment, setComment] = useState({ text: "" });
    const [comments, setComments] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        services.get(`${BASE_URL}/data/comments?where=movieId%3D%22${movieId}%22`)
            .then(response => {
                if (Array.isArray(response)) {
                    setComments(response);
                } else {
                    setComments([]);
                }
            })
            .catch(error => console.error("❌ Error loading comments:", error.message));
    }, [movieId]);

    const onTextChange = (e) => {
        setComment(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const onCommentSubmit = async (e) => {
        e.preventDefault();
        if (!comment.text.trim()) {
            return;
        }

        const newComment = { ...comment, movieId, author: email };

        try {
            const response = await services.post(`${BASE_URL}/data/comments`, newComment, token);
            setComments(oldComments => [...oldComments, response]);
            setComment({ text: "" });
        } catch (error) {
            console.error("❌ Error posting comment:", error.message);
        }
    };

    return (
        <>
            {token && (
                <div className={styles["comments"]}>
                    <form onSubmit={onCommentSubmit}>
                        <textarea
                            name="text"
                            id="comment"
                            placeholder="Add your comment here..."
                            value={comment.text}
                            onChange={onTextChange}
                        />
                        <input className={styles["button"]} type="submit" value="Add comment" />
                    </form>
                </div>
            )}

            <div className={styles["comment-list"]}>
                {comments.length > 0 ? (
                    <ul>
                        {comments.map(x => (
                            <li key={x._id}>
                                <h5>Author: {x.author}</h5>
                                <p>{x.text}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <span>No added comments.</span>
                )}
            </div>
        </>
    );
};
