import { useState } from "react";
import InputField from "../InputField";

const Ratio = () => {
    const [ratio, setRatio] = useState(1);

    return (
        <div className="inputFieldWrapper">
            <InputField
                fieldName="Ratio"
                fieldUnit=": 1"
                inputFieldValue={ ratio }
                onValueChange={ setRatio }
            />
        </div>
    );
};

export default Ratio;