import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../State";
import { getMakeList, getModelsByMakeId } from "../../State/Brand/BrandActions";
import { checkModelsOptions } from "../../State/Brand/BrandSlice";

const useBrand = () => {
  const brandData = useSelector((state: RootState) => state.brand);
  const dispatch = useDispatch<AppDispatch>();

  const handleGetMakesList = async () => {
    await dispatch(getMakeList());
  };

  const handleGetModelsListById = async (id: string) => {
    if (!id) {
      dispatch(checkModelsOptions());
    } else {
      await dispatch(getModelsByMakeId(id));
    }
  };

  return {
    makesList: brandData.makes,
    loadingMakes: brandData.loadingMakes,
    handleGetMakesList,
    handleGetModelsListById,
    modelsList: brandData.models,
  };
};

export default useBrand;
