import InputField from "./InputField/InputField";

const Water = (props) => {
    return (
        <div className="">
            <InputField
                fieldName="Water"
                fieldUnit="ml"
                value={ props.value }
                onValueChange={ props.onChange }
                maxValue="2500"
            />
        </div>
    );
};

export default Water;