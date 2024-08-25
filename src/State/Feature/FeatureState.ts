import { IFeaturesGrouped } from "../../Data/CarDtos/GetFeatureDtos";

export interface FeatureState {
    featuresGrouped: IFeaturesGrouped[];
    loading: boolean;
}

export const initialState: FeatureState = {
    featuresGrouped: [],
    loading: false
};
