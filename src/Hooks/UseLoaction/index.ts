import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../State";
import {
  getCityList,
  getStateList,
} from "../../State/Loaction/LocationActions";

const useLocation = () => {
  const stateList = useSelector((state: RootState) => state.location.stateList);
  const cityList = useSelector((state: RootState) => state.location.cityList);
  const dispatch = useDispatch<AppDispatch>();

  const handleGetStateList = async () => {
    await dispatch(getStateList());
  };

  const handleGetCityList = async (stateCode: string) => {
    await dispatch(getCityList(stateCode));
  };

  return {
    stateList,
    handleGetStateList,
    handleGetCityList,
    cityList
  };
};

export default useLocation;
