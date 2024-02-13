import { useState } from "react";
import InputField from "../InputField";

const CoffeeYield = () => {
    const [coffeeYield, setCoffeeYield] = useState(8);

    const fieldText = { "Coffee yield": "ml" }

    return (
        <div className="inputFieldWrapper">
            {Object.entries(fieldText)
                .map(item => (
                <InputField
                    fieldName={ item[0] }
                    fieldUnit={ item[1] }
                    inputFieldValue={ coffeeYield }
                />
            ))}
        </div>
    );
};

export default CoffeeYield;