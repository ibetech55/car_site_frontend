import { ISelect } from "../../Data/Common/ISelect";
import {
} from "../../Data/LocationDtos/LocationDtos";

export interface LocationState {
  stateList: ISelect[];
  cityList: ISelect[];
  loading: boolean;
}

export const initialState: LocationState = {
  stateList: [],
  cityList: [],
  loading: false,
};
