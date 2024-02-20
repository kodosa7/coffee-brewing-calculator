import InputField from "./InputField/InputField";

const CoffeeYield = (props) => {
    return (
        <div className="">
            <InputField
                fieldName="Coffee yield"
                fieldUnit="ml"
                value={ props.value }
                onValueChange={ props.onChange }
                maxValue="2500"
            />
        </div>
    );
};

export default CoffeeYield;