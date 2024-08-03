import styles from './home.module.css';


export const Home = () =>{
    return (
        <div className={styles["home-page"]}>
            <h1>Welcome to Movie Mania. Enjoy your movie journey!!</h1>
            <h3>Add your favorite movies and comment it</h3>
        </div>
    );
}
