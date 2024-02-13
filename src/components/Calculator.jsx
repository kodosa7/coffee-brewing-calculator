import InputField from "./InputField";
import { useState } from "react";

const Calculator = () => {
    const [coffeeBeans, setCoffeeBeans] = useState(0);
    const [water, setWater ] = useState(0);
    const [ratio, setRation ] = useState(0);
    const [coffeeYield, setCoffeeYield ] = useState(0);

    const fieldText = { "Coffee beans": "g",
                        "Water": "ml",
                        "Ratio": ": 1",
                        "Coffee yield": "ml"
    }

    return (
        <div className="inputFieldWrapper">
            {Object.entries(fieldText)
                .map(item => (
                <InputField
                    fieldName={ item[0] }
                    fieldUnit={ item[1] }
                    coffeeBeans={ coffeeBeans }
                    water={ water }
                    ratio={ ratio }
                    coffeeYield={ coffeeYield }
                />
            ))}
        </div>
    );
};

export default Calculator;
