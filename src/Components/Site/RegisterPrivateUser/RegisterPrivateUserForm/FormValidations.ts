import { IErrors } from ".";
import { CreatePrivateUserFormDto } from "../../../../Data/UserDtos/CreatePrivateUserDto";
import { isDateValid } from "../../../../Utils/IsDateValid";

export const formValidations = (
  form: CreatePrivateUserFormDto,
  confirmPassword: string
) => {
  const errors: IErrors = {};

  if (!form.firstName.trim()) {
    errors.firstName = "Please inform your first name";
  }
  if (!form.lastName.trim()) {
    errors.lastName = "Please inform your last name";
  }

  if (!form.email.trim()) {
    errors.email = "Please inform your e-mail";
  }
  if (!form.dateOfBirth.trim()) {
    errors.dateOfBirth = "Please inform your Date of birth";
  }
  if (form.dateOfBirth && !isDateValid(form.dateOfBirth)) {
    errors.dateOfBirth = "Invalid Date";
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
