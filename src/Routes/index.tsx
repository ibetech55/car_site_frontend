import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Options from "../Pages/Options";
import AdvancedSearch from "../Pages/AdvancedSearch";
import RegisterUser from "../Pages/RegisterPrivateUser";
import RegisterDealership from "../Pages/RegisterDealership";
import ActivateAccount from "../Pages/ActivateAccount";
import AccountCreated from "../Pages/AccountCreated";
import { Dashboard } from "../Pages/Dashboard";
import { getCookie } from "../Utils/HandleCookie";
import { LOGIN_TOKEN } from "../Configs/Constants/Tokens";
import { SiteTemplate } from "../Components/Template/SiteTemplate";
import { Profile } from "../Pages/Profile";
import { SellCar } from "../Pages/SellCar";
import "../App.scss";

function AppRoutes() {
  const loggedIn = getCookie(LOGIN_TOKEN) && (
    <Routes>
      <Route element={<SiteTemplate />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account_created" element={<AccountCreated />} />
        <Route
          path="/activate_account/:account_token"
          element={<ActivateAccount />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sell_car" element={<SellCar />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );

  const notLoggedIn = !getCookie(LOGIN_TOKEN) && (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/sign_up_options" element={<Options />} />
      <Route path="/advanced_search" element={<AdvancedSearch />} />
      <Route path="/register_user" element={<RegisterUser />} />
      <Route path="/register_dealership" element={<RegisterDealership />} />
      <Route path="/account_created" element={<AccountCreated />} />
      <Route
        path="/activate_account/:account_token"
        element={<ActivateAccount />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  const getRoutes = () => {
    if (loggedIn) return loggedIn;
    else if (notLoggedIn) return notLoggedIn;
  };
  return (
    <div>
      <BrowserRouter>{getRoutes()}</BrowserRouter>
    </div>
  );
}

export default AppRoutes;
