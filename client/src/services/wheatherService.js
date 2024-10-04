const apiKey = "2eb3e03a21484e1a9e5194321240708";


export const getWheather = async () => {
    const data = await getTown();
    const baseUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${data.city}&aqi=no`;
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