/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
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

const DropdownMakes: React.FC<IProps> = ({
  error,
  onChange,
  value,
  required,
  label,
  showSearch,
}) => {
  const { makesList, handleGetMakesList } = useBrand();

  useEffect(() => {
    handleGetMakesList();
  }, []);
  return (
    <Dropdown
      error={error}
      showSearch={showSearch}
      required={required}
      label={label}
      options={makesList}
      onChange={onChange}
      value={value}
    />
  );
};

export default DropdownMakes;
