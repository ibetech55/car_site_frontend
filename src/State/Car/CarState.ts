import { IFeaturesGrouped } from "../../Data/CarDtos/GetFeatureDtos";

export interface CarState {
    featuresGrouped: IFeaturesGrouped[];
    loading: boolean;
}

export const initialState: CarState = {
    featuresGrouped: [],
    loading: false
};
