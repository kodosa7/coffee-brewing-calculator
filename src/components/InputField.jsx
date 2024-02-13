const InputField = props => {
    
    const fieldName = props.fieldName;
    const fieldUnit = props.fieldUnit;

    const handleInputValue = e => {
        props.onValueChange(e.target.value);
    };

    return (
        <div className="inputField">
            <label for="name">{ fieldName }</label>
            <input
                type="number"
                id="name"
                name="name"
                required
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