const InputField = (props) => {
    const fieldName = props.fieldName;
    const fieldUnit = props.fieldUnit;

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
            />
            <div className="fieldUnit">
                { fieldUnit }
            </div>
        </div>
    );
};

export default InputField;