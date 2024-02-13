import InputField from "./InputField/InputField";

const Ratio = props => {
    return (
        <div className="inputFieldWrapper">
            <InputField
                fieldName="Ratio"
                fieldUnit=": 1"
                value={ props.value }
                onValueChange={ props.onChange }
            />
        </div>
    );
};

export default Ratio;