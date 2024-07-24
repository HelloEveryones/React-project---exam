import styles from "./login.module.css"

export default function Login() {
    return (
        <div className={styles["login"]}>
            <h3>Login</h3>
            <form>
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="username" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>
                <div className="button">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
}