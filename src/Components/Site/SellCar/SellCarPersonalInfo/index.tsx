import React from 'react'
import SectionText from '../../../Common/SectionText'
import { Col, Row, Typography } from 'antd'
import FormInput from '../../../Common/FormInput'
import DefaultCheckbox from '../../../Common/DefaultCheckBox';
import { GetUserDto } from '../../../../Data/UserDtos/GetUserDto';
import { PRIVATE_USER_ACCOUNT, DEALERSHIP_ACCOUNT } from '../../../../Configs/Constants/UserTypes';
import { IPersonalInfoErrors, ISellCarForm } from '../../../../Data/CarDtos/SellCarDto';
import "./index.scss";

const cols = { xs: 24, sm: 24, md: 24, lg: 16, xl: 16 };

interface IProps {
  userData: GetUserDto;
  form: ISellCarForm;
  setForm: (form: ISellCarForm) => void;
  errors?: IPersonalInfoErrors;
}

const SellCarPersonalInfo: React.FC<IProps> = ({ userData, form, setForm, errors }) => {
  const firstName = userData.privateUser?.firstName;
  const lastName = userData.privateUser?.lastName;
  const dealershipName = userData.dealership?.dealershipName;
  const phoneNumber = userData.phoneNumber;
  const email = userData.email;
  const location = `${userData.address.city}, ${userData.address.state}`;

  return (
    <div className="sell-car-personal-info">
      <SectionText text="Personal Information" />
      <Row gutter={[40, 40]}>
        {
          userData.userType === PRIVATE_USER_ACCOUNT && (
            <>
              <Col {...cols}>
                <FormInput label="First name" onChange={() => { }} value={firstName ?? ""} />
              </Col>
              <Col {...cols}>
                <FormInput label="Last name" onChange={() => { }} value={lastName ?? ""} />
              </Col>
            </>
          )
        }
        {
          userData.userType === DEALERSHIP_ACCOUNT && (
            <>
              <Col {...cols}>
                <FormInput label="Dealership Name" onChange={() => { }} value={dealershipName ?? ""} disabled />
              </Col>
            </>
          )
        }
        <Col {...cols}>
          <FormInput label="Phone Number" onChange={() => { }} value={phoneNumber ?? ""} disabled />
        </Col>
        <Col {...cols}>
          <FormInput label="Location" onChange={() => { }} value={location ?? ""} disabled />
        </Col>
        <Col {...cols}>
          <FormInput label="Email" onChange={() => { }} value={email ?? ""} disabled />
        </Col>
        <Col {...cols}>
          <FormInput label="Vin" onChange={(e) => setForm({ ...form, vin: e.target.value })} value={form.vin} error={errors?.vin} />
        </Col>
        <Col {...cols}>
          <DefaultCheckbox text="Terms and Condition" value={form.termsCondition} onChange={(e) => setForm({ ...form, termsCondition: e.target.checked })} />
          <Typography className='sell-car-personal-info__tc-error error-text'>{errors?.termsCondition}</Typography>
          <div className="sell-car-personal-info__terms-condition">
            <Typography>By clicking the button below, you agree to the <a href="#" style={{ display: "inline" }}>Instant Offer Terms and Conditions</a> and <a href="#" style={{ display: "inline" }}>Privacy Statement</a>.</Typography>
            <Typography>By clicking the button below, I understand that Cars.com Instant Offers are:
              <ol>
                <li>Conditional offers from individual dealers, not Cars.com;</li>
                <li>Not always available;</li>
                <li>Valid for 3 days and subject to vehicle inspection; and</li>
                <li>May not reflect the highest offer available.</li>
              </ol>
              I agree that Cars.com and its dealers, sellers, and/or partners may communicate with me by text or phone (which may include marketing and by autodialer) and that some dealers may use automated technology. Calls may be prerecorded. My consent to these terms is not a condition of any vehicle sale or purchase.</Typography>
          </div>

        </Col>
      </Row>
    </div>
  )
}

export default SellCarPersonalInfo
