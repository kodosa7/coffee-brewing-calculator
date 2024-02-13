const InputField = props => {
    
    const fieldName = props.fieldName;
    const fieldUnit = props.fieldUnit;

    const handleInputValue = e => {
        props.onValueChange(e.target.value);
    };

    return (
        <div className="inputField">
            <label htmlFor="field">{ fieldName }</label>
            <input
                type="number"
                id="field"
                name="field"
                required
                defaultValue="0"
                value={ props.inputFieldValue }
                onChange={ handleInputValue }
            />

            <div className="fieldUnit">
                { fieldUnit }
            </div>
        </div>
    );
};

export default InputField;