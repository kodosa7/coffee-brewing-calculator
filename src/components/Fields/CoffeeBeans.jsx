import InputField from "./InputField/InputField";

const CoffeeBeans = (props) => {
    return (
        <div className="">
            <InputField
                fieldName="Coffee beans"
                fieldUnit="g"
                value={ props.value }
                onValueChange={ props.onChange }
                maxValue="100"
            />
        </div>
    );
};

export default CoffeeBeans;