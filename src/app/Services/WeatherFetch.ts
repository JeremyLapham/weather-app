


export const WeatherData = async (cityName: any) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_PUBLIC_KEY}&units=imperial`);
    const data = await response.json();
    return data;
}


export const CityData = async (city: any) => {
    const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${city}&limit=3&bias=countrycode:none&format=json&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
    const data = await response.json();
    return data.results;
}