import { useEffect, useState } from "react";
import DefaultButton from "../../Components/Common/DefaultButton";
import HeaderText from "../../Components/Common/HeaderText";
import ModalUpdateDealership from "../../Components/Site/Profile/ModalUpdateDealership";
import ProfileDetails from "../../Components/Site/Profile/ProfileDetails";
import UserDetails from "../../Components/Site/Profile/UserDetails";
import { WithAuth } from "../../Components/Template/WithAuth";
import { DEALERSHIP_ACCOUNT } from "../../Configs/Constants/UserTypes";
import SiteModal from "../../Components/Common/SiteModal";
import {
  UpdateDealershipFormDto,
  UpdatePrivateUserFormDto,
} from "../../Data/UserDtos/UpdateUserDto";
import useUser from "../../Hooks/UseUser";
import ModalUpdatePrivateUser from "../../Components/Site/Profile/ModalUpdatePrivateUser";
import { formatDate } from "../../Utils/FormatDate";
import LoadingComponent from "../../Components/Common/Loading";
import {
  IErrorsUpdatePrivateUser,
  formValidationPrivateUser,
} from "../../Components/Site/Profile/ModalUpdatePrivateUser/FormValidationPrivateUser";
import useClearError from "../../Utils/UseClearError";
import {
  IErrorsUpdateDealership,
  formValidationDealership,
} from "../../Components/Site/Profile/ModalUpdateDealership/FormValidationDealership";
import ChangePasswordForm from "../../Components/Site/Profile/ChangePasswordForm";
import { ChangePasswordFormDto, IErrorsPasswordForm } from "../../Data/UserDtos/PasswordDtos";
import { formValidationPassword } from "../../Components/Site/Profile/ChangePasswordForm/FormValidationPassword";

const initFormDealership: UpdateDealershipFormDto = {
  contactName: "",
  dealershipName: "",
  phoneNumber: "",
  street: "",
  state: "",
  city: "",
  zipCode: "",
};

const initFormPrivateUser: UpdatePrivateUserFormDto = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  street: "",
  state: "",
  city: "",
  zipCode: "",
  dateOfBirth: "",
};

const initPasswordForm: ChangePasswordFormDto = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: ""
}

const ProfilePage: React.FC = () => {
  const [openModalUpdateUser, setOpenModalUpdateUser] = useState(false);
  const [openPasswordModal, setPassordModal] = useState(false);
  const [formPassword, setFormPassword] = useState<ChangePasswordFormDto>(initPasswordForm)
  const [errorsPrivateUser, setErrorsPrivateUser] =
    useState<IErrorsUpdatePrivateUser>({});
  const [errorsDealership, setErrorsDealership] =
    useState<IErrorsUpdateDealership>({});
    const [errorsPasswordForm, setErrorsPasswordForm] =
    useState<IErrorsPasswordForm>({});

  const [formDealership, setFormDealership] =
    useState<UpdateDealershipFormDto>(initFormDealership);
  const [formPrivateUser, setFormPrivateUser] =
    useState<UpdatePrivateUserFormDto>(initFormPrivateUser);
  const {
    handleGetUserById,
    loggedUser,
    userData,
    handleUpdatePrivateUser,
    loading,
    handleUpdateDealership,
    handleUpdatePassword
  } = useUser();

  const handleSubmitPUser = () => {
    setErrorsPrivateUser({});
    const { hasErros, formErros } = formValidationPrivateUser(formPrivateUser);
    if (!hasErros) {
      handleUpdatePrivateUser(
        userData.privateUser?.id as string,
        formPrivateUser
      );
      setOpenModalUpdateUser(false);
    } else {
      setErrorsPrivateUser(formErros);
    }
  };

  const handleSubmitDealer = () => {
    setErrorsDealership({});
    const { hasErros, formErros } = formValidationDealership(formDealership);
    if (!hasErros) {
      handleUpdateDealership(userData.dealership?.id as string, formDealership);
      setOpenModalUpdateUser(false);
    } else {
      setErrorsDealership(formErros);
    }
  };

  const handleSubmitPass = () => {
    setErrorsPasswordForm({});
    const { hasErros, formErros } = formValidationPassword(formPassword);
    if (!hasErros) {
      handleUpdatePassword(formPassword);
      setPassordModal(false);
    } else {
      setErrorsPasswordForm(formErros);
    }
  }

  useClearError({
    action: () => setErrorsPrivateUser({}),
    errorObject: errorsPrivateUser,
  });
  useClearError({
    action: () => setErrorsDealership({}),
    errorObject: errorsDealership,
  });
  useClearError({
    action: () => setErrorsPasswordForm({}),
    errorObject: errorsPasswordForm,
  });

  useEffect(() => {
    handleGetUserById(loggedUser.id);
  }, []);

  return (
    <>
      <div className="profile-page">
        <LoadingComponent loading={loading} />
        <HeaderText
          text={
            userData.userType === DEALERSHIP_ACCOUNT
              ? "Dealership Profile"
              : "User Profile"
          }
        />
        {userData.userType === DEALERSHIP_ACCOUNT ? (
          <ProfileDetails
            dealershipName={userData.dealership?.dealershipName}
            contactName={userData.dealership?.contactName}
            email={userData.email}
            phoneNumber={userData.phoneNumber}
            profileImage={userData.dealership?.dealershipLogo}
            userType={userData.userType}
          />
        ) : (
          <ProfileDetails
            firstName={userData.privateUser?.firstName}
            lastName={userData.privateUser?.lastName}
            email={userData.email}
            phoneNumber={userData.phoneNumber}
            profileImage={userData.dealership?.dealershipLogo}
            userType={userData.userType}
            dateOfBirth={userData.privateUser?.dateOfBirth}
          />
        )}
        <UserDetails
          addressData={userData.address}
          createdAt={userData.createdAt as string}
          active={userData.active}
          status={userData.accountStatus}
          type={userData.userType}
        />
        <div className="profile-page__update-buttons">
          <DefaultButton
            title="Update User"
            onClick={() => setOpenModalUpdateUser(true)}
          />
          <DefaultButton
            title="Change Password"
            onClick={() => setPassordModal(true)}
          />
        </div>
      </div>
      {userData.userType === DEALERSHIP_ACCOUNT ? (
        <SiteModal
          handleConfirm={handleSubmitDealer}
          open={openModalUpdateUser}
          onCancel={() => {
            setFormDealership({
              contactName: userData.dealership?.contactName as string,
              dealershipName: userData.dealership?.dealershipName as string,
              phoneNumber: userData.phoneNumber,
              street: userData.address.street,
              state: userData.address.state,
              zipCode: userData.address.zipCode,
              city: userData.address.city,
            });
            setOpenModalUpdateUser(false);
          }}
          title="Update User"
          width={900}
        >
          <ModalUpdateDealership
            userData={userData}
            form={formDealership}
            setForm={setFormDealership}
            errors={errorsDealership}
          />
        </SiteModal>
      ) : (
        <SiteModal
          open={openModalUpdateUser}
          onCancel={() => {
            setFormPrivateUser({
              firstName: userData.privateUser?.firstName as string,
              lastName: userData.privateUser?.lastName as string,
              phoneNumber: userData.phoneNumber,
              street: userData.address.street,
              state: userData.address.state,
              zipCode: userData.address.zipCode,
              city: userData.address.city,
              dateOfBirth: formatDate(
                userData.privateUser?.dateOfBirth as string
              ),
            });
            setOpenModalUpdateUser(false);
          }}
          title="Update User"
          width={900}
          handleConfirm={handleSubmitPUser}
        >
          <ModalUpdatePrivateUser
            userData={userData}
            form={formPrivateUser}
            setForm={setFormPrivateUser}
            errors={errorsPrivateUser}
          />
        </SiteModal>
      )}
      <SiteModal open={openPasswordModal} onCancel={() => setPassordModal(false)} title="Change Password" handleConfirm={handleSubmitPass}>
        <ChangePasswordForm form={formPassword} setForm={setFormPassword} errors={errorsPasswordForm} />
      </SiteModal>
    </>
  );
};

export const Profile = WithAuth(ProfilePage);
