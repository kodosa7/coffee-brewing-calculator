import { useState } from "react";
import InputField from "../InputField";

const Water = () => {
    const [water, setWater] = useState(1);

    return (
        <div className="inputFieldWrapper">
            <InputField
                fieldName="Water"
                fieldUnit="ml"
                inputFieldValue={ water }
                onValueChange={ setWater }
            />
        </div>
    );
};

export default Water;