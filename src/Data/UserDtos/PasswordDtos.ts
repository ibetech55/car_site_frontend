export interface ChangePasswordFormDto {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export interface ChangePasswordDto {
    id: string;
    currentPassword: string;
    newPassword: string;
}

export interface IErrorsPasswordForm {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
}