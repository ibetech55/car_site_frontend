import React from 'react'
import { Checkbox } from 'antd'
import "./index.scss";

interface IProps {
    text: string;
    onChange: () => void;
    checked?: boolean;
}

const DefaultCheckbox = ({ text, onChange, checked }: IProps) => {
    return (
        <div className="default-checkbox">
            {checked ? (
                <Checkbox className="default-checkbox__checkbox" onChange={onChange} checked={checked}>{text}</Checkbox>
            ) : (
                <Checkbox className="default-checkbox__checkbox" onChange={onChange}>{text}</Checkbox>
            )}
        </div>
    )
}

export default DefaultCheckbox
