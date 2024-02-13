import { useState } from "react";
import InputField from "../InputField";

const Ratio = () => {
    const [ratio, setRatio] = useState(10);

    const fieldText = { "Ratio": ": 1" }

    return (
        <div className="inputFieldWrapper">
            {Object.entries(fieldText)
                .map(item => (
                <InputField
                    fieldName={ item[0] }
                    fieldUnit={ item[1] }
                    inputFieldValue={ ratio }
                />
            ))}
        </div>
    );
};

export default Ratio;