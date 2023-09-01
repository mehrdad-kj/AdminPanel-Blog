import { ChangeEvent } from "react";
import { Control, Controller, FieldValues, useForm } from "react-hook-form";

interface Props {
  type: "text" | "email" | "password" | "number";
  name: string;
  label: string;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  control: Control<FieldValues, any>;
}

const InputComponent: React.FC<Props> = ({
  type,
  name,
  placeholder,
  label,
  value,
  disabled,
  control,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <>
          <label htmlFor={label}>{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            id={label}
            value={value}
            disabled={disabled}
            onChange={onChange}
          />
        </>
      )}
    />
  );
};

export default InputComponent;
