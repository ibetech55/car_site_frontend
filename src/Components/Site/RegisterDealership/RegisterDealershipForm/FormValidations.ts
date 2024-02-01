import { IErrors } from ".";
import { CreateDealershipFormDto } from "../../../../Data/UserDtos/CreateDealershipDto";

export const formValidations = (
  form: CreateDealershipFormDto,
  confirmPassword: string
) => {
  const errors: IErrors = {};

  if (!form.contactName.trim()) {
    errors.contactName = "Please inform your contact name";
  }
  if (!form.dealershipName.trim()) {
    errors.dealershipName = "Please inform a Dealership Name";
  }

  if (!form.email.trim()) {
    errors.email = "Please inform an e-mail";
  }

  if (!form.password.trim()) {
    errors.password = "Please inform your password";
  }
  if (!confirmPassword.trim()) {
    errors.password = "Please inform your confirm password";
  }

  if (form.password && confirmPassword && form.password !== confirmPassword) {
    errors.password = "Passwords do not match";
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
