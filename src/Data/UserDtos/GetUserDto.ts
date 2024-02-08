export interface GetUserDto {
  id: string;
  email: string;
  active: boolean;
  createdAt: string | Date;
  address: GetAddressDto;
  phoneNumber: string;
  userType: string;
  accountStatus: string;
  privateUser?: Omit<GetPrivateUserDto, "user">;
  dealership?: Omit<GetDealershipDto, "user">;
}

export interface GetPrivateUserDto {
  id: string;
  firstName: string;
  lastName: string;
  userImage: string;
  dateOfBirth: string;
  user: GetUserDto;
}

export interface GetDealershipDto {
  id: string;
  dealershipName: string;
  dealershipLogo: string;
  contactName: string;
  user: GetUserDto;
}

export interface GetAddressDto {
  id: string;
  state: string;
  city: string;
  street: string;
  zipCode: string;
}
