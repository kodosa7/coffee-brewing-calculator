import { useState } from "react";
import CoffeeBeans from "./Fields/CoffeeBeans";
import Water from "./Fields/Water";

const InputField = (props) => {
    const [inputValue, setInputValue] = useState(0);

    const fieldName = props.fieldName;
    const fieldUnit = props.fieldUnit;

    const inputFieldValue = props.inputFieldValue

    const handleInputValue = e => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="inputField">
            <label for="name">{ fieldName }</label>
            <input
                type="number"
                id="name"
                name="name"
                required
                minlength="1"
                maxlength="10"
                size="10"
                defaultValue={ inputFieldValue }
                value={ inputFieldValue }
                onChange={ handleInputValue }
            />

            <div className="fieldUnit">
                { fieldUnit }
            </div>
        </div>
    );
};

export default InputField;