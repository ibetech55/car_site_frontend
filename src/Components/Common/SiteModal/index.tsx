import { Modal, Typography } from "antd";
import DefaultButton from "../DefaultButton";

interface IProps {
  children: React.ReactNode;
  open: boolean;
  onCancel?: () => void;
  title?: string;
  handleConfirm?: () => void;
  width?: string | number;
}

const SiteModal: React.FC<IProps> = ({
  children,
  open,
  onCancel,
  title,
  handleConfirm,
  width,
}) => {
  const ModalTitle = (
    <Typography.Title className="site-modal__header">{title}</Typography.Title>
  );
  const ModalFooter = (
    <div className="site-modal__footer">
      <DefaultButton title="Cancel" danger outline onClick={onCancel} />
      <DefaultButton title="Enter" onClick={handleConfirm} />
    </div>
  );
  return (
    <Modal
      className="site-modal"
      title={ModalTitle}
      open={open}
      onCancel={onCancel}
      width={width}
      footer={ModalFooter}
    >
      <div className="site-modal__children">{children}</div>
    </Modal>
  );
};

export default SiteModal;
