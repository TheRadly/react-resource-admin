import { Calendar } from "primereact/calendar";
import DateInputWrapper from "./styled/DateInputWrapper";
import useDateInput from "./talons/useDateInput";
import ErrorMessage from "../UniversalInput/styled/errorMessage";

interface DateInputProps {
  label?: string;
  onChange: (arg: any) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  value: string | Date;
  error?: string;
}
const DateInput = ({
  label,
  onChange,
  fullWidth,
  disabled,
  value,
  error,
}: DateInputProps) => {
  const { handleChangeDateInput } = useDateInput({ onChange });

  return (
    <DateInputWrapper fullWidth={fullWidth}>
      {label && <label htmlFor={label}>{label}</label>}
      <Calendar
        id={label}
        value={typeof value === "string" ? new Date(value) : value}
        onChange={handleChangeDateInput}
        showTime
        disabled={disabled}
        hourFormat="24"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </DateInputWrapper>
  );
};

export default DateInput;
