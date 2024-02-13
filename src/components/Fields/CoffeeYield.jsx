import { useState } from "react";
import InputField from "../InputField";

const CoffeeYield = () => {
    const [coffeeYield, setCoffeeYield] = useState(1);

    return (
        <div className="inputFieldWrapper">
            <InputField
                fieldName="Coffee yield"
                fieldUnit="ml"
                inputFieldValue={ coffeeYield }
                onValueChange={ setCoffeeYield }
            />
        </div>
    );
};

export default CoffeeYield;