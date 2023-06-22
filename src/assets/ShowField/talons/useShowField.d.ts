interface UseShowFieldProps {
    value: any;
    emptyLabel: string;
    arrayTitle: string;
    isArray?: boolean;
}
declare const useShowField: ({ value, isArray, arrayTitle, emptyLabel, }: UseShowFieldProps) => {
    correctValue: any;
    parsedArrayValues: any;
};
export default useShowField;
