import InputField from "./InputField/InputField";

const Water = (props) => {
    return (
        <div className="water">
            <InputField
                fieldName="Water"
                fieldUnit="ml"
                value={ props.value }
                onValueChange={ props.onChange }
            />
        </div>
    );
};

export default Water;