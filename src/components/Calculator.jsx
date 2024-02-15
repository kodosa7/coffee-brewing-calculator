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
        if (value >= 0 && value <= 100) {
            setCoffeeBeans(value);
            setWater(Math.round((value * ratio) * 100) / 100);
            setCoffeeYield(Math.round((water * .9) * 100) / 100);
        }
    };

    const calculateWater = value => {
        if (value >= 0 && value <= 2500) {
            setWater(value);
            setCoffeeYield(Math.round((water * .9) * 100) / 100);
            setCoffeeBeans(Math.round((water / ratio) * 100) / 100);
        }
    };

    const calculateRatio = value => {
        if (value >= 0 && value <= 50) {
            setRatio(value);
            setWater(Math.round((value * ratio) * 100) / 100);
            setCoffeeYield(Math.round((water * .9) * 100) / 100);
        }
    };

    const calculateCoffeeYield = value => {
        if (value >= 0 && value <= 2500) {
            setCoffeeYield(value);
            setWater(Math.round((coffeeYield / .9) * 100) / 100);
            setCoffeeBeans(Math.round((water / ratio) * 100) / 100);
        }
    };

    return (
        <div className="">
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