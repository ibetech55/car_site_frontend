import { Col, Form, Row } from "antd";
import React, { useEffect } from "react";
import { GetUserDto } from "../../../../Data/UserDtos/GetUserDto";
import { handleFormChange } from "../../../../Utils/HandleFormChange";
import FormInput from "../../../Common/FormInput";
import { UpdateUserDto } from "../../../../Data/UserDtos/UpdateUserDto";

interface IProps {
  userData: GetUserDto;
  form: UpdateUserDto;
  setForm: (form: UpdateUserDto) => void;
}


const ModalUpdateDealership: React.FC<IProps> = ({ userData, form, setForm }) => {

  const cols = { xs: 24, sm: 24, md: 6, lg: 6, xl: 6 };
  const cols2 = { xs: 24, sm: 24, md: 6, lg: 8, xl: 8 };

  useEffect(() => {
    setForm({
      contactName: userData.dealership?.contactName as string,
      dealershipName: userData.dealership?.dealershipName as string,
      phoneNumber: userData.phoneNumber,
      street: userData.address.street,
      state: userData.address.state,
      zipCode: userData.address.zipCode,
      city: userData.address.city,
    });
    }, []);
  return (
      <Form layout="vertical" onFinish={() => {}}>
        <Row gutter={[8, 8]} className="row-gutter-bottom">
          <Col {...cols2}>
            <FormInput
              id="contactName"
              name="contactName"
              label="Contact Name"
              value={form?.contactName}
              onChange={(e) => handleFormChange(e, form, setForm)}
              // error={errors.contactName}
            />
          </Col>
          <Col {...cols2}>
            <FormInput
              id="dealershipName"
              name="dealershipName"
              label="Dealership Name"
              value={form.dealershipName}
              onChange={(e) => handleFormChange(e, form, setForm)}
              // error={errors.dealershipName}
            />
          </Col>
          <Col {...cols2}>
            <FormInput
              id="phoneNumber"
              name="phoneNumber"
              type="phoneNumber"
              label="Phone Number"
              value={form.phoneNumber}
              onChange={(e) => handleFormChange(e, form, setForm)}
              // error={errors.phoneNumber}
            />
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col {...cols}>
            <FormInput
              id="street"
              name="street"
              type="street"
              label="Street"
              value={form.street}
              onChange={(e) => handleFormChange(e, form, setForm)}
              // error={errors.street}
            />
          </Col>
          <Col {...cols}>
            <FormInput
              id="state"
              name="state"
              type="state"
              label="State"
              value={form.state}
              onChange={(e) => handleFormChange(e, form, setForm)}
              // error={errors.state}
            />
          </Col>
          <Col {...cols}>
            <FormInput
              id="city"
              name="city"
              type="city"
              label="City"
              value={form.city}
              onChange={(e) => handleFormChange(e, form, setForm)}
              // error={errors.city}
            />
          </Col>
          <Col {...cols}>
            <FormInput
              id="zipCode"
              name="zipCode"
              type="zipCode"
              label="Zip Code"
              value={form.zipCode}
              onChange={(e) => handleFormChange(e, form, setForm)}
              // error={errors.zipCode}
            />
          </Col>
        </Row>
      </Form>
  );
};

export default ModalUpdateDealership;
