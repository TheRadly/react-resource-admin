import { DropdownChangeEvent } from "primereact/dropdown";
interface UseDropdownInputProps {
    onChange: (arg: string) => void;
    returnFullObjectEvent?: boolean;
}
declare const useDropdownInput: ({ onChange, returnFullObjectEvent, }: UseDropdownInputProps) => {
    selectedDropdown: string | null;
    handleChangeValue: ({ value }: DropdownChangeEvent) => void;
};
export default useDropdownInput;
