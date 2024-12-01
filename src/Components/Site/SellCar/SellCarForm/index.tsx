import React, { useState } from 'react'
import { ICarImages, IErrors, ISellCarForm, ISellCarRequest } from '../../../../Data/CarDtos/SellCarDto';
import SellCarSteps from '../SellCarSteps';
import { Form, StepProps } from 'antd';
import SellCarDetails from '../SellCarDetails';
import SellCarPrice from '../SellCarPrice';
import SellCarCondition from '../SellCarCondition';
import SellCarImages from '../SellCarImages';
import SellCarFeatures from '../SellCarFeatures';
import SellCarPersonalInfo from '../SellCarPersonalInfo';
import SellCarButtons from '../SellCarButtons';
import { GetUserDto } from '../../../../Data/UserDtos/GetUserDto';
import { IFeaturesGrouped } from '../../../../Data/CarDtos/GetFeatureDtos';
import { formValidations } from './FormValidation';
import SellCarComments from '../SellCarComments';
import { IZipCode } from '../../../../Data/LocationDtos/LocationDtos';
import "./index.scss";

const initForm: ISellCarForm = {
    make: "",
    model: "",
    year: "",
    transmission: '',
    drivetrain: '',
    exteriorColor: '',
    interiorColor: '',
    engine: '',
    hasPayments: false,
    numberKeys: '',
    zipCode: '',
    mileage: '',
    numberOwners: '',
    price: '',
    hasIssue: false,
    cleanHistoryReport: false,
    accident: false,
    defaultImage: undefined,
    condition: '',
    features: [],
    comment: '',
    termsCondition: false,
    vin: '',
    state: '',
    city: '',
    streetAddress: ''
};

interface IProps {
    handleGetModelsListById: (id: string) => void;
    userData: GetUserDto;
    featuresGroupedData: IFeaturesGrouped[];
    handleSellCar: (values: ISellCarRequest) => Promise<boolean>;
    handleGetZipCode: (zipCode: string) => void;
    zipCodeData: IZipCode;
    loading: boolean;
}

const SellCarForm: React.FC<IProps> = ({ handleGetModelsListById, userData, featuresGroupedData, handleSellCar, handleGetZipCode }) => {
    const [current, setCurrent] = useState(0);
    const [form, setForm] = useState(initForm);
    const [carImages, setCarImages] = useState<ICarImages[]>([]);
    const [errors, setErrors] = useState<IErrors>({})
    const [items, setItems] = useState<StepProps[]>([
        {
            title: "Details",
            description: "Information about car",
        },
        {
            title: "Price",
            description: "Car Price",
        },
        {
            title: "Condition",
            description: "Conditon of car",
        },
        {
            title: "Images",
            description: "Upload your car pictures",
        },
        {
            title: "Features",
            description: "Select car features",
        },
        {
            title: "Comments",
            description: "Select car features",
        },
        {
            title: "Personal Information",
            description: "Information about seller",
        }
    ]);

    const setCurrentChange = (value: number) => {
        setCurrent(value);
    };

    const handleErrors = (formErros: IErrors) => {
        if (formErros.details) {
            items[0].status = "error";
        } else {
            delete items[0].status
        }

        if (formErros.price) {
            items[1].status = "error";
        } else {
            delete items[1].status
        }

        if (formErros.condition) {
            items[2].status = "error";
        } else {
            delete items[2].status
        }
        if (formErros.images) {
            items[3].status = "error";
        }
        else {
            delete items[3].status
        }

        if (formErros.personalInfo) {
            items[6].status = "error";
        }
        else {
            delete items[6].status
        }



        if (Object.keys(formErros).length > 0) {
            setItems([...items])
        }
        setErrors(formErros)
    }

    const handleNext = (value: number) => {
        setCurrent(value + 1);
    }
    const handlePrevious = (value: number) => setCurrent(value - 1)


    const handleSubmit = async () => {
        handleGetZipCode(form.zipCode)
        const { hasErros, formErros } = formValidations(form, carImages);
        if (!hasErros) {
            const request: ISellCarRequest = {
                ...form,
                carImages
            }
            await handleSellCar(request).then((data: boolean) => {
                if (data) {
                    setForm(initForm);
                    setCarImages([]);
                }
            })
        } else {
            handleErrors(formErros)
        }
    };

    return (
        <div className="sell-car-form">
            <div className="sell-car-form__steps">
                <SellCarSteps current={current} setCurrentChange={setCurrentChange} errors={errors} items={items} />
            </div>
            <div className="sell-car-form__forms">
                <div className="sell-car-form__forms-form">
                    <Form>
                        {current === 0 && (
                            <>
                                <SellCarDetails
                                    handleGetModelsListById={handleGetModelsListById}
                                    form={form}
                                    setForm={setForm}
                                    errors={errors.details}
                                />
                            </>
                        )}
                        {current === 1 && (
                            <>
                                <SellCarPrice
                                    error={errors.price}
                                    form={form}
                                    setForm={setForm} />
                            </>
                        )}
                        {current === 2 && (
                            <>
                                <SellCarCondition
                                    form={form}
                                    setForm={setForm}
                                    error={errors.condition}
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
                                    errors={errors.images}
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
                                <SellCarComments form={form}
                                    setForm={setForm} />
                            </>
                        )}
                        {current === 6 && (
                            <>
                                <SellCarPersonalInfo userData={userData} form={form}
                                    setForm={setForm}
                                    errors={errors.personalInfo}
                                />
                            </>
                        )}
                        <div className="sell-car-form__forms-btns">
                            <SellCarButtons
                                current={current}
                                handleNext={handleNext}
                                handlePrevious={handlePrevious}
                                handleSubmit={handleSubmit}
                            />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SellCarForm
