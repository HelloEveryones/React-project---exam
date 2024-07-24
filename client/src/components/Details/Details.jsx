import styles from "./details.module.css"

export default function Details(){
    return (
        <div className={styles["details"]}>
        <h3>Details</h3>
        <article>
            <h4>Star Wars</h4>
            <img src="./static/images/mbr-215x146.jpg" alt="star wars image"/>
            <h5>Steven Speelberg <span>2005</span></h5>
            <p>Fantasy</p>
            <p>Best Movie ever made....</p>
            <button>Edit</button>
            <button>Delete</button>
        </article>
        <div class="comments">
            <form>
                <textarea name="comment" id="comment" placeholder="Add your comment here..."></textarea>
                <input type="submit" value="Add comment"/>
            </form>
            <h4>Comments</h4>
            <div class="comment-list">
                <ul>
                    <li>
                        <h5>Iva</h5>
                        <p>I like this movie</p>
                    </li>
                    <li>
                        <h5>Iva</h5>
                        <p>I like this movie I like this movie I like this movie I like this movie</p>
                    </li>
                    <li>
                        <h5>Iva</h5>
                        <p>I like this movie</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}