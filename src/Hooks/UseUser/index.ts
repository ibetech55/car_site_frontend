import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../State";
import {
  createDealership,
  createPrivateUser,
} from "../../State/User/UserActions";
import { CreatePrivateUserFormDto } from "../../Data/UserDtos/CreatePrivateUserDto";
import { CreateDealershipFormDto } from "../../Data/UserDtos/CreateDealershipDto";
import { formatDateIso } from "../../Utils/FormatDateIso";

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

  const handleCreateDealership = async (
    values: CreateDealershipFormDto
  ) => {
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

  return {
    loadingUser: userData.loading,
    handleCreatePrivateUser,
    handleCreateDealership,
    registerUserError: userData.error.registerUser
  };
};

export default useUser;
