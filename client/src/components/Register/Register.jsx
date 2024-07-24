import styles from "./register.module.css"

export default function Register() {
    return (
        <div className={styles["register"]}>
            <h3>Register</h3>
            <form>
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="username" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>
                <div className="field">
                    <label>Repeat Password</label>
                    <input type="password" name="repeatPassword" />
                </div>
                <div className="button">
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
}
