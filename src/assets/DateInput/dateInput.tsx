import { Calendar } from "primereact/calendar";
import DateInputWrapper from "./styled/DateInputWrapper";
import useDateInput from "./talons/useDateInput";

interface DateInputProps {
  label: string;
  onChange: (arg: any) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  value: string | Date;
}
const DateInput = ({
  label,
  onChange,
  fullWidth,
  disabled,
  value,
}: DateInputProps) => {
  const { handleChangeDateInput } = useDateInput({ onChange });

  return (
    <DateInputWrapper fullWidth={fullWidth}>
      <label htmlFor={label}>{label}</label>
      <Calendar
        id={label}
        value={typeof value === "string" ? new Date(value) : value}
        onChange={handleChangeDateInput}
        showTime
        disabled={disabled}
        hourFormat="24"
      />
    </DateInputWrapper>
  );
};

export default DateInput;
