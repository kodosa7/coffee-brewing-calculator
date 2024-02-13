import { useState } from "react";
import InputField from "../InputField";

const CoffeeBeans = () => {
    const [coffeeBeans, setCoffeeBeans] = useState(48);

    const fieldText = { "Coffee beans": "g" }

    return (
        <div className="inputFieldWrapper">
            {Object.entries(fieldText)
                .map(item => (
                <InputField
                    fieldName={ item[0] }
                    fieldUnit={ item[1] }
                    inputFieldValue={ coffeeBeans }
                />
            ))}
        </div>
    );
};

export default CoffeeBeans;
