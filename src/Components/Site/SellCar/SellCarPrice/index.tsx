import { Col, Row, Typography } from 'antd';
import React from 'react'
import { handleFormChange } from '../../../../Utils/HandleFormChange';
import FormInput from '../../../Common/FormInput';
import { ISellCarForm } from '../../../../Data/CarDtos/SellCarDto';
import "./index.scss";
import SectionText from '../../../Common/SectionText';

const cols = { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 };

interface IProps {
  form: ISellCarForm;
  setForm: (form: ISellCarForm) => void;
}
const SellCarPrice: React.FC<IProps> = ({ form, setForm }) => {
  return (
    <div className="sell-car-price">
      <SectionText text="Price" />
      <Typography.Text className="sell-car-price__text">Quickly and easily create a free listing at your own asking price and wait for interested shoppers to contact you directly.</Typography.Text>
      <Row gutter={[40, 40]} className="row-gutter-bottom">
        <Col {...cols}>
          <FormInput
            label="Price"
            id="price"
            name="price"
            required
            value={form.price}
            onChange={(e) => handleFormChange(e, form, setForm)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default SellCarPrice
