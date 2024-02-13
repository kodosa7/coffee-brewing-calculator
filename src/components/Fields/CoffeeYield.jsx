import InputField from "../InputField";

const CoffeeYield = props => {
    return (
        <div className="inputFieldWrapper">
            <InputField
                fieldName="Coffee yield"
                fieldUnit="ml"
                inputFieldValue={ props.value }
                onValueChange={ props.onChange }
            />
        </div>
    );
};

export default CoffeeYield;