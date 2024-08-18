/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { ISelect } from "../../../Data/Common/ISelect";
import Dropdown from "../Dropdown";

interface IProps {
  value: string;
  label?: string;
  error?: string;
  required?: boolean;
  showSearch?: boolean;
  onChange?: (value: string, option: ISelect | ISelect[]) => void;
}



const DropdownTransmission: React.FC<IProps> = ({
  error,
  onChange,
  value,
  required,
  label,
  showSearch,
}) => {

  return (
    <Dropdown
      error={error}
      showSearch={showSearch}
      required={required}
      label={label}
      options={[
        { value: "Automatic", label: "Automatic" },
        { value: "Manual", label: "Manual" }
      ]}
      onChange={onChange}
      value={value}
    />
  );
};

export default DropdownTransmission;
