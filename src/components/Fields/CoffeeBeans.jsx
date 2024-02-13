import { useState } from "react";
import InputField from "../InputField";

const CoffeeBeans = () => {
    const [coffeeBeans, setCoffeeBeans] = useState(1);

    return (
        <div className="inputFieldWrapper">
            <InputField
                fieldName="Coffee beans"
                fieldUnit="g"
                inputFieldValue={ coffeeBeans }
                onValueChange={ setCoffeeBeans }
            />
        </div>
    );
};

export default CoffeeBeans;