export interface IGetStateList {
  name: string;
  stateCode: string;
}

export interface IGetCityList {
  name: string;
  longitude: string;
  latitude: string;
}

export interface IZipCode {
  zip: string;
  longitude: number;
  latitude: number;
  city: string;
  state: string;
  country: string;
  stateAbbreviation: string;
}
