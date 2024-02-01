import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Options from "../Pages/Options";
import Dashboard from "../Pages/Dashboard";
import Cookies from 'js-cookie';
import AdvancedSearch from "../Pages/AdvancedSearch";
import RegisterUser from "../Pages/RegisterPrivateUser";
import RegisterDealership from "../Pages/RegisterDealership";
import ActivateAccount from "../Pages/ActivateAccount";
function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        {Cookies.get('login_token') ? (
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/sign_up_options" element={<Options />} />
            <Route path="/advanced_search" element={<AdvancedSearch />} />
            <Route path="/register_user" element={<RegisterUser />} />
            <Route path="/register_dealership" element={<RegisterDealership />} />
            <Route path="/activate_account" element={<ActivateAccount />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
