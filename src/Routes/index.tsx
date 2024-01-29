import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Options from "../Pages/Options";
import RegisterDealership from "../Components/Site/RegisterDealership";
import RegisterUser from "../Components/Site/RegisterUser";
import Dashboard from "../Pages/Dashboard";
import Cookies from 'js-cookie';
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
            <Route path="/options" element={<Options />} />
            <Route
              path="/register_dealership"
              element={<RegisterDealership />}
            />
            <Route path="/register_user" element={<RegisterUser />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
