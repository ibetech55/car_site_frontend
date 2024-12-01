import { Col, Row, Typography } from 'antd';
import React from 'react'
import { ISellCarForm } from '../../../../Data/CarDtos/SellCarDto';
import RadioButton from '../../../Common/RadioButton';
import SectionText from '../../../Common/SectionText';
import { affirmativeOptions } from '../../../../Configs/Constants/FormTypes';

const cols = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 };

interface IProps {
  form: ISellCarForm;
  setForm: (form: ISellCarForm) => void;
  error?: string;
}

const conditionOptions = [
  { label: "Excellent", value: "EXCELLENT" },
  { label: "Very Good", value: "VERY GOOD" },
  { label: "Good", value: "GOOD" },
  { label: "Fair", value: "FAIR" },
]


const SellCarCondition: React.FC<IProps> = ({ form, setForm, error }) => {
  return (
    <div className="sell-car-condition">
      <SectionText text="Condition" />

      <Row gutter={[40, 40]} className="row-gutter-bottom">
        <Col {...cols}>
          <RadioButton
            label="Condition"
            value={form.condition}
            options={conditionOptions}
            onChange={(val) => setForm({ ...form, condition: val as string })} />
          {error && <Typography>{error}</Typography>}
        </Col>
        <Col {...cols}>
          <RadioButton
            label="Has this car ever been in a car accident"
            value={form.accident}
            options={affirmativeOptions}
            onChange={(val) => setForm({ ...form, accident: val as boolean })} />
        </Col>
        <Col {...cols}>
          <RadioButton
            label="Does this car have a clean history report"
            value={form.cleanHistoryReport}
            options={affirmativeOptions}
            onChange={(val) => setForm({ ...form, cleanHistoryReport: val as boolean })} />
        </Col>
        <Col {...cols}>
          <RadioButton
            label="Does this car have any issues"
            value={form.hasIssue}
            options={affirmativeOptions}
            onChange={(val) => setForm({ ...form, hasIssue: val as boolean })} />
        </Col>
      </Row>
    </div>
  )
}

export default SellCarCondition
