import { ISelect } from "../../Data/Common/ISelect";
import { IZipCode } from "../../Data/LocationDtos/LocationDtos";

export interface LocationState {
  stateList: ISelect[];
  cityList: ISelect[];
  loading: boolean;
  zipCode: IZipCode;
}

export const initialState: LocationState = {
  stateList: [],
  cityList: [],
  loading: false,
  zipCode: {
    zip: "",
    longitude: 0,
    latitude: 0,
    city: "",
    state: "",
    country: "",
    stateAbbreviation: ""
  }
};
