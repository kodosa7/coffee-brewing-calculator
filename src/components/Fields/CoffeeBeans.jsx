import InputField from "../InputField";

const CoffeeBeans = props => {
    return (
        <div className="inputFieldWrapper">
            <InputField
                fieldName="Coffee beans"
                fieldUnit="g"
                inputFieldValue={ props.value }
                onValueChange={ props.onChange }
            />
        </div>
    );
};

export default CoffeeBeans;