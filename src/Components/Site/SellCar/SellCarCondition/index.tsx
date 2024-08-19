import { Col, Row } from 'antd';
import React from 'react'
import { ISellCarForm } from '../../../../Data/CarDtos/SellCarDto';
import RadioButton from '../../../Common/RadioButton';
import SectionText from '../../../Common/SectionText';

const cols = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 };

interface IProps {
  form: ISellCarForm;
  setForm: (form: ISellCarForm) => void;
}

const affirmativeOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
]


const SellCarCondition: React.FC<IProps> = ({ form, setForm }) => {
  return (
    <div className="sell-car-condition">
      <SectionText text="Condition" />

      <Row gutter={[40, 40]} className="row-gutter-bottom">
        <Col {...cols}>
          <RadioButton
            label="Has this car ever been in a car accident"
            value={form.accident}
            options={affirmativeOptions}
            onChange={(val) => setForm({ ...form, accident: val })} />
        </Col>
        <Col {...cols}>
          <RadioButton
            label="Does this car have a clean history report"
            value={form.cleanHistoryReport}
            options={affirmativeOptions}
            onChange={(val) => setForm({ ...form, cleanHistoryReport: val })} />
        </Col>
        <Col {...cols}>
          <RadioButton
            label="Does this car have any issues"
            value={form.hasIssue}
            options={affirmativeOptions}
            onChange={(val) => setForm({ ...form, hasIssue: val })} />
        </Col>
      </Row>
    </div>
  )
}

export default SellCarCondition
