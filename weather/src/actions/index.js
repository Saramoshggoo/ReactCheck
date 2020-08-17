import axios from 'axios'
const API_KEY="fb12e28126d00eed083c1899f9a735b8"
const root_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const  FETCH_WEATHER="FETCH_WEATHER"
export function fetchWeather(city){
    const url=`${root_URL}&q=${city},us`;
     const request= axios.get (url)
     console.log(request)

    return ({
        type:FETCH_WEATHER,
        payload:request}
    )
}