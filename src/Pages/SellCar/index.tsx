import { useEffect } from 'react'
import useBrand from '../../Hooks/UseBrand';
import useCar from '../../Hooks/UseCar';
import useUser from '../../Hooks/UseUser';
import { WithAuth } from '../../Components/Template/WithAuth';
import SellCarForm from '../../Components/Site/SellCar/SellCarForm';
import useLocation from '../../Hooks/UseLoaction';
import "./index.scss"
import LoadingComponent from '../../Components/Common/Loading';

const SellCarPage = () => {
  const { handleGetFeaturesGrouped, featuresGroupedData, handleSellCar, loading } = useCar();
  const { loggedUser, handleGetUserById, userData } = useUser();
  const { handleGetModelsListById } = useBrand()
  const { handleGetZipCode, zipCodeData } = useLocation()

  useEffect(() => {
    if (loggedUser.id) {
      handleGetUserById(loggedUser.id)
    }
    handleGetFeaturesGrouped();
  }, [])

  return (
    <div className="sell-car-page">
      <SellCarForm
        handleGetModelsListById={handleGetModelsListById}
        userData={userData}
        featuresGroupedData={featuresGroupedData}
        handleSellCar={handleSellCar}
        handleGetZipCode={handleGetZipCode}
        zipCodeData={zipCodeData}
        loading={loading}
      />
      <LoadingComponent loading={loading} />
    </div>
  )
}

export const SellCar = WithAuth(SellCarPage);
