import { useState, useEffect } from "react";

const Daytime = () => {
    const [daytimeData, setDaytimeData] = useState({});
    const [elementToBeShown, setElementToBeShown] = useState("No data");
   
    useEffect(() => {
        new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))
            .then((data) => {
                return fetch(`https://api.sunrise-sunset.org/json?lat=${data.coords.latitude}&lng=${data.coords.longitude}`)    
            })
            .then(res => res.json())
            // .then(data => {
            //     setDaytimeData(data)
            //     console.log(data);
            // })
            .then(data => {
                setDaytimeData(data)
                const begin = data.results.civil_twilight_begin
                const end = data.results.civil_twilight_end

                let now = new Date();
                let dawn = new Date(begin);
                let sunset = new Date(end);
        
                if (now < dawn) {
                    setElementToBeShown("beforeSunrise"); // before sunrise
                } else if (now.getHours() < 10) {
                    setElementToBeShown("forenoon"); // forenoon (after sunrise)
                } else if (now > sunset) {
                    setElementToBeShown("afterSunset"); // after sunset
                } else if (now.getHours() >= 16) {
                    setElementToBeShown("evening"); // evening (before sunset)
                } else {
                    setElementToBeShown("midday"); // midday, afternoon
                }
        
            })
    }, []);

    return (
        <div className="row">
            <div className="col-md mt-3">
                { daytimeData.results?.civil_twilight_begin } /
                { daytimeData.results?.civil_twilight_end } /
                { elementToBeShown }

            </div> 
        </div>
    );
};

export default Daytime;