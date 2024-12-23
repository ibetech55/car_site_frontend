import React, { useCallback, useState } from 'react';
import { DeleteOutlined, ExpandOutlined, InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Col, Row, Typography, Upload } from 'antd';
import SectionText from '../../../Common/SectionText';
import { ICarImages, IImageErros, ISellCarForm } from '../../../../Data/CarDtos/SellCarDto';
import {
  DragEndEvent,
  DragStartEvent,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import SellCarImagesGrid from '../SellCarImagesGrid';
import ViewLargeImage from '../../../Common/ViewLargeImage';
import Label from '../../../Common/Label';
import "./index.scss";

const { Dragger } = Upload;
const cols = { xs: 24, sm: 24, md: 24, lg: 12, xl: 12 };
const cols2 = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 };


interface IProps {
  form: ISellCarForm;
  setForm: (form: ISellCarForm) => void;
  carImages: ICarImages[];
  setCarImages: (carImages: ICarImages[]) => void;
  errors?: IImageErros
}

const SellCarImages: React.FC<IProps> = ({ form, setForm, carImages, setCarImages, errors }) => {
  const [defaultImage, setDefaultImage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [activeId, setActiveId] = useState<number>(-1);
  const [activePreviewUrl, setActivePreviewUrl] = useState<string>("");

  const handleDragStart = (event: DragStartEvent) => {
    const item = carImages.find(x => x.id === event.active.id) as ICarImages
    setActivePreviewUrl(item.previewUrl)
    setActiveId(Number(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const images2 = carImages;
      const oldIndex = images2.findIndex((x) => x.id === active.id);
      const newIndex = images2.findIndex((x) => x.id === over!.id);
      const arrayMoveArr = arrayMove(images2, oldIndex, newIndex);
      setCarImages(arrayMoveArr);
    }
    setActiveId(-1);
  };

  const handleDragCancel = useCallback(() => {
    setActiveId(-1);
  }, []);

  const handleImageUpload = (file: File) => {
    if (file) {
      if (form.defaultImage) {
        handleRemoveImage()
      }
      setForm({
        ...form, defaultImage: {
          file,
          previewUrl: URL.createObjectURL(file),
        }
      });
    }
  };

  const handleRemoveImage = () => {
    if (defaultImage) {
      URL.revokeObjectURL(defaultImage);
      setDefaultImage("");
    }
  };

  const handleDeleteCarImage = (id: number) => {
    const arr = carImages;
    const index = arr.findIndex(x => x.id === id);
    URL.revokeObjectURL(arr[index].previewUrl)
    arr.splice(index, 1);
    setCarImages([...arr])
  }

  const multipleImageProps: UploadProps = {
    name: 'file',
    multiple: true,
    onChange(info) {
      const arr: ICarImages[] = info.fileList.map((file, i) => {
        const originFileObj = file.originFileObj as File;

        return {
          file: file.originFileObj,
          previewUrl: URL.createObjectURL(originFileObj),
          id: i + 1
        } as ICarImages;
      });

      setCarImages([...arr]);
    }
  };

  const defaultImageProps: UploadProps = {
    name: 'defaultImage',
    multiple: false,
    onChange(info) {
      const file = info.file.originFileObj;
      handleImageUpload(file as File)
    }
  };



  return (
    <>
      <div className="sell-car-images">
        <SectionText text="Images" />
        <Row gutter={[40, 40]}>
          <Col className="sell-car-images__default" {...cols}>
            <Label label="Add default image" required />
            <Dragger
              style={{ border: errors?.defaulImage && "1px dashed red" }}
              {...defaultImageProps}
              showUploadList={false}
              customRequest={() => { }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
              </p>
            </Dragger>
            <Typography className='sell-car-images__error error-text'>{errors?.defaulImage}</Typography>
          </Col>
          {form.defaultImage &&
            <Col className="sell-car-images__default" {...cols}>
              <Label label="Default image" />
              <div className="sell-car-images__default__img-div">
                <img src={form.defaultImage.previewUrl} alt="default-car-image" />
              </div>
              <DeleteOutlined
                className="sell-car-images__default__delete-icon delete-icon icon-size"
                onClick={() => setForm({ ...form, defaultImage: undefined })}
              />
              <ExpandOutlined
                className="icon-size"
                onClick={() => {
                  setActivePreviewUrl(form.defaultImage.previewUrl)
                  setOpenModal(true);
                }} />
            </Col>}

          <Col className="sell-car-images__multiple" {...cols2}>
            <Label label="Add multiple images" required />
            <Dragger
              {...multipleImageProps}
              customRequest={() => { }}
              showUploadList={false}
              style={{ border: errors?.carImages && "1px dashed red" }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
              </p>
            </Dragger>
            <Typography className='sell-car-images__error error-text'>{errors?.carImages}</Typography>
          </Col>
        </Row>


        {carImages.length > 0 && <div className='sell-car-images__multiple-images'>
          <SellCarImagesGrid items={carImages}
            handleDragCancel={handleDragCancel} handleDragEnd={handleDragEnd} handleDragStart={handleDragStart} activeId={activeId} activePreviewUrl={activePreviewUrl}
            handleDeleteCarImage={handleDeleteCarImage}
            setActivePreviewUrl={setActivePreviewUrl}
            handleOpenModal={() => setOpenModal(true)}
          />
        </div>
        }
      </div>
      <ViewLargeImage imageUrl={activePreviewUrl} open={openModal} onCancel={() => setOpenModal(false)} />
    </>
  )
};

export default SellCarImages;