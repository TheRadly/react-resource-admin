interface UseSearchInputProps {
    onChange?: (arg: any) => void;
}
declare const useSearchInput: ({ onChange }: UseSearchInputProps) => {
    handleKeyUp: (e: any) => void;
};
export default useSearchInput;
