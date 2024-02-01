export interface CreatePrivateUserFormDto {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  password: string;
  street: string;
  state: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
  userImage?: File
}
