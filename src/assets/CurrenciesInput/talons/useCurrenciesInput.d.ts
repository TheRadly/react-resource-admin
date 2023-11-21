interface UseCurrenciesInputProps {
    initialValues: string[];
    values: {
        currency: string;
        amount: string | number;
    }[];
    onChange: (arg: any) => void;
}
declare const useCurrenciesInput: ({ initialValues, values, onChange, }: UseCurrenciesInputProps) => {
    correctValues: {
        currency: string;
        amount: string;
        placeholder: string;
    }[];
    handleChangeCurrencies: (currency: string, amount: string) => void;
};
export default useCurrenciesInput;
