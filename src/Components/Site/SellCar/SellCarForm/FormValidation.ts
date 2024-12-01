import { ICarImages, IErrors, ISellCarForm } from "../../../../Data/CarDtos/SellCarDto";

export const formValidations = (
    form: ISellCarForm,
    carImages: ICarImages[]
) => {
    const errors: IErrors = {
    };


    if (!form.make.trim()) {
        errors.details = { ...errors.details }
        errors.details.make = "Please inform a make name";
    }

    if (!form.model.trim()) {
        errors.details = { ...errors.details }
        errors.details.model = "Please inform a model name";
    }

    if (!form.year.trim()) {
        errors.details = { ...errors.details }
        errors.details.year = "Please inform a year";
    }

    if (!form.transmission.trim()) {
        errors.details = { ...errors.details }
        errors.details.transmission = "Please inform a transmission";
    }

    if (!form.drivetrain.trim()) {
        errors.details = { ...errors.details }
        errors.details.drivetrain = "Please inform a drivetrain";
    }

    if (!form.engine.trim()) {
        errors.details = { ...errors.details }
        errors.details.engine = "Please inform a engine";
    }

    if (!form.exteriorColor.trim()) {
        errors.details = { ...errors.details }
        errors.details.exteriorColor = "Please inform an exterior color";
    }

    if (!form.interiorColor.trim()) {
        errors.details = { ...errors.details }
        errors.details.interiorColor = "Please inform an interior color";
    }

    if (!form.mileage.trim()) {
        errors.details = { ...errors.details }
        errors.details.mileage = "Please inform a mileage";
    }

    if (!form.streetAddress.trim()) {
        errors.details = { ...errors.details }
        errors.details.streetAddress = "Please inform a street address";
    }
    if (!form.state.trim()) {
        errors.details = { ...errors.details }
        errors.details.state = "Please inform a state";
    }
    if (!form.city.trim()) {
        errors.details = { ...errors.details }
        errors.details.city = "Please inform a city";
    }
    if (!form.zipCode.trim()) {
        errors.details = { ...errors.details }
        errors.details.zipCode = "Please inform a zip code";
    }

    if (!form.numberKeys.trim()) {
        errors.details = { ...errors.details }
        errors.details.numberKeys = "Please inform the number of keys";
    }

    if (!form.numberOwners.trim()) {
        errors.details = { ...errors.details }
        errors.details.numberOwners = "Please inform the number of owners";
    }

    if (!form.price.trim()) {
        errors.price = "Please inform a price";
    }

    if (!form.condition.trim()) {
        errors.condition = "Please inform a condition";
    }

    if (!form.defaultImage) {
        errors.images = { ...errors.images };
        errors.images.defaulImage = "Please upload a default image";
    }

    if (carImages.length < 1) {
        errors.images = { ...errors.images };
        errors.images.carImages = "Please upload at least one image";
    }

    if (!form.vin) {
        errors.personalInfo = { ...errors.personalInfo };
        errors.personalInfo.vin = "Please inform a vin number";
    }


    if (!form.termsCondition) {
        errors.personalInfo = { ...errors.personalInfo };
        errors.personalInfo.termsCondition = "Please agree with terms and condition";
    }



    return {
        formErros: errors,
        hasErros: Object.keys(errors).length !== 0,
    };
};
