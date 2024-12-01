
export interface ISellCarForm {
    make: string;
    model: string;
    year: string;
    transmission: string;
    drivetrain: string;
    exteriorColor: string;
    interiorColor: string;
    engine: string;
    hasPayments: boolean;
    numberKeys: string;
    zipCode: string;
    mileage: string;
    numberOwners: string;
    price: string;
    hasIssue: boolean;
    cleanHistoryReport: boolean;
    accident: boolean;
    defaultImage: any;
    condition: string;
    features: string[]
    comment: string;
    termsCondition: boolean;
    vin: string;
    state: string;
    city: string;
    streetAddress: string;
}

export interface ICarImages {
    previewUrl: string;
    id: number;
    file: File
}

export interface IErrors {
    details?: IDetailErrors
    price?: string;
    condition?: string;
    images?: IImageErros;
    personalInfo?: IPersonalInfoErrors;
}

export interface IImageErros {
    carImages?: string;
    defaulImage?: string;
}

export interface IDetailErrors {
    make?: string;
    model?: string;
    year?: string;
    transmission?: string;
    drivetrain?: string;
    engine?: string;
    exteriorColor?: string;
    interiorColor?: string;
    mileage?: string;
    streetAddress?: string;
    zipCode?: string;
    state?: string;
    city?: string;
    numberOwners?: string;
    hasPayments?: string;
    numberKeys?: string;
    vin?: string;
}

export interface IPersonalInfoErrors {
    termsCondition?: string;
    vin?: string;
}

export interface ISellCarRequest {
    make: string;
    model: string;
    year: string;
    transmission: string;
    drivetrain: string;
    exteriorColor: string;
    interiorColor: string;
    engine: string;
    hasPayments: boolean;
    numberKeys: string;
    zipCode: string;
    mileage: string;
    numberOwners: string;
    price: string;
    hasIssue: boolean;
    cleanHistoryReport: boolean;
    accident: boolean;
    defaultImage: any;
    condition: string;
    features: string[]
    comment: string;
    termsCondition: boolean;
    vin: string;
    state: string;
    city: string;
    streetAddress: string;
    carImages: ICarImages[]
}