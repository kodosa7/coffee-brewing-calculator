import InputField from "./InputField/InputField";

const Water = (props) => {
    return (
        <InputField
            fieldName="Water"
            fieldUnit="ml"
            value={ props.value }
            onValueChange={ props.onChange }
            maxValue="2500"
        />
    );
};

export default Water;