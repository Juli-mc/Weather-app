import React, { useEffect } from 'react';
import axios from 'axios'

const WeatherData = () => {
    
    // const {data, getData, lat, lon} = dataHook(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)

    // useEffect(() => {
    //     const success = pos =>{
    //         const lat = pos.coords.latitude;
    //         const lon = pos.coords.longitude;
    //         axios.get(url)
    //         .then(res => console.log(res.data))
    // }
    // navigator.geolocation.getCurrentPosition(success, error, options);
    // })


        const [data, setData] = useState({})
        useEffect(() =>{
            const success = pos =>{
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
                .then(res => console.log(res.data))
        }
        navigator.geolocation.getCurrentPosition(success, error);
        }, [])
    
        const getData = () => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
            .then(res => setData(res.data))
        }
    
        console.log(data)
    
    return (
        <div>
            <h1>Weather App</h1>
            <h2>{lat}</h2>

            
        </div>
    );
};

export default WeatherData;