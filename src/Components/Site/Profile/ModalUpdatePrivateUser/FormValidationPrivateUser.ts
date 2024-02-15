import { UpdatePrivateUserFormDto } from "../../../../Data/UserDtos/UpdateUserDto";
import { isDateValid } from "../../../../Utils/IsDateValid";


export interface IErrorsUpdatePrivateUser {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  street?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  phoneNumber?: string;
}

export const formValidationPrivateUser = (form: UpdatePrivateUserFormDto) => {
  const errors: IErrorsUpdatePrivateUser = {};

  if (!form.firstName.trim()) {
    errors.firstName = "Please inform your first name";
  }
  if (!form.lastName.trim()) {
    errors.lastName = "Please inform your last name";
  }

  if (!form.dateOfBirth.trim()) {
    errors.dateOfBirth = "Please inform your Date of birth";
  }
  if (form.dateOfBirth && !isDateValid(form.dateOfBirth)) {
    errors.dateOfBirth = "Invalid Date";
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
