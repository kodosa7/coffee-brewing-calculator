import InputField from "./InputField/InputField";

const CoffeeYield = props => {
    return (
        <div className="inputFieldWrapper">
            <InputField
                fieldName="Coffee yield"
                fieldUnit="ml"
                value={ props.value }
                onValueChange={ props.onChange }
            />
        </div>
    );
};

export default CoffeeYield;