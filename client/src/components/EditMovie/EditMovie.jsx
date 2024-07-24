import styles from "./editMovie.module.css"

export default function Edit() {
    return (
        <div className={styles["edit-movie"]}>
            <h3>Edit Movie</h3>
            <form>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" />
                </div>
                <div className="field">
                    <label>Director</label>
                    <input type="text" name="director" />
                </div>
                <div className="field">
                    <label>Year</label>
                    <input type="text" name="year" />
                </div>
                <div className="field">
                    <label>Genre</label>
                    <input type="text" name="genre" />
                </div>
                <div className="field">
                    <label>Image</label>
                    <input type="text" name="imageUrl" />
                </div>
                <div className="field">
                    <label>Plot</label>
                    <textarea name="plot" id="plot" cols="21" rows="10"></textarea>
                </div>
                <div className="button">
                    <input type="submit" value="Edit" />
                </div>
            </form>
        </div>
    );
}
