import styles from "./movieList.module.css"

export default function MovieList(){

    return (
        <div className={styles["movie-list"]}>
        <h1>All Movies</h1>
        <ul>
            <li>
                <h3>Star Wars</h3>
                <img src="./static/images/mbr-215x146.jpg" alt="star wars image"/>
                <h5>Steven Speelberg <span>2005</span></h5>
                <p>Fantasy</p>
                <button>Details</button>
            </li>
            <li>
                <h3>Star Wars</h3>
                <img src="./static/images/mbr-215x146.jpg" alt="star wars image"/>
                <h5>Steven Speelberg <span>2005</span></h5>
                <p>Fantasy</p>
                <button>Details</button>
            </li>
            <li>
                <h3>Star Wars</h3>
                <img src="./static/images/mbr-215x146.jpg" alt="star wars image"/>
                <h5>Steven Speelberg <span>2005</span></h5>
                <p>Fantasy</p>
                <button>Details</button>
            </li>
            <li>
                <h3>Star Wars</h3>
                <img src="./static/images/mbr-215x146.jpg" alt="star wars image"/>
                <h5>Steven Speelberg <span>2005</span></h5>
                <p>Fantasy</p>
                <button>Details</button>
            </li>
            <li>
                <h3>Star Wars</h3>
                <img src="./static/images/mbr-215x146.jpg" alt="star wars image"/>
                <h5>Steven Speelberg <span>2005</span></h5>
                <p>Fantasy</p>
                <button>Details</button>
            </li>

        </ul>
    </div>
    )
}