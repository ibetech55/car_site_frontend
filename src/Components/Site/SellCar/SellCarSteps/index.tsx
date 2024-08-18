import { Steps } from 'antd'
import React from 'react'

interface IProps {
    current: number;
    setCurrentChange: (current: number) => void;
}

const SellCarSteps: React.FC<IProps> = ({ current, setCurrentChange }) => {

    return (
        <div>
            <Steps
                current={current}
                onChange={setCurrentChange}
                size="small"
                direction="vertical"
                items={[
                    {
                        title: "Details",
                        description: "Information about car"
                    },
                    {
                        title: "Price",
                        description: "Car Price",
                    },
                    {
                        title: "Condition",
                        description: "Conditon of car",
                    },
                    {
                        title: "Images",
                        description: "Upload your car pictures",
                    },
                    {
                        title: "Features",
                        description: "Select car features",
                    },
                    {
                        title: "User",
                        description: "User information",
                    }
                ]}
            />
        </div>
    )
}

export default SellCarSteps
