import InputField from "./InputField/InputField";

const CoffeeBeans = props => {
    return (
        <div className="inputFieldWrapper">
            <InputField
                fieldName="Coffee beans"
                fieldUnit="g"
                value={ props.value }
                onValueChange={ props.onChange }
            />
        </div>
    );
};

export default CoffeeBeans;