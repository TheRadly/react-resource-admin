import { ChipsChangeEvent } from "primereact/chips";
interface UseInputArrayProps {
    values: string[];
    onChange: (arg: string[]) => void;
}
declare const useInputArray: ({ values, onChange }: UseInputArrayProps) => {
    chipsValues: string[];
    handleChangeChipsValues: ({ value }: ChipsChangeEvent) => void;
};
export default useInputArray;
