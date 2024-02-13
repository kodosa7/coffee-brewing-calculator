import InputField from "../InputField";

const Ratio = props => {
    return (
        <div className="inputFieldWrapper">
            <InputField
                fieldName="Ratio"
                fieldUnit=": 1"
                inputFieldValue={ props.value }
                onValueChange={ props.onChange }
            />
        </div>
    );
};

export default Ratio;