import { useState, useEffect } from "react";

const Daytime = () => {
    const [textToBeShown, setTextToBeShown] = useState("Loading data");
   
    useEffect(() => {
        const showText = async () => {
            const data = await(new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)));
            const res = await(fetch(`https://api.sunrise-sunset.org/json?lat=${data.coords.latitude}&lng=${data.coords.longitude}`));
            const data2 = await(res.json());
            const dawn = new Date(data2.results.civil_twilight_begin);
            const sunset = new Date(data2.results.civil_twilight_end);
            const now = new Date();
        
            if (now < dawn) {
                setTextToBeShown("⚠️ You should wait few hours after getting up before making the first cup of coffee."); // before sunrise
            } else if (now.getHours() < 10) {
                setTextToBeShown("☕ Just now it's an ideal time to have a coffee."); // forenoon (after sunrise)
            } else if (now > sunset) {
                setTextToBeShown("❌ It's already night, you definitely shouldn't be drinking coffee now."); // after sunset
            } else if (now.getHours() >= 16) {
                setTextToBeShown("⚠️ Beware, you shouldn't drink coffee at least 6 hours before sleep."); // evening (before sunset)
            } else {
                setTextToBeShown("☕ You're fine having a coffee now."); // midday, afternoon
            }
        }

        showText();
    }, []);

    return (
        <div className="mt-3">
            <div className="bg-info-subtle p-3 rounded">
                { textToBeShown }
            </div> 
        </div>
    );
};

export default Daytime;