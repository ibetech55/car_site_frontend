export interface UpdateDealershipFormDto {
  contactName: string;
  dealershipName: string;
  phoneNumber: string;
  street: string;
  state: string;
  city: string;
  zipCode: string;
}

export interface UpdatePrivateUserFormDto {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  street: string;
  state: string;
  city: string;
  zipCode: string;
}

export interface UpdatePrivateUserDto {
  privateUser: {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  };
  user: {
    phoneNumber: string;
  };
  address: {
    state: string;
    city: string;
    street: string;
    zipCode: string;
  };
}

export interface UpdateDealershipDto {
  dealership: {
    id: string;
    dealershipName: string;
    contactName: string;
  };
  user: {
    phoneNumber: string;
  };
  address: {
    state: string;
    city: string;
    street: string;
    zipCode: string;
  };
}
