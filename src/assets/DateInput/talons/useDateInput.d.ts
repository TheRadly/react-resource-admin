import { CalendarChangeEvent } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
interface UseDateInputProps {
    onChange: (val: Nullable<string | Date | Date[]>) => void;
}
declare const useDateInput: ({ onChange }: UseDateInputProps) => {
    handleChangeDateInput: (e: CalendarChangeEvent) => void;
};
export default useDateInput;
