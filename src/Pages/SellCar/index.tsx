import React, { useEffect, useState } from 'react'
import SellCarSteps from '../../Components/Site/SellCar/SellCarSteps';
import { Form } from 'antd';
import SellCarDetails from '../../Components/Site/SellCar/SellCarDetails';
import SellCarPrice from '../../Components/Site/SellCar/SellCarPrice';
import SellCarCondition from '../../Components/Site/SellCar/SellCarCondition';
import SellCarUser from '../../Components/Site/SellCar/SellCarUser';
import SellCarImages from '../../Components/Site/SellCar/SellCarImages';
import SellCarButtons from '../../Components/Site/SellCar/SellCarButtons';
import SellCarFeatures from '../../Components/Site/SellCar/SellCarFeatures';
import "./index.scss"
import useBrand from '../../Hooks/UseBrand';
import { ISellCarForm } from '../../Data/CarDtos/SellCarDto';
import useFeature from '../../Hooks/UseFeature';
export interface ICarImages {
  uid: string;
  name: string;
  previewUrl: string;
  id: number;
}

const initForm: ISellCarForm = {
  make: "",
  model: "",
  year: "",
  transmission: '',
  drivetrain: '',
  exteriorColor: '',
  interiorColor: '',
  engine: '',
  hasPayments: 'no',
  numberKeys: '',
  zipCode: '',
  mileage: '',
  numberOwners: '',
  price: '',
  hasIssue: 'no',
  cleanHistoryReport: 'no',
  accident: 'no',
  defaultImage: undefined,
  condition: '',
  features: []
};

const SellCarPage = () => {
  const { handleGetFeaturesGrouped, featuresGroupedData } = useFeature();

  const { handleGetMakesList, handleGetModelsListById } = useBrand()
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState(initForm);
  const [carImages, setCarImages] = useState<ICarImages[]>([]);

  const setCurrentChange = (value: number) => {
    setCurrent(value);
  };

  const handleNext = (value: number) => setCurrent(value + 1)
  const handlePrevious = (value: number) => setCurrent(value - 1)
  const handleSubmit = () => {
    const requestData = {
      ...form,
      carImages
    }
    console.log(requestData)
  }

  useEffect(() => {
    handleGetFeaturesGrouped();
  }, [])

  return (
    <div className="sell-car-page">
      <div className="sell-car-page__steps">
        <SellCarSteps current={current} setCurrentChange={setCurrentChange} />
      </div>
      <div className="sell-car-page__forms">
        <div className="sell-car-page__forms-form">
          <Form>
            {current === 0 && (
              <>
                <SellCarDetails
                  handleGetMakesList={handleGetMakesList}
                  handleGetModelsListById={handleGetModelsListById}
                  errorEmail={''}
                  form={form}
                  setForm={setForm} />
              </>
            )}
            {current === 1 && (
              <>
                <SellCarPrice
                  form={form}
                  setForm={setForm} />
              </>
            )}
            {current === 2 && (
              <>
                <SellCarCondition
                  form={form}
                  setForm={setForm}
                />
              </>
            )}
            {current === 3 && (
              <>
                <SellCarImages
                  form={form}
                  setForm={setForm}
                  carImages={carImages}
                  setCarImages={setCarImages}
                />
              </>
            )}
            {current === 4 && (
              <>
                <SellCarFeatures
                  features={featuresGroupedData}
                  form={form}
                  setForm={setForm}
                />
              </>
            )}
            {current === 5 && (
              <>
                <SellCarUser />
              </>
            )}
            <div className="sell-car-page__forms-btns">
              <SellCarButtons
                current={current}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                handleSubmit={handleSubmit} />
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SellCarPage
