import { GetByAccessCodeTokenDto } from "../../Data/UserDtos/GetByAccessCodeTokenDto";
import { GetLoggedUserDto } from "../../Data/UserDtos/GetLoggedUserDto";
import { GetUserDto } from "../../Data/UserDtos/GetUserDto";

export const initUser: GetUserDto = {
  id: "",
  email: "",
  active: false,
  createdAt: "",
  address: {
    id: "",
    state: "",
    city: "",
    street: "",
    zipCode: "",
  },
  phoneNumber: "",
  userType: "",
  accountStatus: "",
  dealership: {
    id: "",
    dealershipName: "",
    dealershipLogo: "",
    contactName: "",
  },
  privateUser: {
    id: "",
    firstName: "",
    lastName: "",
    userImage: "",
    dateOfBirth: "",
  },
};

export const accessCodeTokenResponse:GetByAccessCodeTokenDto = {
  userId: "",
  accountStatus: ""
}

export const initGetLoggedUser:GetLoggedUserDto = {
  id: "",
  active: false,
  accountStatus: "",
  userType: ""
}

export interface UserState {
  loading: boolean;
  errorRegisterUser: string;
  createdUserToken: string;
  confirmCreatedUser: boolean;
  user: GetUserDto;
  accessCodeTokenResponse:GetByAccessCodeTokenDto;
  confirmAccessCodeResponse: boolean;
  confirmAccessCodeError: string;
  loggedUser:GetLoggedUserDto;
}



export const initialState: UserState = {
  loading: false,
  errorRegisterUser: "",
  createdUserToken: "",
  confirmCreatedUser: false,
  user: initUser,
  accessCodeTokenResponse:accessCodeTokenResponse,
  confirmAccessCodeResponse: false,
  confirmAccessCodeError: '',
  loggedUser: initGetLoggedUser
};
