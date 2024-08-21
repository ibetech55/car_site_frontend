import { Modal } from 'antd'
import React from 'react'

interface IProps {
    imageUrl: string;
    open: boolean;
    onCancel: () => void;
}
const ViewLargeImage: React.FC<IProps> = ({ imageUrl, open, onCancel }) => {

    return (
        <Modal
            className=""
            open={open}
            onCancel={onCancel}
            width={"50%"}
            footer={<></>}
            closeIcon={<></>}
        >
            <div style={{ height: 700 }}>
                <img src={imageUrl} alt={imageUrl} style={{ width: "100%", height: "100%" }} />
            </div>
        </Modal>
    )
}

export default ViewLargeImage
