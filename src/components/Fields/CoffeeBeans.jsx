import InputField from "./InputField/InputField";

const CoffeeBeans = (props) => {
    return (
        <InputField
            fieldName="Coffee beans"
            fieldUnit="g"
            value={ props.value }
            onValueChange={ props.onChange }
            maxValue="100"
        />
    );
};

export default CoffeeBeans;