import { useState } from "react";

import CoffeeBeans from "./Fields/CoffeeBeans";
import Water from "./Fields/Water";
import Ratio from "./Fields/Ratio";
import CoffeeYield from "./Fields/CoffeeYield";

const Calculator = () => {
    const [coffeeBeans, setCoffeeBeans] = useState(1);
    const [water, setWater] = useState(1);
    const [coffeeYield, setCoffeeYield] = useState(1);
    const [ratio, setRatio] = useState(1);

    const calculateCoffeeBeans = value => {
        setCoffeeBeans(value);
        // setCoffeeBeans(prev => prev * 123);
        console.log("calculateCoffeeBeans", coffeeBeans);
    };

    const calculateWater = value => {
        setWater(value);
        console.log("calculateWater", water);
    };

    const calculateRatio = value => {
        setRatio(value);
        console.log("calculateRatio", ratio);
    };

    const calculateCoffeeYield = value => {
        setCoffeeYield(value);
        console.log("calculateCoffeeYield", coffeeYield);
    };

    return (
        <>
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
        </>
    );
};

export default Calculator;