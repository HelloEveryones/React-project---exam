import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

export default function Navigation() {
    return (
        <header>
            <div className={styles["nav"]}>
                <div className={styles["logo"]}>
                    <Link to={"/"}>Movie <span>Mania</span></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/add-movie">Add Movie</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
