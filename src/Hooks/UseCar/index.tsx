import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../State";
import { getFeaturesGrouped, postSellCar } from "../../State/Car/CarAction";
import { ISellCarRequest } from "../../Data/CarDtos/SellCarDto";

const useCar = () => {
    const carData = useSelector((state: RootState) => state.car);

    const dispatch = useDispatch<AppDispatch>();

    const handleGetFeaturesGrouped = async () => {
        await dispatch(getFeaturesGrouped());
    };

    const handleSellCar = (values: ISellCarRequest): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                const formData = new FormData();
                Object.keys(values).forEach((k) => {
                    const key = k as keyof ISellCarRequest;
                    if (key !== "defaultImage" && key !== "carImages") {
                        formData.set(key, values[key] as string);
                    } else {
                        if (key === "defaultImage") {
                            const image = values[key].file;
                            formData.append(key, image as Blob);
                        }
                        if (key === "carImages") {
                            const carImages = values[key];
                            carImages.forEach((carImage) => {
                                formData.append(key, carImage.file);
                            });
                        }
                    }
                });

                const data = await dispatch(postSellCar(formData));
                if (data.payload) {
                    resolve(data.payload);
                } else {
                    reject(new Error("Failed to post sell car data."));
                }
            } catch (error) {
                reject(error);
            }
        });
    };


    return {
        featuresGroupedData: carData.featuresGrouped,
        handleGetFeaturesGrouped,
        handleSellCar,
        loading: carData.loading
    };
};

export default useCar;
