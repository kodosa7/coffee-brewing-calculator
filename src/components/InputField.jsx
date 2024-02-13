import { useState } from "react";

const InputField = (props) => {
    const [inputValue, setInputValue] = useState(0);

    const fieldName = props.fieldName;
    const fieldUnit = props.fieldUnit;
    const coffeeBeans = props.coffeeBeans

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
                defaultValue={ inputValue }
                value={ inputValue }
                onChange={ handleInputValue }
            />

            <div className="fieldUnit">
                { fieldUnit }
            </div>
        </div>
    );
};

export default InputField;