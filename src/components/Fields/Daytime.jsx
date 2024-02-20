import { useState, useEffect } from "react";

const Daytime = () => {
    const [daytimeData, setDaytimeData] = useState({});

   
    useEffect(() => {
        new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))
            .then((data) => {
                return fetch(`https://api.sunrise-sunset.org/json?lat=${data.coords.latitude}&lng=${data.coords.longitude}`)    
            })
            .then(res => res.json())
            .then(data => {
                setDaytimeData(data)
                console.log(data);
            })
    }, []);


    return (
        <div className="row">
            <div className="col-md mt-3">
                { daytimeData.results?.sunrise }/
                { daytimeData.results?.sunset }
            </div> 
        </div>
    );
};

export default Daytime;