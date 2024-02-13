import { useState } from "react";
import InputField from "../InputField";

const Water = () => {
    const [water, setWater] = useState(12);

    const fieldText = { "Water": "ml" }

    return (
        <div className="inputFieldWrapper">
            {Object.entries(fieldText)
                .map(item => (
                <InputField
                    fieldName={ item[0] }
                    fieldUnit={ item[1] }
                    inputFieldValue={ water }
                />
            ))}
        </div>
    );
};

export default Water;