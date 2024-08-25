import React from 'react'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import "./index.scss";

interface IProps {
    text: string;
    onChange: (e: CheckboxChangeEvent) => void;
    checked?: boolean;
    value?: boolean
}

const DefaultCheckbox = ({ text, onChange, checked, value }: IProps) => {
    return (
        <div className="default-checkbox">
            {checked ? (
                <Checkbox className="default-checkbox__checkbox" onChange={onChange} checked={checked} value={value}>{text}</Checkbox>
            ) : (
                <Checkbox className="default-checkbox__checkbox" onChange={onChange} value={value}>{text}</Checkbox>
            )}
        </div>
    )
}

export default DefaultCheckbox
