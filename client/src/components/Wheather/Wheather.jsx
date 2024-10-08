import { useState, useEffect } from "react";
import { getWheather } from "../../services/wheatherService"
import styles from "./Wheather.module.css";


export const Wheather = () => {
    const [wheather, setWheather] = useState(null);

    useEffect(() => {
        getWheather()
            .then(result => setWheather(result))
            .catch(error => console.log(error))
    }, []);

    return (
        <ul className={styles["wheather"]}>
            <img src={wheather ? wheather.current.condition.icon : ''} alt={wheather ? wheather.current.condition.text : ''}/>
            <li>{wheather ? wheather.current.condition.text : ''}</li>
            <li>{wheather ? wheather.location.name : ''}, {wheather ? wheather.location.country : ''}</li>
            <li>{wheather ? wheather.location.localtime.split(" ")[0] : ''}</li>
            <li>{wheather ? wheather.current.temp_c : ''} &#8451;</li>
            <p>It is a perfect time for a movie!</p>
        </ul>
    )
}