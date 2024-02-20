import InputField from "./InputField/InputField";

const CoffeeYield = (props) => {
    return (
        <InputField
            fieldName="Coffee yield"
            fieldUnit="ml"
            value={ props.value }
            onValueChange={ props.onChange }
            maxValue="2500"
        />
    );
};

export default CoffeeYield;