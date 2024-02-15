import { Col, Form, Row } from "antd";
import React, { useEffect } from "react";
import { GetUserDto } from "../../../../Data/UserDtos/GetUserDto";
import { handleFormChange } from "../../../../Utils/HandleFormChange";
import FormInput from "../../../Common/FormInput";
import { UpdatePrivateUserFormDto } from "../../../../Data/UserDtos/UpdateUserDto";
import { handleDateFormatMaskChange } from "../../../../Utils/handleDateFormatMaskChange";
import { formatDate } from "../../../../Utils/FormatDate";
import { IErrorsUpdatePrivateUser } from "./FormValidationPrivateUser";

interface IProps {
  userData: GetUserDto;
  form: UpdatePrivateUserFormDto;
  setForm: (form: UpdatePrivateUserFormDto) => void;
  errors: IErrorsUpdatePrivateUser
}



const ModalUpdatePrivateUser: React.FC<IProps> = ({
  userData,
  form,
  setForm,
  errors
}) => {
  const cols = { xs: 24, sm: 24, md: 6, lg: 6, xl: 6 };
  const cols2 = { xs: 24, sm: 24, md: 6, lg: 8, xl: 8 };

  useEffect(() => {
    setForm({
      firstName: userData.privateUser?.firstName as string,
      lastName: userData.privateUser?.lastName as string,
      phoneNumber: userData.phoneNumber,
      street: userData.address.street,
      state: userData.address.state,
      zipCode: userData.address.zipCode,
      city: userData.address.city,
      dateOfBirth: formatDate(userData.privateUser?.dateOfBirth as string),
    });
  }, []);

  return (
    <Form layout="vertical" onFinish={() => {}}>
      <Row gutter={[8, 8]} className="row-gutter-bottom">
        <Col {...cols2}>
          <FormInput
            id="firstName"
            name="firstName"
            label="First Name"
            value={form?.firstName}
            onChange={(e) => handleFormChange(e, form, setForm)}
            error={errors.firstName}
          />
        </Col>
        <Col {...cols2}>
          <FormInput
            id="lastName"
            name="lastName"
            label="Last Name"
            value={form.lastName}
            onChange={(e) => handleFormChange(e, form, setForm)}
            error={errors.lastName}
          />
        </Col>
        <Col {...cols2}>
          <FormInput
            id="dateOfBirth"
            name="dateOfBirth"
            type="dateOfBirth"
            label="Date of Birth  (MM/DD/YYYY)"
            value={form.dateOfBirth}
            onChange={(e) =>
              setForm({
                ...form,
                dateOfBirth: handleDateFormatMaskChange(e.target.value),
              })
            }
            error={errors.dateOfBirth}
          />
        </Col>
      </Row>
      <Row gutter={[8, 8]} className="row-gutter-bottom">
        <Col {...cols}>
          <FormInput
            id="street"
            name="street"
            type="street"
            label="Street"
            value={form.street}
            onChange={(e) => handleFormChange(e, form, setForm)}
            error={errors.street}
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
            error={errors.state}
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
            error={errors.city}
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
            error={errors.zipCode}
          />
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col {...cols}>
          <FormInput
            id="phoneNumber"
            name="phoneNumber"
            type="phoneNumber"
            label="Phone Number"
            value={form.phoneNumber}
            onChange={(e) => handleFormChange(e, form, setForm)}
            error={errors.phoneNumber}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default ModalUpdatePrivateUser;
