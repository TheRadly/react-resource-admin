interface UseTextAreaInputProps {
    onChange: (arg: any) => void;
}
declare const useTextAreaInput: ({ onChange }: UseTextAreaInputProps) => {
    handleChangeTextAreaInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export default useTextAreaInput;
