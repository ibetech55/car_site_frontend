/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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



const DropdownYears: React.FC<IProps> = ({
  error,
  onChange,
  value,
  required,
  label,
  showSearch,
}) => {
  const [yearsList, setYearsList] = useState<ISelect[]>([])

  const getYears = () => {
    const yearsArr: ISelect[] = []
    const getYear = new Date().getFullYear() + 1

    for (let i = getYear; i >= 1950; i--) {
      yearsArr.push({
        value: i.toString(),
        label: i.toString()
      })
      setYearsList([...yearsArr])
    }
  }

  useEffect(() => {
    getYears()
  }, [])


  return (
    <Dropdown
      error={error}
      showSearch={showSearch}
      required={required}
      label={label}
      options={yearsList}
      onChange={onChange}
      value={value}
    />
  );
};

export default DropdownYears;
