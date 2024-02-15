const InputField = (props) => {
    
    const fieldName = props.fieldName;
    const fieldUnit = props.fieldUnit;

    const handleInputValue = e => {
        props.onValueChange(e.target.value);
    };

    return (
        <div className="">
            <div className="">
                <label htmlFor="field">{ fieldName }</label>
            </div>
            <div className="">
                <input
                    type="number"
                    id="field"
                    name="field"
                    required
                    value={ props.value }
                    onChange={ handleInputValue }
                />
                <div className="">
                    { fieldUnit }
                </div>
            </div>
        </div>
    );
};

export default InputField;