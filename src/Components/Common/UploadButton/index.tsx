/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEventHandler, useRef, useState } from "react";
import DefaultButton from "../DefaultButton";
import { UploadOutlined } from "@ant-design/icons";
import { Typography } from "antd";

interface IProps {
  title: string;
  onFileChange: ChangeEventHandler;
}

const UploadButton: React.FC<IProps> = ({ title, onFileChange }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");

  const handleFileOpen = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFileChange(e);
    const file = fileInputRef.current?.files?.[0];
    setFileName(file?.name as string);
    setFileName(file?.name as string);
  };
  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <DefaultButton
        title={title}
        htmlType="button"
        onClick={handleFileOpen}
        icon={<UploadOutlined />}
      />
      <Typography>{fileName}</Typography>
    </div>
  );
};

export default UploadButton;
