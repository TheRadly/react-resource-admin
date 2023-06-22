import { DropdownChangeEvent } from "primereact/dropdown";
interface UseDropdownInputProps {
    onChange: (arg: string) => void;
}
declare const useDropdownInput: ({ onChange }: UseDropdownInputProps) => {
    selectedDropdown: string | null;
    handleChangeValue: ({ value }: DropdownChangeEvent) => void;
};
export default useDropdownInput;
