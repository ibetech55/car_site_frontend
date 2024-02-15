import { UpdateDealershipFormDto } from "../../../../Data/UserDtos/UpdateUserDto";

export interface IErrorsUpdateDealership {
    contactName?: string;
    dealershipName?: string;
    street?: string;
    state?: string;
    city?: string;
    zipCode?: string;
    phoneNumber?: string;
  }

export const formValidationDealership = (
  form: UpdateDealershipFormDto,
) => {
  const errors: IErrorsUpdateDealership = {};

  if (!form.contactName.trim()) {
    errors.contactName = "Please inform your contact name";
  }
  if (!form.dealershipName.trim()) {
    errors.dealershipName = "Please inform a Dealership Name";
  }

  if (!form.street.trim()) {
    errors.street = "Please inform your street address";
  }

  if (!form.city.trim()) {
    errors.city = "Please inform your city";
  }

  if (!form.state.trim()) {
    errors.state = "Please inform your state";
  }

  if (!form.zipCode.trim()) {
    errors.zipCode = "Please inform your zip code";
  }

  if (!form.phoneNumber.trim()) {
    errors.phoneNumber = "Please inform your phone number";
  }

  return {
    formErros: errors,
    hasErros: Object.keys(errors).length !== 0,
  };
};
