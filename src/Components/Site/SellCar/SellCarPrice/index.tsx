import { Col, Row } from 'antd';
import React from 'react'
import { handleFormChange } from '../../../../Utils/HandleFormChange';
import FormInput from '../../../Common/FormInput';
import { ISellCarForm } from '../../../../Data/CarDtos/SellCarDto';
import SectionText from '../../../Common/SectionText';
import InformationText from '../../../Common/InformationText';
import "./index.scss";

const cols = { xs: 24, sm: 24, md: 24, lg: 16, xl: 16 };

interface IProps {
  form: ISellCarForm;
  setForm: (form: ISellCarForm) => void;
  error?: string;
}
const SellCarPrice: React.FC<IProps> = ({ form, setForm, error }) => {
  return (
    <div className="sell-car-price">
      <SectionText text="Price" />
      <InformationText text="Quickly and easily create a free listing at your own asking price and wait for interested shoppers to contact you directly." />
      <Row gutter={[40, 40]}>
        <Col {...cols}>
          <FormInput
            label="Price"
            id="price"
            name="price"
            required
            value={form.price}
            onChange={(e) => handleFormChange(e, form, setForm)}
            error={error}
          />
        </Col>
      </Row>
    </div>
  )
}

export default SellCarPrice
