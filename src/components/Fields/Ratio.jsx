import InputField from "./InputField/InputField";

const Ratio = (props) => {
    return (
        <div className="inputField">
            <InputField
                fieldName="Ratio"
                fieldUnit=":&nbsp;1"
                value={ props.value }
                onValueChange={ props.onChange }
            />
        </div>
    );
};

export default Ratio;