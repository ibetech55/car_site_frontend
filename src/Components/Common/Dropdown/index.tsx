import { Select } from "antd";
import React from "react";
import { ISelect } from "../../../Data/Common/ISelect";
import { SizeType } from "antd/es/config-provider/SizeContext";
import Label from "../Label";
export interface IProps {
  label?: string;
  name?: string;
  id?: string;
  value: string;
  onChange?: (value: string, option: ISelect | ISelect[]) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  options: ISelect[];
  showSearch?: boolean;
  size?: SizeType
}
const Dropdown: React.FC<IProps> = ({
  label,
  name,
  id,
  value,
  onChange,
  error,
  placeholder,
  required,
  options,
  showSearch = false,
  size = 'middle'
}) => {
  return (
    <div className="form-input">
      <Label id={id} required label={label ? label : ""} />
      <Select
        placeholder={placeholder}
        id={name}
        value={value}
        showSearch={showSearch}
        optionFilterProp="children"
        filterOption={showSearch ? (input, option) => (option?.label ?? "").includes(input) : undefined}
        // filterSort={showSearch ? (optionA, optionB) =>
        //   (optionA?.label ?? "")
        //     .toLowerCase()
        //     .localeCompare((optionB?.label ?? "").toLowerCase()) : undefined
        // }
        className="home-search__select"
        size={size}
        options={options}
        onChange={onChange}
        style={{ border: error && "1px solid red" }}
      />
      <span style={{ color: "red" }}>{error}</span>
    </div>
  );
};

export default Dropdown;
