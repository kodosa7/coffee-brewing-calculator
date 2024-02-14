const InputField = (props) => {
    
    const fieldName = props.fieldName;
    const fieldUnit = props.fieldUnit;

    const handleInputValue = e => {
        props.onValueChange(e.target.value);
    };

    return (
        <div className="inputField__around">
            <div className="inputField__label">
                <label htmlFor="field">{ fieldName }</label>
            </div>
            <div className="inputField__field">
                <input
                        type="number"
                        id="field"
                        name="field"
                        required
                        value={ props.value }
                        onChange={ handleInputValue }
                />
                <div className="fieldUnit">
                    { fieldUnit }
                </div>
            </div>
        </div>
    );
};

export default InputField;