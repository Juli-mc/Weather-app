import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from './Loading'


function App() {
  

  const [data, setData] = useState({})
  const [icon, setIcon] = useState()
  const [temp, setTemp] = useState(0);
  const [isCelcius, setIsCelcius] = useState(false);
 
  useEffect(() => {
    const success = pos => {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4a76b4b744b9b96ad775fb342a3a8675`)
        .then(res => {
          setData(res.data);
          // const toCelcius = Math.round(res.data.main?.temp - 273.15);
          // setTemp(toCelcius);
          // setCelciusTemp(res.data.main?.temp);
          setTemp(res.data.main?.temp)
          setIcon(res.data.weather?.[0].icon);
        });
    };
    navigator.geolocation.getCurrentPosition(success);
    console.log(data);
  }, []);

  const getData = () => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4a76b4b744b9b96ad775fb342a3a8675`)
      .then(res => setData(res.data))
  }
  console.log(data)

  const convertTemp = () => {
    if(isCelcius){
      setTemp(temp + 273.15)
      setIsCelcius(false)
    }else{
      setTemp(Math.round(temp - 273.15))
      setIsCelcius(true);
  }
}

console.log(isCelcius)
const [loading, setLoading] = useState(true);
useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
        setLoading(false);
    }, 5000);
}, [])

if(loading){
    return (
        <Loading></Loading>
    )
}
else{
return (
  <div className='Card'>
      <h1>Weather App</h1>
      <p className='City'>{data.name}, {data.sys?.country}</p>
      <h3 className='Temp'>{temp}{isCelcius ? "°C" : "K"}</h3>
      <p className='Descrip'>{data.weather?.[0].description}</p>
      <div className='Icon'>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" srcset="" />
      </div>
        
        <h3><i class="fa-solid fa-wind"></i> {data.wind?.speed} m/s</h3>
        <h3><i class="fa-solid fa-cloud"></i> {data.clouds?.all}% Cloudiness </h3>
        <h3><i class="fa-solid fa-house-flood-water"></i> {data.main?.pressure} Pressure</h3>
        <button className='Change' onClick={convertTemp}><i class="fa-solid fa-temperature-high"></i></button>
        
      </div>  
  );
  }
}


export default App
