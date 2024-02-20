import InputField from "./InputField/InputField";

const Ratio = (props) => {
    return (
        <div className="">
            <InputField
                fieldName="Ratio"
                fieldUnit=": 1"
                value={ props.value }
                onValueChange={ props.onChange }
                maxValue="50"
            />
        </div>
    );
};

export default Ratio;