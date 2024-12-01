import { StepProps, Steps } from 'antd'
import React, { useState } from 'react'
import { IErrors } from '../../../../Data/CarDtos/SellCarDto';

interface IProps {
    current: number;
    setCurrentChange: (current: number) => void;
    errors: IErrors;
    items: StepProps[];
}

const SellCarSteps: React.FC<IProps> = ({ current, setCurrentChange, items }) => {

    return (
        <div>
            <Steps
                current={current}
                onChange={setCurrentChange}
                size="small"
                direction="vertical"
                items={items}
            />
        </div>
    )
}

export default SellCarSteps
