import React from "react";
import { ISelect } from "../../../Data/Common/ISelect";
import Dropdown from "../Dropdown";
import useLocation from "../../../Hooks/UseLoaction";

interface IProps {
  value: string;
  label?: string;
  error?: string;
  required?: boolean;
  showSearch?: boolean;
  onChange?: (value: string, option: ISelect | ISelect[]) => void;
}

const DropdownCity: React.FC<IProps> = ({
  error,
  onChange,
  value,
  required,
  label,
  showSearch,
}) => {
  const { cityList } = useLocation();

  return (
    <Dropdown
      error={error}
      showSearch={showSearch}
      required={required}
      label={label}
      options={cityList}
      onChange={onChange}
      value={value}
    />
  );
};

export default DropdownCity;
