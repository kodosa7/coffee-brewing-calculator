const InputField = (props) => {
    const fieldName = props.fieldName;
    const fieldUnit = props.fieldUnit;

    const handleInputValue = (e) => {
        props.onValueChange(e.target.value);
    };

    return (
        <>
            <label className="form-label" htmlFor="field">
                {fieldName}
            </label>
            <div className="input-group">
                <input
                    className="form-control"
                    type="number"
                    id="field"
                    name="field"
                    required
                    value={props.value}
                    onChange={handleInputValue}
                />
                <span className="input-group-text">{fieldUnit}</span>
            </div>
        </>
    );
};

export default InputField;
