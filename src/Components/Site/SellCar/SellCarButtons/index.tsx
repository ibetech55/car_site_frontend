import React from 'react'
import DefaultButton from '../../../Common/DefaultButton';
import "./index.scss";

interface IProps {
    current: number;
    handlePrevious: (value:number) => void;
    handleNext: (value:number) => void;
}

const SellCarButtons: React.FC<IProps> = ({ current, handlePrevious, handleNext }: IProps) => {
    return (
        <div className="sell-car-buttons">
            <div className="sell-car-buttons__actions">
                {current > 0 && <DefaultButton
                    title="Previous"
                    onClick={() => handlePrevious(current)}
                />}
                {current < 5 && <DefaultButton
                    title="Next"
                    onClick={() => handleNext(current)}
                />}
            </div>
            <div className="sell-car-buttons__submit">
                <DefaultButton
                    title="Save as Draft"
                    onClick={() => { }}
                />
                <DefaultButton
                    title="Submit"
                    onClick={() => { }}
                />
            </div>
        </div>
    )
}

export default SellCarButtons
