import InputField from "./InputField";

const Calculator = () => {

    const fieldName = [ "Coffee beans",
                        "Water",
                        "Ratio",
                        "Coffee yield"
                    ]

    return (
        <div>
            {fieldName.map(item => (
                <InputField fieldName={ item } />
            ))}
        </div>
    );
};

export default Calculator;
