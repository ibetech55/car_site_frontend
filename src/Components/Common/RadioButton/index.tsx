import { Radio } from 'antd';
import React from 'react';
import "./index.scss";
import Label from '../Label';

export interface IRadioOptions {
    label: string;
    value: boolean | string;
}

interface IProps {
    label: string;
    id?: string;
    value: string | boolean;
    options: IRadioOptions[];
    onChange: (option: string | boolean) => void;
}
const RadioButton: React.FC<IProps> = ({ label, id, value, onChange, options }) => {
    return (
        <div className="radio-button">
            <Label id={id} label={label} displayBlock required />

            <Radio.Group
                onChange={(e) => onChange(e.target.value)}
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
