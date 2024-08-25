import React from 'react'
import { IFeaturesGrouped } from '../../../../Data/CarDtos/GetFeatureDtos'
import { Col, Row } from 'antd'
import { ISellCarForm } from '../../../../Data/CarDtos/SellCarDto'
import Label from '../../../Common/Label'
import SectionText from '../../../Common/SectionText'
import DefaultCheckbox from '../../../Common/DefaultCheckBox'
import "./index.scss"
import InformationText from '../../../Common/InformationText'

interface IProps {
  features: IFeaturesGrouped[]
  form: ISellCarForm,
  setForm: (form: ISellCarForm) => void;
}

const cols = { xs: 24, sm: 12, md: 12, lg: 10, xl: 10 };

const SellCarFeatures: React.FC<IProps> = ({ features, form, setForm }) => {
  const handleChecked = (feature: string) => {
    const featuresArr = form.features;
    if (!featuresArr.includes(feature)) {
      featuresArr.push(feature)
    } else {
      const index = featuresArr.indexOf(feature);
      featuresArr.splice(index, 1);
    }
    setForm({ ...form, features: featuresArr })
  }

  return (
    <div className="sell-car-features">
      <SectionText text="Features" />
      <InformationText text="Take some time to verify features that come with your car. Some selections will adjust the estimated value of your car." />
      <Row>
        {features.map((feature, index) => (
          <Col {...cols} key={index} className="sell-car-features__col">
            <div className="sell-car-features__label">
              <Label label={feature.featureType} />
            </div>
            {feature.features.map((feat => (
              <DefaultCheckbox text={feat} onChange={() => handleChecked(feat)} key={index} />
            )))}
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default SellCarFeatures
