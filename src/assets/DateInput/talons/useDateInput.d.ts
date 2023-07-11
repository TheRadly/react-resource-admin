import { CalendarChangeEvent } from "primereact/calendar";
interface UseDateInputProps {
    onChange: (arg: any) => void;
}
declare const useDateInput: ({ onChange }: UseDateInputProps) => {
    handleChangeDateInput: (e: CalendarChangeEvent) => void;
};
export default useDateInput;
