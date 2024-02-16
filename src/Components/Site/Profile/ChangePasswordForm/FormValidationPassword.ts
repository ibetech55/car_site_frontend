import { ChangePasswordFormDto, IErrorsPasswordForm } from "../../../../Data/UserDtos/PasswordDtos";

export const formValidationPassword = (
  form: ChangePasswordFormDto,
) => {
  const errors: IErrorsPasswordForm = {};

  if (!form.currentPassword.trim()) {
    errors.currentPassword = "Please inform your current password";
  }
  if (!form.newPassword.trim()) {
    errors.newPassword = "Please inform a new password";
  }

  if (!form.confirmPassword.trim()) {
    errors.confirmPassword = "Please inform your confirm password";
  }

  if (form.newPassword && form.confirmPassword && form.newPassword !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return {
    formErros: errors,
    hasErros: Object.keys(errors).length !== 0,
  };
};
