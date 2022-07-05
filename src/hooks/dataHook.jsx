import React, { useEffect, useState } from 'react';
import axios from 'axios'

const dataHook = (url) => {
    const [data, setData] = useState({})
    useEffect(() =>{
        const success = pos =>{
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            axios.get(url)
            .then(res => console.log(res.data))
    }
    navigator.geolocation.getCurrentPosition(success, error);
    }, [])

    const getData = () => {
        axios.get(url)
        .then(res => setData(res.data))
    }

    console.log(data)

    return {data, getData, url}
};

export default dataHook;