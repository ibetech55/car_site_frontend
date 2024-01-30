import { ISelect } from "../../Data/Common/ISelect";

export interface BrandState {
  makes: ISelect[];
  models: ISelect[];
  loadingMakes: boolean;
  loadingModels: boolean;
}

export const initialState: BrandState = {
  makes: [],
  models: [],
  loadingMakes: false,
  loadingModels: false
};
