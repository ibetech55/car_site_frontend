/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { ISelect } from "../../../Data/Common/ISelect";
import Dropdown from "../Dropdown";
import useBrand from "../../../Hooks/UseBrand";

interface IProps {
  value: string;
  label?: string;
  error?: string;
  required?: boolean;
  showSearch?: boolean;
  onChange?: (value: string, option: ISelect | ISelect[]) => void;
}

const DropdownModels: React.FC<IProps> = ({
  error,
  onChange,
  value,
  required,
  label,
  showSearch,
}) => {
  const { modelsList } = useBrand();

  return (
    <Dropdown
      error={error}
      showSearch={showSearch}
      required={required}
      label={label}
      options={modelsList}
      onChange={onChange}
      value={value}
    />
  );
};

export default DropdownModels;
