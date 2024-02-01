export interface CreateDealershipFormDto {
  contactName: string;
  dealershipName: string;
  email: string;
  password: string;
  street: string;
  state: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
  dealershipLogo?: File
}
