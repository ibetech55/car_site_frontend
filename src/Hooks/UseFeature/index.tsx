import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../State";
import { getFeaturesGrouped } from "../../State/Feature/FeatureAction";

const useFeature = () => {
    const featureData = useSelector((state: RootState) => state.feature);
    const dispatch = useDispatch<AppDispatch>();

    const handleGetFeaturesGrouped = async () => {
        await dispatch(getFeaturesGrouped());
    };

    return {
        featuresGroupedData: featureData.featuresGrouped,
        handleGetFeaturesGrouped
    };
};

export default useFeature;
