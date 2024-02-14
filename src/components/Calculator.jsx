import { useState } from "react";

import CoffeeBeans from "./Fields/CoffeeBeans";
import Water from "./Fields/Water";
import Ratio from "./Fields/Ratio";
import CoffeeYield from "./Fields/CoffeeYield";

const Calculator = () => {
    const [coffeeBeans, setCoffeeBeans] = useState(8);
    const [water, setWater] = useState(128);
    const [coffeeYield, setCoffeeYield] = useState(115.2);
    const [ratio, setRatio] = useState(16);

    const calculateCoffeeBeans = value => {
        if (value >= 5 && value <= 100) {
            setCoffeeBeans(value);
            console.log("calculateCoffeeBeans", coffeeBeans);
            setWater((value * ratio).toFixed(2));
            setCoffeeYield(Math.floor(water * .9));
        }
    };

    const calculateWater = value => {
        if (value >= 10 && value <= 2500) {
            setWater(value);
            console.log("calculateWater", water);
            setCoffeeYield((water * .9).toFixed(2));
            setCoffeeBeans(Math.floor(water / ratio));
        }
    };

    const calculateRatio = value => {
        if (value >= .5 && value <= 50) {
            setRatio(value);
            console.log("calculateRatio", ratio);
            setWater((value * ratio).toFixed(2));
            setCoffeeYield(Math.floor(water * .9));
        }
    };

    const calculateCoffeeYield = value => {
        if (value >= 10 && value <= 2500) {
            setCoffeeYield(value);
            console.log("calculateCoffeeYield", coffeeYield);
            setWater((coffeeYield / .9).toFixed(2));
            setCoffeeBeans(Math.floor(water / ratio));
        }
    };

    return (
        <div className="inputFieldWrapper">
            <CoffeeBeans
                onChange={ calculateCoffeeBeans }
                value={ coffeeBeans }
            />
            <Water
                onChange={ calculateWater }
                value={ water }
            />
            <Ratio
                onChange={ calculateRatio }
                value={ ratio }
            />
            <CoffeeYield
                onChange={ calculateCoffeeYield }
                value={ coffeeYield }
            />
        </div>
    );
};

export default Calculator;