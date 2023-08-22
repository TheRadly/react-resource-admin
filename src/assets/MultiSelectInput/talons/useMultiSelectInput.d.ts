import { DropdownChangeEvent } from 'primereact/dropdown';
interface UseMultiSelectInputProps {
    onChange: (arg: string) => void;
}
declare const useMultiSelectInput: ({ onChange }: UseMultiSelectInputProps) => {
    handleChangeMultiSelect: ({ value }: DropdownChangeEvent) => void;
    selectedOption: string | null;
};
export default useMultiSelectInput;
