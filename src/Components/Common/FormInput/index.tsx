import { Input } from "antd";
import React from "react";
import Label from "../Label";

export interface IProps {
  label: string;
  name?: string;
  id?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  disabled?: boolean;
}
const FormInput: React.FC<IProps> = ({
  label,
  name,
  id,
  value,
  onChange,
  error,
  placeholder,
  required,
  type,
  disabled = false
}) => {
  return (
    <div className="form-input">
      <Label id={id} required={required} label={label} />
      <Input
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        style={{ border: error && "1px solid red" }}
        type={type}
        disabled={disabled}
      />
      <span style={{ color: 'red' }}>{error}</span>
    </div>
  );
};

export default FormInput;
