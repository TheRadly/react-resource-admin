interface UseInputFloatLabel {
    isFloat?: boolean;
    onChange: (arg: any) => void;
}
declare const useInputFloatLabel: ({ onChange, isFloat }: UseInputFloatLabel) => {
    handleChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default useInputFloatLabel;
