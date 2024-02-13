import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../State";
import {
  confirmAccessCode,
  confirmCreatedUser,
  createDealership,
  createPrivateUser,
  getByAccessCodeToken,
  getUserById,
} from "../../State/User/UserActions";
import { CreatePrivateUserFormDto } from "../../Data/UserDtos/CreatePrivateUserDto";
import { CreateDealershipFormDto } from "../../Data/UserDtos/CreateDealershipDto";
import { formatDateIso } from "../../Utils/FormatDateIso";
import useClearError from "../../Utils/UseClearError";
import { clearAccessCodeError, clearErrorRegisterUser } from "../../State/User/UserSlice";
import { GetUserDto } from "../../Data/UserDtos/GetUserDto";

const useUser = () => {
  const userData = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  const handleCreatePrivateUser = async (values: CreatePrivateUserFormDto) => {
    const formData = new FormData();
    formData.set("firstName", values.firstName);
    formData.set("lastName", values.lastName);
    formData.set("dateOfBirth", formatDateIso(values.dateOfBirth));
    formData.set(
      "user",
      JSON.stringify({
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        address: {
          state: values.state,
          city: values.city,
          street: values.street,
          zipCode: values.zipCode,
        },
      })
    );
    formData.append("userImage", values.userImage as File);

    await dispatch(createPrivateUser(formData));
  };

  const handleCreateDealership = async (values: CreateDealershipFormDto) => {
    const formData = new FormData();
    formData.set("contactName", values.contactName);
    formData.set("dealershipName", values.dealershipName);
    formData.set("email", values.email);
    formData.set(
      "user",
      JSON.stringify({
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        address: {
          state: values.state,
          city: values.city,
          street: values.street,
          zipCode: values.zipCode,
        },
      })
    );
    formData.append("dealershipLogo", values.dealershipLogo as File);

    await dispatch(createDealership(formData));
  };

  const handleConfirmCreatedUser = async (token: string) => {
    await dispatch(confirmCreatedUser(token));
  };

  const handleGetUserById = async (id: string): Promise<GetUserDto> => {
    const data = await dispatch(getUserById(id)).unwrap();
    return data
  };

  const handleGetByAccessCodeToken = async (token: string) => {
    await dispatch(getByAccessCodeToken(token)).unwrap();
  };

  const handleConfirmAccessCode = async (
    accessCode: string,
    accessCodeToken: string
  ) => {
    await dispatch(
      confirmAccessCode({ id: userData.accessCodeTokenResponse.userId, accessCode, accessCodeToken })
    );
  };

  useClearError({
    action: () => dispatch(clearErrorRegisterUser()),
    errorString: [userData.errorRegisterUser],
  });

  useClearError({
    action: () => dispatch(clearAccessCodeError()),
    errorString: [userData.confirmAccessCodeError],
  });



  return {
    loadingUser: userData.loading,
    handleCreatePrivateUser,
    handleCreateDealership,
    registerUserError: userData.errorRegisterUser,
    confirmCreatedUser: userData.confirmCreatedUser,
    handleConfirmCreatedUser,
    userData: userData.user,
    handleGetUserById,
    handleGetByAccessCodeToken,
    accessCodeTokenResponse: userData.accessCodeTokenResponse,
    confirmAccessCodeError: userData.confirmAccessCodeError,
    confirmAccessCodeResponse: userData.confirmAccessCodeResponse,
    handleConfirmAccessCode,
  };
};

export default useUser;
