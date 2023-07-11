import { Calendar } from "primereact/calendar";
import DateInputWrapper from "./styled/DateInputWrapper";
import useDateInput from "./talons/useDateInput";
import { Nullable } from "primereact/ts-helpers";

interface DateInputProps {
  label: string;
  onChange: (arg: Nullable<string | Date | Date[]>) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  value: any;
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
        value={value}
        onChange={handleChangeDateInput}
        showTime
        disabled={disabled}
        hourFormat="24"
      />
    </DateInputWrapper>
  );
};

export default DateInput;
