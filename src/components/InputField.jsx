import { useState } from "react";

const InputField = (props) => {
    
    const fieldName = props.fieldName;
    const fieldUnit = props.fieldUnit;
    const [inputFieldValue, setInputFieldValue] = useState(props.inputFieldValue);

    const [inputValue, setInputValue] = useState(inputFieldValue);

    const handleInputValue = e => {
        setInputValue(e.target.value);
        setInputFieldValue(prevValue => prevValue + 1)
    };

    return (
        <div className="inputField">
            <label for="name">{ fieldName }</label>
            <input
                type="number"
                id="name"
                name="name"
                required
                // defaultValue={ inputFieldValue }
                value={ inputFieldValue }
                onInput={ handleInputValue }
            />

            <div className="fieldUnit">
                { fieldUnit }
            </div>
        </div>
    );
};

export default InputField;