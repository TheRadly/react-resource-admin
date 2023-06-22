interface UseInputFloatLabel {
    isFloat?: boolean;
    onChange: any;
}
declare const useInputFloatLabel: ({ onChange, isFloat }: UseInputFloatLabel) => {
    handleChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default useInputFloatLabel;
