import { Input } from "antd";
import React from "react";

export interface IProps {
  label?: string;
  name?: string;
  id?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  error?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
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
  type
}) => {
  return (
    <div>
      <label htmlFor={id}>{required && <span style={{color: 'red'}}>* </span>}{label}</label>
      <Input
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        style={{ border: error && "1px solid red" }}
        type={type}
      />
      <span style={{color: 'red'}}>{error}</span>
    </div>
  );
};

export default FormInput;
