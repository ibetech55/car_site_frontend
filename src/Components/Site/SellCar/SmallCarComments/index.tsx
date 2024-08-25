import React from 'react'
import SectionText from '../../../Common/SectionText'
import InformationText from '../../../Common/InformationText'
import Label from '../../../Common/Label';
import { ISellCarForm } from '../../../../Data/CarDtos/SellCarDto';
import { Input } from 'antd';

const { TextArea } = Input;

interface IProps {
  form: ISellCarForm;
  setForm: (form: ISellCarForm) => void;
}

const SmallCarComments: React.FC<IProps> = ({ form, setForm }) => {
  return (
    <div>
      <SectionText text='Comments' />
      <InformationText text='Tell potential buyers what makes your car special. New tires? Recent oil change? Let them know all about it. Being upfront about any issues will also build trust with buyers.' />
      <div>
        <Label label='Comments' />
        <TextArea rows={6} showCount maxLength={2000} onChange={(e) => setForm({ ...form, comment: e.target.value })} value={form.comment} />
      </div>
    </div>
  )
}

export default SmallCarComments
