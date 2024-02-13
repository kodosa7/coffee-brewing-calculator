import InputField from "../InputField";

const Water = props => {
    return (
        <div className="inputFieldWrapper">
            <InputField
                fieldName="Water"
                fieldUnit="ml"
                inputFieldValue={ props.value }
                onValueChange={ props.onChange }
            />
        </div>
    );
};

export default Water;