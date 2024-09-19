
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const getWheather = async () => {
    const data = await getTown();
    const baseUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${data.city}&aqi=no`;  // Променете на HTTPS
    const response = await fetch(baseUrl);
    if (response.ok) {
        return await response.json();
    }
    throw response;
}

const getTown = async () => {
    const response = await fetch('https://ipapi.co/json/');  
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    throw response;
}
