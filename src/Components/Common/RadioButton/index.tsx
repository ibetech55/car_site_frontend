import { Radio } from 'antd';
import React from 'react';
import "./index.scss";

export interface IRadioOptions {
    label: string;
    value: string;
}

interface IProps {
    label: string;
    id?: string;
    value: string;
    options: IRadioOptions[];
    onChange: (option:string) => void;
}
const RadioButton: React.FC<IProps> = ({ label, id, value, onChange, options }) => {
    return (
        <div className="radio-button">
            <label htmlFor={id} className='radio-button__form-label'>{label}</label>
            <Radio.Group
                onChange={(e)=>onChange(e.target.value)}
                value={value}
                id={id}
            >
                {options.map((option, index) => (
                    <div key={index} className="radio-button__button">
                        <Radio value={option.value}>{option.label}</Radio>
                    </div>
                ))}
            </Radio.Group>
        </div>
    )
}

export default RadioButton
