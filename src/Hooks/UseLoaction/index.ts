import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../State";
import {
  getCityList,
  getStateList,
  getZipCode,
} from "../../State/Loaction/LocationActions";

const useLocation = () => {
  const stateList = useSelector((state: RootState) => state.location.stateList);
  const cityList = useSelector((state: RootState) => state.location.cityList);
  const zipCodeData = useSelector((state: RootState) => state.location.zipCode);
  const dispatch = useDispatch<AppDispatch>();

  const handleGetStateList = async () => {
    await dispatch(getStateList());
  };

  const handleGetCityList = async (stateCode: string) => {
    await dispatch(getCityList(stateCode));
  };

  const handleGetZipCode = async (zipCode: string) => {
    await dispatch(getZipCode(zipCode));
  };

  return {
    stateList,
    handleGetStateList,
    handleGetCityList,
    cityList,
    handleGetZipCode,
    zipCodeData
  };
};

export default useLocation;
