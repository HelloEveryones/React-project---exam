import styles from './home.module.css';


export default function Home() {
    return (
        <div className={styles["home-page"]}>
            <h1>Are you a movie maniac? Then welcome to Movie Mania. Enjoy your movie journey!!</h1>
            <h3>Add your favorite movies and comment it</h3>
        </div>
    );
}
