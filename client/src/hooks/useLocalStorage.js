import { useState, useEffect } from "react";

const getStorageData = (keyName, defaultValue) => {
    const savedItem = localStorage.getItem(keyName);
    return savedItem ? JSON.parse(savedItem) : defaultValue;
}

export const useLocalStorage = (keyName, initialValue) => {
    const [value, setValue] = useState(() => getStorageData(keyName, initialValue));

    useEffect(() => {
        if (value) {
            localStorage.setItem(keyName, JSON.stringify(value));
        } else {
            localStorage.removeItem(keyName); 
        }
    }, [keyName, value]);

    return [value, setValue];
};
