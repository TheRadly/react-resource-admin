interface UseInputMultiFieldProps {
    onChange: (arg: any) => void;
    values?: any[];
}
declare const useInputMultiField: ({ onChange, values }: UseInputMultiFieldProps) => {
    handleChangeInput: (field: string, value: string | number | null) => void;
};
export default useInputMultiField;
